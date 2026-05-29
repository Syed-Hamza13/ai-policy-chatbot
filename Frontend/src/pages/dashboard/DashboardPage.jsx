import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import UploadSection from "@/components/dashboard/UploadSection";
import PolicyTable from "@/components/dashboard/PolicyTable";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="
      min-h-screen
      dark:bg-zinc-950
      bg-zinc-100
    ">

      <DashboardHeader />
        
      <div className="max-w-7xl mx-auto px-6 pt-6">
        
        <button
          onClick={() => navigate("/chat")}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-2
            rounded-xl
            transition
          "
        >
          Open AI Chatbot
        </button>
        
      </div>


      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">

        <StatsCards />

        <UploadSection />

        <PolicyTable />

      </div>

    </div>
  );
}

export default DashboardPage;