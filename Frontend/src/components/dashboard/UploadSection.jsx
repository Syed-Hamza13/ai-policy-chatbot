function UploadSection() {

  return (
    <div className="
      rounded-2xl
      border
      dark:border-zinc-800
      border-zinc-200

      dark:bg-zinc-900
      bg-white

      p-6
    ">

      <h2 className="
        text-lg
        font-semibold
        dark:text-white
        text-zinc-900
      ">
        Upload Policy Documents
      </h2>

      <p className="
        mt-1
        text-sm
        dark:text-zinc-400
        text-zinc-500
      ">
        Upload DOC or TXT files for AI policy indexing.
      </p>

      <div className="
        mt-6
        border-2
        border-dashed

        dark:border-zinc-700
        border-zinc-300

        rounded-2xl
        p-10
        text-center
      ">

        <p className="
          dark:text-zinc-300
          text-zinc-700
        ">
          Drag and drop policy documents here
        </p>

        <button className="
          mt-4
          px-5
          py-2.5
          rounded-xl

          bg-emerald-600
          hover:bg-emerald-700

          text-white
          transition
        ">
          Choose Files
        </button>

      </div>

    </div>
  );
}

export default UploadSection;