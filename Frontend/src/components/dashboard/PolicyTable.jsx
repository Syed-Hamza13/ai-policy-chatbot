function PolicyTable() {

  const policies = [
    {
      name: "HR_Policy.docx",
      status: "Indexed",
      date: "28 May 2026",
    },

    {
      name: "Remote_Work_Guidelines.docx",
      status: "Processing",
      date: "27 May 2026",
    },
  ];

  return (
    <div className="
      rounded-2xl
      border
      dark:border-zinc-800
      border-zinc-200

      dark:bg-zinc-900
      bg-white

      p-6
    ">

      <h2 className="
        text-lg
        font-semibold
        dark:text-white
        text-zinc-900
      ">
        Uploaded Policies
      </h2>

      <div className="mt-6 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="
              border-b
              dark:border-zinc-800
              border-zinc-200
            ">

              <th className="text-left pb-4 dark:text-zinc-300 text-zinc-700">
                File
              </th>

              <th className="text-left pb-4 dark:text-zinc-300 text-zinc-700">
                Status
              </th>

              <th className="text-left pb-4 dark:text-zinc-300 text-zinc-700">
                Upload Date
              </th>

            </tr>

          </thead>

          <tbody>

            {policies.map((policy, index) => (

              <tr
                key={index}
                className="
                  border-b
                  dark:border-zinc-800
                  border-zinc-200
                "
              >

                <td className="
                  py-4
                  dark:text-white
                  text-zinc-900
                ">
                  {policy.name}
                </td>

                <td className="py-4">

                  <span className="
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    bg-emerald-100
                    text-emerald-700
                  ">
                    {policy.status}
                  </span>

                </td>

                <td className="
                  py-4
                  dark:text-zinc-400
                  text-zinc-500
                ">
                  {policy.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PolicyTable;
