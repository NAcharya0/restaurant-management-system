import { initialOrders, ingredients } from "@/data/mock-data";
import { AlertCircle, CheckCircle2, Clock, TrendingUp } from "lucide-react";

export default function Dashboard() {
    const activeOrders = initialOrders.filter(o => o.status !== 'Completed');
    const lowStockItems = ingredients.filter(i => i.stock <= i.lowStockThreshold);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h2>
                <span className="text-sm text-gray-500 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                            <h3 className="text-2xl font-bold mt-1">$1,284.50</h3>
                        </div>
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                    <p className="text-xs text-green-600 mt-4 flex items-center gap-1">
                        <TrendingUp size={12} /> +12.5% from yesterday
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Active Orders</p>
                            <h3 className="text-2xl font-bold mt-1">{activeOrders.length}</h3>
                        </div>
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Clock size={20} />
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Orders Completed</p>
                            <h3 className="text-2xl font-bold mt-1">24</h3>
                        </div>
                        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                            <CheckCircle2 size={20} />
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Low Stock Alerts</p>
                            <h3 className="text-2xl font-bold mt-1 text-red-500">{lowStockItems.length}</h3>
                        </div>
                        <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                            <AlertCircle size={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Live Orders Column */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Live Orders</h3>
                            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
                        </div>
                        <div className="p-6 space-y-4">
                            {activeOrders.map((order) => (
                                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                                            T{order.tableId}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Order #{order.id}</p>
                                            <p className="text-sm text-gray-500">
                                                {order.items.length} items • ${order.total.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Ready' ? 'bg-green-100 text-green-700' :
                                                order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {order.status}
                                        </span>
                                        <p className="text-xs text-gray-500">
                                            {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {activeOrders.length === 0 && (
                                <p className="text-center text-gray-500 py-8">No active orders</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Stock Alerts Column */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Stock Alerts</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {lowStockItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</p>
                                                <p className="text-xs text-gray-500">{item.stock} {item.unit} remaining</p>
                                            </div>
                                        </div>
                                        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 px-2 py-1 bg-indigo-50 rounded">
                                            Restock
                                        </button>
                                    </div>
                                ))}
                                {lowStockItems.length === 0 && (
                                    <div className="flex flex-col items-center justify-center py-6 text-gray-400">
                                        <CheckCircle2 size={32} className="mb-2 opacity-50" />
                                        <p className="text-sm">All Stock Levels Normal</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
