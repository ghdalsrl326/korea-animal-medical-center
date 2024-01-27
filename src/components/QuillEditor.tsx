"use client";
import { examResultAtom } from "@/app/data/examResultStore";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the CSS

const Font = Quill.import("formats/font");
Font.whitelist = [
  "sans-serif",
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
  "pretendard",
];
Quill.register(Font, true);

const QuillEditor = () => {
  const [result, setResult] = useAtom(examResultAtom);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleHideToolbar = () => {
    setIsFocused(false);
  };

  return (
    <div className={`quill-wrapper ${isFocused ? "focused" : ""}`}>
      {isFocused && <button onClick={handleHideToolbar}>Hide Toolbar</button>}

      <ReactQuill
        theme="snow"
        value={result.editorContent}
        onChange={(value) => setResult({ ...result, editorContent: value })}
        onFocus={handleFocus}
        modules={{
          toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ align: [] }],
            ["blockquote"],
            ["link", "image", "video"],
            ["clean"],
          ],
        }}
      />
    </div>
  );
};

export default QuillEditor;
