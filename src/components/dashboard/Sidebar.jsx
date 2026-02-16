import {
  LayoutDashboard,
  Bell,
  HelpCircle,
  MessageSquare,
  Settings,
  PackagePlus,
  PackageSearch,
  LogOut
} from "lucide-react";
import { useContext } from "react";

import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const location = useLocation();
  const authCtx = useContext(AuthContext);

  const activeClass = "bg-blue-100 text-blue-600";
  const normalClass = "text-gray-600 hover:bg-gray-100";

  return (
    <aside className="w-64 bg-white border-r border-r-slate-200 min-h-screen hidden md:flex flex-col">
      
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-blue-600">
        SiteScope
      </div>

      <nav className="flex-1 px-4 space-y-2">

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
          ${location.pathname === "/" ? activeClass : normalClass}`}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        {/* Monitoring */}
        <Link
          to="/dashboard/products"
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
          ${location.pathname === "/monitoring" ? activeClass : normalClass}`}
        >
          <PackageSearch size={18} />
          <span>Products</span>
        </Link>

        {/* Logs */}
        <Link
          to="/dashboard/create"
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
          ${location.pathname === "/logs" ? activeClass : normalClass}`}
        >
          <PackagePlus size={18} />
          <span>Add Product</span>
        </Link>

        {/* Alerts */}
        <Link
          to="/Orders"
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
          ${location.pathname === "/alerts" ? activeClass : normalClass}`}
        >
          <Bell size={18} />
          <span>Orders</span>
        </Link>

        {/* Help Center */}
        <Link
          to="/help"
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
          ${location.pathname === "/help" ? activeClass : normalClass}`}
        >
          <LogOut size={18} />
          <span>Help Center</span>
        </Link>

        {/* Feedback */}
        <Link
          to="/feedback"
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
          ${location.pathname === "/feedback" ? activeClass : normalClass}`}
        >
          <MessageSquare size={18} />
          <span>Feedback</span>
        </Link>

        {/* Settings */}
        <Link
          onClick={ () => authCtx.logout() }
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
          ${location.pathname === "/settings" ? activeClass : normalClass}`}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </Link>

      </nav>
    </aside>
  );
}
