function StatsCards() {

  const cards = [
    {
      title: "Uploaded Policies",
      value: "24",
    },

    {
      title: "Processed Documents",
      value: "18",
    },

    {
      title: "AI Queries",
      value: "1,284",
    },
  ];

  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-5
    ">

      {cards.map((card, index) => (

        <div
          key={index}
          className="
            rounded-2xl
            border
            dark:border-zinc-800
            border-zinc-200

            dark:bg-zinc-900
            bg-white

            p-5
          "
        >

          <p className="
            text-sm
            dark:text-zinc-400
            text-zinc-500
          ">
            {card.title}
          </p>

          <h2 className="
            mt-3
            text-3xl
            font-bold
            dark:text-white
            text-zinc-900
          ">
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}

export default StatsCards;