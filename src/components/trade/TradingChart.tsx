'use client';

import { useEffect, useRef, useState } from 'react';
import { createChart, IChartApi, CandlestickData, ColorType, UTCTimestamp, LineStyle, ISeriesApi } from 'lightweight-charts';
import type { OHLCEntry } from '@/lib/types';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface TradingChartProps {
    coinId: string;
}

// Technical Analysis functions
const calculateSMA = (data: CandlestickData[], period: number) => {
    const sma: { time: UTCTimestamp, value: number }[] = [];
    for (let i = period - 1; i < data.length; i++) {
        const sum = data.slice(i - period + 1, i + 1).reduce((acc, val) => acc + val.close, 0);
        sma.push({ time: data[i].time, value: sum / period });
    }
    return sma;
};

const calculateEMA = (data: CandlestickData[], period: number) => {
    const ema: { time: UTCTimestamp, value: number }[] = [];
    const k = 2 / (period + 1);
    if (data.length > period) {
        let sum = 0;
        for (let i = 0; i < period; i++) {
            sum += data[i].close;
        }
        ema.push({ time: data[period - 1].time, value: sum / period });

        for (let i = period; i < data.length; i++) {
            const nextEma = data[i].close * k + ema[ema.length - 1].value * (1 - k);
            ema.push({ time: data[i].time, value: nextEma });
        }
    }
    return ema;
};


export default function TradingChart({ coinId }: TradingChartProps) {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
    const [timeframe, setTimeframe] = useState('30'); // days
    const [indicator, setIndicator] = useState<string>('none');
    const indicatorSeriesRef = useRef<ISeriesApi<"Line"> | null>(null);
    const [chartData, setChartData] = useState<CandlestickData[]>([]);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        if (!chartRef.current) {
            chartRef.current = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: '#000000' },
                    textColor: 'rgba(255, 255, 255, 0.9)',
                },
                grid: {
                    vertLines: { color: '#222' },
                    horzLines: { color: '#222' },
                },
                width: chartContainerRef.current.clientWidth,
                height: chartContainerRef.current.clientHeight,
            });

            seriesRef.current = chartRef.current.addCandlestickSeries({
                upColor: '#26a69a',
                downColor: '#ef5350',
                borderDownColor: '#ef5350',
                borderUpColor: '#26a69a',
                wickDownColor: '#ef5350',
                wickUpColor: '#26a69a',
            });
        }
        
        const handleResize = () => {
            if (chartRef.current && chartContainerRef.current) {
                chartRef.current.resize(chartContainerRef.current.clientWidth, chartContainerRef.current.clientHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                 const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${timeframe}`);
                const data = await response.json();

                const ohlcData = data.prices.map((priceInfo: number[], index: number) => {
                  const timestamp = priceInfo[0];
                  const open = priceInfo[1];
                  const close = index + 1 < data.prices.length ? data.prices[index + 1][1] : open;
                  const high = Math.max(open, close);
                  const low = Math.min(open, close);

                  return [timestamp, open, high, low, close];
                }) as OHLCEntry[];

                const formattedData: CandlestickData[] = ohlcData.map((d: OHLCEntry) => ({
                    time: (d[0] / 1000) as UTCTimestamp,
                    open: d[1],
                    high: d[2],
                    low: d[3],
                    close: d[4],
                }));
                
                setChartData(formattedData);
                if (seriesRef.current) {
                    seriesRef.current.setData(formattedData);
                }
            } catch (error) {
                console.error("Failed to fetch chart data", error);
            }
        };

        fetchChartData();
    }, [coinId, timeframe]);
    
    useEffect(() => {
        if (indicatorSeriesRef.current && chartRef.current) {
            chartRef.current.removeSeries(indicatorSeriesRef.current);
            indicatorSeriesRef.current = null;
        }

        if (indicator !== 'none' && chartData.length > 0 && chartRef.current) {
            let indicatorData;
            if (indicator === 'sma20') {
                indicatorData = calculateSMA(chartData, 20);
            } else if (indicator === 'ema20') {
                indicatorData = calculateEMA(chartData, 20);
            } else if (indicator === 'sma50') {
                indicatorData = calculateSMA(chartData, 50);
            } else if (indicator === 'ema50') {
                indicatorData = calculateEMA(chartData, 50);
            }
            
            if (indicatorData) {
                indicatorSeriesRef.current = chartRef.current.addLineSeries({ color: 'rgba(79, 125, 247, 1)', lineWidth: 2 });
                indicatorSeriesRef.current.setData(indicatorData);
            }
        }
    }, [indicator, chartData]);

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.remove();
                chartRef.current = null;
            }
        }
    }, []);

    return (
        <div className="w-full h-full relative flex flex-col">
            <div className="flex-grow relative" ref={chartContainerRef}>
                <Skeleton className="absolute inset-0 w-full h-full" />
            </div>
            <div className="flex items-center justify-between p-2 border-t border-border">
                <div className="flex items-center gap-2">
                    <Button variant={timeframe === '1' ? 'secondary' : 'ghost'} size="sm" onClick={() => setTimeframe('1')}>1D</Button>
                    <Button variant={timeframe === '7' ? 'secondary' : 'ghost'} size="sm" onClick={() => setTimeframe('7')}>7D</Button>
                    <Button variant={timeframe === '30' ? 'secondary' : 'ghost'} size="sm" onClick={() => setTimeframe('30')}>1M</Button>
                    <Button variant={timeframe === '90' ? 'secondary' : 'ghost'} size="sm" onClick={() => setTimeframe('90')}>3M</Button>
                    <Button variant={timeframe === '365' ? 'secondary' : 'ghost'} size="sm" onClick={() => setTimeframe('365')}>1Y</Button>
                </div>
                <div>
                    <Select value={indicator} onValueChange={setIndicator}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Indicators" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="sma20">SMA (20)</SelectItem>
                            <SelectItem value="ema20">EMA (20)</SelectItem>
                            <SelectItem value="sma50">SMA (50)</SelectItem>
                            <SelectItem value="ema50">EMA (50)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
