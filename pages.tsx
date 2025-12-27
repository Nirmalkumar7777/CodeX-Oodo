import Sidebar from "@/components/sections/sidebar";
import Header from "@/components/sections/header";
import StatsCards from "@/components/sections/stats-cards";
import RecentRequests from "@/components/sections/recent-requests";
import EquipmentStatus from "@/components/sections/equipment-status";
import TeamPerformance from "@/components/sections/team-performance";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f9fafb]">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />
        <div className="p-6 space-y-6">
          <StatsCards />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentRequests />
            </div>
            <div>
              <EquipmentStatus />
            </div>
          </div>
          <TeamPerformance />
        </div>
      </main>
    </div>
  );
}
