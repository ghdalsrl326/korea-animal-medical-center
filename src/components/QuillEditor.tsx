"use client";
import React, { useRef, useState, FC } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

interface QuillEditorProps {
  content: string;
  onChange: (content: string) => void;
}

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

const QuillEditor: FC<QuillEditorProps> = ({ content, onChange }) => {
  const [isFocused, setIsFocused] = useState(true);

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
        value={content}
        onChange={onChange}
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
