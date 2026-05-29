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

  const handleSend = async (text) => {

    if (!text.trim()) return;

    // User message
    const userMessage = {
      sender: "user",
      message: text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {

      // Backend API call
      const response = await fetch(
        "http://127.0.0.1:8000/query/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: text,
          }),
        }
      );

      const data = await response.json();

      // AI response
      const botMessage = {
        sender: "assistant",
        message: data.answer,
      };

      setMessages((prev) => [
        ...prev,
        botMessage,
      ]);

    } catch (error) {

      console.error(error);

      const errorMessage = {
        sender: "assistant",
        message: "Error connecting to backend.",
      };

      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);
    }
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