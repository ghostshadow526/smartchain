'use client';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function DoNotSharePage() {
    const { toast } = useToast();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast({
            title: "Request Submitted",
            description: "Your request has been received and will be processed.",
        });
    };

    return (
        <div className="container mx-auto py-12 px-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Do Not Sell or Share My Personal Information</h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
                Under certain privacy laws, you have the right to opt out of the "sale" or "sharing" of your personal information. Please use the form below to submit your request.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 p-8 border rounded-lg">
                <p className="text-muted-foreground">
                    ECNFOUNDATION does not sell your personal information in the traditional sense. However, some of our data sharing for advertising purposes may be considered a "sale" or "sharing" under privacy laws. By submitting this form, you are opting out of such activities.
                </p>

                <div className="flex items-center space-x-2">
                    <Checkbox id="opt-out-checkbox" required />
                    <Label htmlFor="opt-out-checkbox" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I confirm that I want to opt out of the sale or sharing of my personal information.
                    </Label>
                </div>
                
                <Button type="submit" className="w-full">Submit Request</Button>
            </form>
        </div>
    );
}
