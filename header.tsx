import React from "react";
import { Plus, Bell, ChevronDown } from "lucide-react";

/**
 * Header component for the GearGuard Dashboard.
 * Includes page title, maintenance overview, date range selector,
 * new request action, and notification center.
 * 
 * Theme: Light
 * Primary Color: #0D9488 (Teal-600)
 */
const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title and Subtitle Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-8">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-1 text-sm leading-5">
            Maintenance management overview
          </p>
        </div>

        {/* Global Actions Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            {/* Date Range Selector */}
            <div className="relative">
              <select 
                className="appearance-none border border-gray-300 rounded-md bg-white px-3 py-2 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer transition-colors hover:border-gray-400"
                defaultValue="This Week"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* New Request Button */}
            <button className="inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 px-3 py-2 text-sm shadow-sm active:scale-95">
              <Plus className="mr-2 h-4 w-4" />
              New Request
            </button>
          </div>

          {/* Notification Bell with Badge */}
          <div className="relative">
            <button className="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100 focus:ring-teal-500 p-2 text-sm relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-white">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
