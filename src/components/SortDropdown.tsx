"use client";
import React, { useState, useRef, useEffect } from "react";
import { ListFilter, ChevronDown } from "lucide-react";

type SortOption = "name" | "company";

type Props = {
  value: SortOption;
  onChange: (v: SortOption) => void;
};

export default function SortDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const options: { label: string; value: SortOption }[] = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
  ];

  const selectedLabel = options.find((o) => o.value === value)?.label ?? "";

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className=" relative inline-flex items-center cursor-pointer justify-between gap-2 border w-full border-gray-200 bg-white rounded-md px-3 py-2 text-sm hover:border-gray-300 transition"
      >
        <div className="inline-flex items-center gap-2">
            <ListFilter size={14} className="text-gray-500" />
            <span className="font-medium text-gray-900">Sort by:</span>
            <span className="text-gray-600">{selectedLabel}</span>
        </div>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm rounded-md transition ${
                value === opt.value
                  ? "bg-gray-100 text-gray-900 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
