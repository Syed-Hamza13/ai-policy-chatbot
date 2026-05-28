import { MessageSquare, FileText, Shield } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-[260px] bg-zinc-950 border-r border-zinc-800 flex flex-col">

      <div className="p-5 border-b border-zinc-800">
        <h1 className="text-white text-2xl font-bold">
          AxiomAI
        </h1>

        <p className="text-zinc-400 text-sm mt-1">
          Policy Intelligence System
        </p>
      </div>

      <div className="flex-1 p-4 space-y-2">

        <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition text-white">
          <MessageSquare size={18} />
          New Chat
        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition text-zinc-300">
          <FileText size={18} />
          Policies
        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-900 transition text-zinc-300">
          <Shield size={18} />
          Compliance
        </button>

      </div>

      <div className="p-4 border-t border-zinc-800">
        <div className="bg-zinc-900 rounded-xl p-3">
          <p className="text-white text-sm font-medium">
            Enterprise Plan
          </p>

          <p className="text-zinc-400 text-xs mt-1">
            AI policy assistance enabled
          </p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;