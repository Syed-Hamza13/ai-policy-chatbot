import { useState } from "react";

function MessageBubble({ message, sender }) {

  const isUser = sender === "user";

  const [expanded, setExpanded] = useState(false);

  const isLongMessage = message.length > 280;

  if (isUser) {
    return (
      <div className="w-full flex justify-end">

        <div
          className="
            max-w-[75%]
            bg-emerald-700
            text-white
            px-4
            py-3
            rounded-2xl
            text-sm
            leading-7
          "
        >

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300

              ${expanded
                ? "max-h-[1000px]"
                : "max-h-[140px]"
              }
            `}
          >
            {message}
          </div>

          {isLongMessage && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="
                mt-2
                text-emerald-100
                text-xs
                hover:text-white
                transition
              "
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}

        </div>

      </div>
    );
  }

  return (
    <div className="w-full">

      <div
        className="
          w-full
          text-zinc-100
          text-sm
          leading-8
          px-1
        "
      >
        {message}
      </div>

    </div>
  );
}

export default MessageBubble;