"use client";
import { useRef, useState, useEffect } from "react";

const MAX_CHARS = 500;

const GrowingTextArea = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState(0);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      setCharCount(el.value.length);

      el.style.height = "auto";
      const scrollHeight = el.scrollHeight;
      const lineHeight = 32;
      const maxHeight = lineHeight * 5;
      el.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        rows={1}
        maxLength={MAX_CHARS}
        onInput={handleInput}
        className="border-b border-gray-400 dark:bg-inherit focus:outline-none focus:border-blue-500 w-full text-2xl p-2 resize-none overflow-hidden"
        placeholder="Ask whatever you feel like asking"
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {MAX_CHARS - charCount} characters remaining
      </div>
    </div>
  );
};

export default GrowingTextArea;
