"use client";
import React from "react";

type Props = {
    value: string;
    onChange: (newValue: string) => void;
}

export default function SearchBar({value ,onChange}: Props) {
    return(
        <div className="relative w-full sm:w-64">
            <span className="ri-search-2-line absolute left-3 top-[7px] h-4 w-4 text-gray-400"></span>
            <input 
                type="text" 
                placeholder="Search by name..." 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 hover:border-gray-700 focus:outline-none focus:border-gray-700"
            />
        </div>
    )
}