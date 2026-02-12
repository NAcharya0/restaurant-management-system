import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LayoutDashboard, ShoppingCart, Calculator, Warehouse, Settings, User } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Restaurant Management System",
    description: "Advanced RMS for modern dining",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
                    {/* Sidebar */}
                    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">GourmetOS</h1>
                            <p className="text-xs text-gray-500 mt-1">Restaurant Manager</p>
                        </div>

                        <nav className="flex-1 px-4 space-y-2">
                            <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                <LayoutDashboard size={20} />
                                <span>Dashboard</span>
                            </Link>
                            <Link href="/orders" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                <ShoppingCart size={20} />
                                <span>Orders</span>
                            </Link>
                            <Link href="/inventory" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                <Warehouse size={20} />
                                <span>Inventory</span>
                            </Link>
                            <Link href="/billing" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                <Calculator size={20} />
                                <span>Billing</span>
                            </Link>
                        </nav>

                        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                            <button className="flex items-center gap-3 px-4 py-2 w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <Settings size={20} />
                                <span>Settings</span>
                            </button>
                            <div className="flex items-center gap-3 mt-4 px-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                                    JS
                                </div>
                                <div className="text-sm">
                                    <p className="font-medium dark:text-white">John Smith</p>
                                    <p className="text-xs text-gray-500">Manager</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 overflow-auto p-8">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
