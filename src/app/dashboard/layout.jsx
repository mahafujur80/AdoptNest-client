import DashboardNavbar from "@/components/DashboardNavbar";
import "../globals.css";
import DashboardNavigation from "@/components/DashboardNavigation";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="overflow-hidden">

                <DashboardNavbar />

                <div className="flex h-[calc(100vh-64px)] bg-gradient-to-br from-emerald-50 via-white to-blue-50">

                    {/* Sidebar */}
                    <div className="hidden md:block w-64 h-full bg-gradient-to-br from-emerald-100 to-blue-100">
                        <DashboardNavigation />
                    </div>

                    {/* Content */}
                    <main className="flex-1 overflow-y-auto p-5">
                        {children}
                    </main>
                        
                </div>
              <Toaster/>
            </body>
        </html>
    );
}