import { Send } from "lucide-react";
import { useRef, useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setInput(e.target.value);

    const textarea = textareaRef.current;

    textarea.style.height = "auto";

    textarea.style.height = Math.min(textarea.scrollHeight, 180) + "px";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    onSend(input);

    setInput("");

    textareaRef.current.style.height = "auto";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      handleSend();
    }
  };

  return (
    <div className="dark:bg-zinc-950 bg-zinc-100 px-4 pb-5 pt-2">
      <div className="max-w-3xl mx-auto">
        <div
          className="
  flex
  items-end
  gap-3
  rounded-3xl
  border
  px-4
  py-3

  dark:bg-zinc-900
  bg-white

  dark:border-zinc-800
  border-zinc-300
"
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask about company policies..."
            className="
              flex-1
              bg-transparent
              outline-none
              resize-none
             dark:text-white
text-zinc-900
              placeholder:text-zinc-500
              text-sm
              leading-6
              max-h-[180px]
              overflow-y-auto
            "
          />

          <button
            onClick={handleSend}
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              p-2.5
              rounded-2xl
              self-end
            "
          >
            <Send size={18} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
