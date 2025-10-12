'use client';

import { useEffect, useRef } from 'react';
import { createChart, IChartApi, CandlestickData, ColorType, UTCTimestamp } from 'lightweight-charts';
import type { OHLCEntry } from '@/lib/types';
import { Skeleton } from '../ui/skeleton';

interface TradingChartProps {
    coinId: string;
}

export default function TradingChart({ coinId }: TradingChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<any>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Initialize chart
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

    const fetchChartData = async () => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=30`);
            const data: OHLCEntry[] = await response.json();
            const formattedData: CandlestickData[] = data.map(d => ({
                time: (d[0] / 1000) as UTCTimestamp,
                open: d[1],
                high: d[2],
                low: d[3],
                close: d[4],
            }));
            seriesRef.current.setData(formattedData);
        } catch (error) {
            console.error("Failed to fetch chart data", error);
        }
    };
    
    fetchChartData();

    // Handle resize
    const handleResize = () => {
        if (chartRef.current && chartContainerRef.current) {
            chartRef.current.resize(chartContainerRef.current.clientWidth, chartContainerRef.current.clientHeight);
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        // Do not destroy the chart on re-render, only on component unmount
    };
  }, [coinId]);
  
  useEffect(() => {
    return () => {
      if(chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    }
  }, []);

  return (
    <div ref={chartContainerRef} className="w-full h-full relative">
       <Skeleton className="absolute inset-0 w-full h-full" />
    </div>
  );
}
