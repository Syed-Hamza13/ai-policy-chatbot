

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import UploadSection from "@/components/dashboard/UploadSection";
import PolicyTable from "@/components/dashboard/PolicyTable";

function DashboardPage() {

  return (
    <div className="
      min-h-screen
      dark:bg-zinc-950
      bg-zinc-100
    ">

      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">

        <StatsCards />

        <UploadSection />

        <PolicyTable />

      </div>

    </div>
  );
}

export default DashboardPage;