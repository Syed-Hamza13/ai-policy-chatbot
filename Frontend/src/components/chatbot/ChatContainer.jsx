import MessageBubble from "./MessageBubble";

function ChatContainer({ messages }) {

  return (
    <div className="flex-1 overflow-y-auto bg-zinc-950 px-4 py-6">

      <div className="max-w-3xl mx-auto space-y-8">

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

      </div>

    </div>
  );
}

export default ChatContainer;