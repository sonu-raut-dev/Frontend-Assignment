"use client";
import { User } from "@/features/users/type";
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
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl w-96 shadow-lg relative m-4">
        <div className="flex justify-between rounded-t-lg items-center p-4 bg-[#FAFAFA] border-b border-gray-200">
          <span className="text-lg font-bold text-black">{user.name}</span>
          <span
            className={"ri-close-line text-xl text-black cursor-pointer"}
            onClick={onClose}
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-700">
            <b>Phone:</b> {user.phone}
          </p>
          <p className="text-sm text-gray-700">
            <b>Website:</b> {user.website}
          </p>
          <p className="text-sm text-gray-700">
            <b>Address:</b> {user.address.street}, {user.address.city}
          </p>
        </div>
        <div className="h-px w-full bg-[#E7E7E7]"></div>
        <div className="p-2 flex items-center justify-end">
          <button
            aria-label="Close Modal"
            onClick={onClose}
            className="text-xs font-semibold cursor-pointer h-8 text-black px-4 py-2 bg-white rounded-md hover:bg-[#e7e7e7] hover:text-black transition
                     shrink-0 w-fit sm:w-auto text-center border-[#BBBBBB]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
