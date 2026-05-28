function ChatHeader() {
  return (
    <div className="h-[58px] border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-5">

      <div>
        <h2 className="text-white text-[15px] font-semibold leading-none">
          Enterprise Policy Assistant
        </h2>

        <p className="text-zinc-500 text-[11px] mt-1">
          Ask company policies and guidelines
        </p>
      </div>

      <div className="flex items-center gap-2">

        <div className="w-2 h-2 rounded-full bg-green-500"></div>

        <span className="text-zinc-500 text-xs">
          AI Online
        </span>

      </div>

    </div>
  );
}

export default ChatHeader;