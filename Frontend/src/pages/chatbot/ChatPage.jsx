import { useState } from "react";

import ChatHeader from "../../components/chatbot/ChatHeader";
import ChatContainer from "../../components/chatbot/ChatContainer";
import ChatInput from "../../components/chatbot/ChatInput";

function ChatPage() {

  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message:
        "Hello. I can help you understand company policies and SOPs.",
    },
  ]);

  const handleSend = (text) => {

    const userMessage = {
      sender: "user",
      message: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {

      const aiResponse = {
        sender: "assistant",
        message:
          "According to company policy section 3.2, temporary employees require manager approval before overtime claims.",
      };

      setMessages((prev) => [...prev, aiResponse]);

    }, 1200);
  };

  return (
    <div className="w-full h-screen dark:bg-zinc-950 bg-zinc-100 flex flex-col">

      <ChatHeader />

      <ChatContainer messages={messages} />

      <ChatInput onSend={handleSend} />

    </div>
  );
}

export default ChatPage;