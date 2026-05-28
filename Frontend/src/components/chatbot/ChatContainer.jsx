import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatContainer({ messages = [] }) {

  const bottomRef = useRef(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto dark:bg-zinc-950 bg-zinc-100 px-4 py-6">

      <div className="max-w-3xl mx-auto space-y-8">

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

        <div ref={bottomRef}></div>

      </div>

    </div>
  );
}

export default ChatContainer;