import ThemeToggle from "./ThemeToggle";

function ChatHeader() {
  return (
    <div className="
  h-[58px]
  flex
  items-center
  justify-between
  px-5
  border-b
  transition-colors

  dark:bg-zinc-950
  bg-white

  dark:border-zinc-800
  border-zinc-200
">
      <div>
        <h2 className="dark:text-white text-zinc-900 text-[15px] font-semibold leading-none">
          Enterprise Policy Assistant
        </h2>

        <p className="dark:text-zinc-500 text-zinc-600 text-[11px] mt-1">
          Ask company policies and guidelines
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>

          <span className="dark:text-zinc-500 text-zinc-600 text-xs">AI Online</span>
        </div>

        <ThemeToggle />
      </div> 
    </div>
  );
}

export default ChatHeader;
