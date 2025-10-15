'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function CookiePreferencesPage() {
    const { toast } = useToast();

    const handleSaveChanges = () => {
        toast({
            title: "Preferences Saved",
            description: "Your cookie preferences have been updated.",
        });
    };

    return (
        <div className="container mx-auto py-12 px-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Cookie Preferences</h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
                You can manage your cookie preferences below. Note that strictly necessary cookies cannot be disabled as they are required for the basic functionality of our website.
            </p>

            <Card>
                <CardHeader>
                    <CardTitle>Manage Your Cookies</CardTitle>
                    <CardDescription>Select which types of cookies you are happy for us to use.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <Label htmlFor="strictly-necessary" className="font-bold">Strictly Necessary Cookies</Label>
                            <p className="text-sm text-muted-foreground">These cookies are essential for the website to function and cannot be disabled.</p>
                        </div>
                        <Switch id="strictly-necessary" checked disabled />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                         <div>
                            <Label htmlFor="performance" className="font-bold">Performance & Analytics Cookies</Label>
                            <p className="text-sm text-muted-foreground">These cookies help us understand how visitors interact with our website.</p>
                        </div>
                        <Switch id="performance" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <Label htmlFor="functional" className="font-bold">Functional Cookies</Label>
                            <p className="text-sm text-muted-foreground">These cookies enable enhanced functionality and personalization.</p>
                        </div>
                        <Switch id="functional" />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <Label htmlFor="marketing" className="font-bold">Marketing Cookies</Label>
                            <p className="text-sm text-muted-foreground">These cookies are used to track visitors and display relevant ads.</p>
                        </div>
                        <Switch id="marketing" />
                    </div>

                    <Button className="w-full" onClick={handleSaveChanges}>Save Changes</Button>
                </CardContent>
            </Card>
        </div>
    );
}
