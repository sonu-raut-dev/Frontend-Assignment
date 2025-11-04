"use client";
import { User } from "@/features/users/type";
import { X } from "lucide-react";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  user?: User;
};

export default function Modal({ open, onClose, user }: Props) {
  if (!open || !user) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl p-4 w-96 shadow-lg relative">
        <div className="flex justify-between items-center mb-4 pb-4 bg-[#FAFAFA]">
            <span className="text-xl font-bold text-black">{user.name}</span>
            <X className={'w-6 h-6 text-black cursor-pointer'} onClick={onClose}/>
        </div>
        <p className="text-sm text-gray-700"><b>Phone:</b> {user.phone}</p>
        <p className="text-sm text-gray-700"><b>Website:</b> {user.website}</p>
        <p className="text-sm text-gray-700"><b>Address:</b> {user.address.street}, {user.address.city}</p>
        <div className="pt-4 flex justify-end">
            <button
            onClick={onClose}
            className="text-sm font-medium text-white px-3 py-2 cursor-pointer bg-black rounded-md hover:bg-gray-700 transition"
            >
            Close
            </button>
        </div>
      </div>
    </div>
  );
}
