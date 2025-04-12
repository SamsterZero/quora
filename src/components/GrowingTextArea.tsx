"use client";
import { useRef, useState, useEffect } from "react";

interface Class {
  limit: number
  className?: string
  placeholder?: string
}

const GrowingTextArea = ({ limit, className, placeholder }: Class) => {
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
        maxLength={limit}
        onInput={handleInput}
        className={className}
        placeholder={placeholder}
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {limit - charCount} characters remaining
      </div>
    </div>
  );
};

export default GrowingTextArea;
