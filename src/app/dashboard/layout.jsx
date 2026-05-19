import DashboardNavbar from "@/components/DashboardNavbar";
import "../globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <DashboardNavbar />
                <div className="flex gap-10">
                    <div className="max-md:hidden bg-blue-200 max-w-xs w-full h-[90vh]">
                        side bar
                    </div>
                    <main className="container mx-auto flex-1">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}