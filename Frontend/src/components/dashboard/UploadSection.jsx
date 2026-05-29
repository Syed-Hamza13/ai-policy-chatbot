import { useRef, useState } from "react";
import { Upload, FileText, Trash2 } from "lucide-react";

import axios from "axios";

function UploadSection() {

  const inputRef = useRef(null);

  const [files, setFiles] = useState([]);

  const [uploading, setUploading] = useState(false);

  const handleFiles = async (selectedFiles) => {

    const fileArray = Array.from(selectedFiles);

    const formData = new FormData();

    // Single PDF upload
    formData.append("file", fileArray[0]);

    setUploading(true);

    try {

      const response = await axios.post(

        "http://127.0.0.1:8000/upload/",

        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      const uploadedFile = {

        id: crypto.randomUUID(),

        name: fileArray[0].name,

        size: (
          fileArray[0].size / 1024
        ).toFixed(2),

        status: "Indexed",
      };

      setFiles((prev) => [
        ...prev,
        uploadedFile,
      ]);

    } catch (error) {

      console.error(error);

      alert("Upload failed");
    }

    setUploading(false);
  };

  const handleRemove = (id) => {

    setFiles((prev) =>
      prev.filter((file) => file.id !== id)
    );
  };

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
        Upload PDF files for AI indexing.
      </p>

      <div
        onClick={() => inputRef.current.click()}
        className="
          mt-6
          border-2
          border-dashed

          dark:border-zinc-700
          border-zinc-300

          rounded-2xl
          p-10
          text-center
          cursor-pointer

          hover:border-emerald-500
          transition
        "
      >

        <input
          type="file"
          accept=".pdf"
          hidden
          ref={inputRef}
          onChange={(e) =>
            handleFiles(e.target.files)
          }
        />

        <div className="flex justify-center">

          <div className="
            p-4
            rounded-2xl

            dark:bg-zinc-800
            bg-zinc-100
          ">
            <Upload className="w-8 h-8 text-emerald-500" />
          </div>

        </div>

        <p className="
          mt-4

          dark:text-zinc-200
          text-zinc-700
        ">
          Click to upload policy PDF
        </p>

      </div>

      {/* Loading */}

      {uploading && (

        <div className="
          mt-6
          flex
          items-center
          gap-3
        ">

          <div className="
            w-5
            h-5
            border-2
            border-emerald-500
            border-t-transparent
            rounded-full
            animate-spin
          "></div>

          <p className="
            text-sm

            dark:text-zinc-300
            text-zinc-600
          ">
            Uploading and indexing document...
          </p>

        </div>

      )}

      {/* Uploaded Files */}

      {files.length > 0 && (

        <div className="mt-8 space-y-3">

          <h3 className="
            text-sm
            font-medium

            dark:text-zinc-300
            text-zinc-700
          ">
            Uploaded Documents
          </h3>

          {files.map((file) => (

            <div
              key={file.id}
              className="
                flex
                items-center
                justify-between

                rounded-xl
                border

                dark:border-zinc-800
                border-zinc-200

                dark:bg-zinc-800
                bg-zinc-50

                p-4
              "
            >

              <div className="flex items-center gap-3">

                <FileText className="
                  w-5
                  h-5
                  text-emerald-500
                " />

                <div>

                  <p className="
                    text-sm
                    font-medium

                    dark:text-white
                    text-zinc-900
                  ">
                    {file.name}
                  </p>

                  <p className="
                    text-xs

                    dark:text-zinc-400
                    text-zinc-500
                  ">
                    {file.size} KB
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <span className="
                  text-xs
                  px-3
                  py-1
                  rounded-full

                  bg-emerald-100
                  text-emerald-700
                ">
                  {file.status}
                </span>

                <button
                  onClick={() =>
                    handleRemove(file.id)
                  }
                  className="
                    dark:text-zinc-400
                    text-zinc-500

                    hover:text-red-500
                    transition
                  "
                >
                  <Trash2 className="w-4 h-4" />
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default UploadSection;