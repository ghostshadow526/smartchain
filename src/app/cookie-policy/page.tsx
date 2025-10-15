'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CookiePolicyPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground text-sm mb-8">Last Updated: October 26, 2023</p>

            <div className="space-y-6 text-muted-foreground">
                <p>
                    This Cookie Policy explains how ECNFOUNDATION ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>

                <h2 className="text-2xl font-semibold text-foreground pt-4">What are cookies?</h2>
                <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>

                <h2 className="text-2xl font-semibold text-foreground pt-4">Why do we use cookies?</h2>
                <p>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
                </p>

                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Strictly Necessary Cookies:</strong> These are essential for you to browse the website and use its features, such as accessing secure areas of the site.</li>
                    <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, like which pages you visited and which links you clicked on. None of this information can be used to identify you.</li>
                    <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you have made in the past.</li>
                    <li><strong>Marketing Cookies:</strong> These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground pt-4">How can you control cookies?</h2>
                <p>
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in our Cookie Consent Manager. You can access the Cookie Consent Manager by clicking on the "Cookie Preferences" link in the footer of our website.
                </p>

                <div className="text-center pt-8">
                     <Button asChild>
                        <Link href="/cookie-preferences">Manage Cookie Preferences</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
