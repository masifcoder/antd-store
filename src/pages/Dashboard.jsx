import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="p-6 space-y-6">

          <Outlet />

        </div>
      </div>
    </div>
  );
}