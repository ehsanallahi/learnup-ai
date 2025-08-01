// app/layout.jsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata = {
  title: "LearnUp AI Dashboard",
  description: "Organization analytics dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Navbar spans full width */}
        <Navbar />

        {/* Sidebar + Main content layout */}
        <SidebarProvider>
          <div className="flex min-h-screen">
            {/* Sidebar (starts after navbar) */}
            <Sidebar className="mt-16" />

            {/* Main content (also starts after navbar) */}
            <main className="p-6 flex-1 overflow-auto mt-16">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
