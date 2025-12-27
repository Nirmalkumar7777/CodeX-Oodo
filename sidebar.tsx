import React from "react";
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  ClipboardList, 
  Calendar, 
  BarChart3,
  Wrench
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-[18px] h-[18px]" />, href: "/", active: true },
    { name: "Equipment", icon: <Settings className="w-[18px] h-[18px]" />, href: "/equipment" },
    { name: "Maintenance Teams", icon: <Users className="w-[18px] h-[18px]" />, href: "/teams" },
    { name: "Requests", icon: <ClipboardList className="w-[18px] h-[18px]" />, href: "/requests" },
    { name: "Calendar", icon: <Calendar className="w-[18px] h-[18px]" />, href: "/calendar" },
    { name: "Reports", icon: <BarChart3 className="w-[18px] h-[18px]" />, href: "/reports" },
  ];

  return (
    <div className="w-64 bg-white shadow-sm border-r border-[#e5e7eb] h-screen fixed left-0 top-0 flex flex-col">
      {/* Branding Section */}
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#0d9488] rounded-lg flex items-center justify-center">
            {/* Using a Lucide wrench icon as specified in "ri-tools-fill" logic */}
            <Wrench className="text-white w-5 h-5 fill-current" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#111827] leading-tight tracking-tight">
              GearGuard
            </h1>
            <p className="text-sm text-[#6b7280]">
              Maintenance Tracker
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="px-4 space-y-1 mt-2">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
              item.active
                ? "bg-[#f0fdfa] text-[#0d9488] border-r-2 border-[#0d9488]"
                : "text-[#4b5563] hover:bg-[#f9fafb] hover:text-[#111827]"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </a>
        ))}
      </nav>

      {/* User Profile Footer */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-[#f9fafb] rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <img
              alt="Admin"
              className="w-10 h-10 rounded-full object-cover"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8bbec636-031f-4075-88fc-a9f42d4b318f-yqnnys-readdy-co/assets/icons/a0e2793208819875298f4a213eb4b6a8-1.jpg"
              width={40}
              height={40}
            />
            <div>
              <p className="text-sm font-semibold text-[#111827]">
                Admin User
              </p>
              <p className="text-xs text-[#6b7280]">
                Maintenance Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
