function DashboardHeader() {

  return (
    <div className="
      h-[65px]
      border-b
      dark:border-zinc-800
      border-zinc-200

      dark:bg-zinc-950
      bg-white
    ">

      <div className="
        h-full
        max-w-7xl
        mx-auto
        px-6
        flex
        items-center
        justify-between
      ">

        <div>

          <h1 className="
            text-lg
            font-semibold
            dark:text-white
            text-zinc-900
          ">
            AxiomAI Dashboard
          </h1>

          <p className="
            text-sm
            dark:text-zinc-400
            text-zinc-500
          ">
            Manage enterprise policies and AI indexing
          </p>

        </div>

      </div>

    </div>
  );
}

export default DashboardHeader;