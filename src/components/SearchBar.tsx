"use client";
import { Search } from "lucide-react";
import React from "react";

type Props = {
    value: string;
    onChange: (newValue: string) => void;
}

export default function SearchBar({value ,onChange}: Props) {
    return(
        <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input 
                type="text" 
                placeholder="Search by name..." 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700"
            />
        </div>
    )
}