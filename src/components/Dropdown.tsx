"use client";
import { useState, useRef, useEffect } from "react";

interface DropdownOption {
    value: string;
    label: string;
    icon: string;
}

interface DropdownOptionList {
    options: DropdownOption[];
}

const Dropdown = ({ options }: DropdownOptionList) => {
    const [selected, setSelected] = useState(options[0]?.value || "");
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find((opt) => opt.value === selected);

    return (
        <div className="relative inline-block w-fit" ref={dropdownRef}>
            {/* Button */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="bg-white dark:bg-neutral-900 border border-neutral-600 rounded-full py-2 px-4 w-full flex items-center justify-between gap-2"
            >
                <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined">{selectedOption?.icon}</span>
                    {selectedOption?.label}
                </span>
                <span className="material-symbols-outlined">expand_more</span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-10 mt-2 w-full bg-white dark:bg-neutral-900 shadow rounded-lg border border-neutral-600">
                    {options.map((opt) => (
                        <div
                            key={opt.value}
                            onClick={() => {
                                setSelected(opt.value);
                                setOpen(false);
                            }}
                            className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700"
                        >
                            <span className="material-symbols-outlined">{opt.icon}</span>
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
