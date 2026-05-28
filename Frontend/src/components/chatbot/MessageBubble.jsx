import { useState } from "react";
import { useTheme } from "next-themes";

function MessageBubble({ message, sender }) {
  const { theme } = useTheme();

  const isUser = sender === "user";

  const [expanded, setExpanded] = useState(false);

  const isLongMessage = message.length > 280;

  if (isUser) {
    return (
      <div className="w-full flex justify-end">
        <div
          className={`
    max-w-[75%]
    px-4
    py-3
    rounded-2xl
    text-sm
    leading-7
    transition-colors

    ${
      theme === "dark"
        ? "bg-emerald-700 text-white"
        : "bg-emerald-100 text-emerald-900 border border-emerald-200"
    }
  `}
        >
          <div
            className={`
              overflow-hidden
              transition-all
              duration-300

              ${expanded ? "max-h-[1000px]" : "max-h-[140px]"}
            `}
          >
            {message}
          </div>

          {isLongMessage && (
            <button
  onClick={() => setExpanded(!expanded)}
  className={`
    mt-2
    text-xs
    transition

    ${
      theme === "dark"
        ? "text-emerald-100 hover:text-white"
        : "text-emerald-700 hover:text-emerald-900"
    }
  `}
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
         dark:text-zinc-100
text-zinc-800
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
