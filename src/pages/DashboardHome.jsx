import StatCard from "../components/dashboard/StatCard";

export default function DashboardHome() {
    return (

        <div className="p-6 space-y-6">
            <h3 className="font-bold text-3xl text-slate-700 mb-8">Welcome on Dashboard</h3>
            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Uptime" value="99.98%" change="+2%" positive />
                <StatCard title="Active Monitors" value="24" change="+5%" positive />
                <StatCard title="Avg Response Time" value="142ms" change="+10%" positive />
                <StatCard title="Total Incidents" value="3" change="-2%" />
            </div>

            {/* Simple Table */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4">Service Status</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b text-gray-600 text-sm">
                                <th className="py-2">Status</th>
                                <th>Service</th>
                                <th>URL</th>
                                <th>Uptime</th>
                                <th>Response</th>
                            </tr>
                        </thead>

                        <tbody className="text-sm">
                            {[
                                {
                                    status: "Up",
                                    service: "Main Website",
                                    uptime: "100%",
                                    response: "142ms",
                                },
                                {
                                    status: "Up",
                                    service: "API Server",
                                    uptime: "99.9%",
                                    response: "95ms",
                                },
                                {
                                    status: "Degraded",
                                    service: "Storage Service",
                                    uptime: "98.2%",
                                    response: "260ms",
                                },
                            ].map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs
                          ${item.status === "Up"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>{item.service}</td>
                                    <td className="text-blue-600">example.com</td>
                                    <td>{item.uptime}</td>
                                    <td>{item.response}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
