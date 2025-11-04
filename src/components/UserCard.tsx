"use client";
import React from "react";
import { User } from "@/features/users/type";
import UserAvatar from "./UserAvatar";
import StatusChip from "./StatusChip";

type Props = {
  user: User;
  onClick: () => void;
};

export default function UserCard({ user, onClick }: Props) {
  const active = Boolean(user.id % 2);

  return (
    <div
      onClick={onClick}
      className={`rounded-lg bg-gray-50 transition cursor-pointer border-b-6 border-2 ${
        active ? "border-b-blue-500" : "border-b-gray-500"
      } border-[#e6e6e6] hover:shadow-md p-3 sm:p-4 flex flex-col gap-4`}
    >
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-gray-500">{`#${user.id}`}</span>
        <span className="text-lg text-gray-300">|</span>
        <StatusChip active={active} />
      </div>

      <div className="min-w-0">
        <p className="text-base font-semibold text-gray-800">Frontend Developer</p>
        <p className="text-xs text-gray-600 truncate">{user.company.name}</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <UserAvatar name={user.name} />
          <div className="min-w-0">
            <span className="block font-bold text-gray-900 leading-none truncate">
              {user.name}
            </span>
            <span className="block text-[12px] text-gray-600 font-semibold leading-none truncate">
              <span className="text-gray-400">From </span>
              {user.address.city}
            </span>
          </div>
        </div>

        <button
          className="text-xs font-medium text-white px-3 py-1 bg-black rounded-md hover:bg-gray-700 transition
                     flex-shrink-0 w-full sm:w-auto text-center"
        >
          Details
        </button>
      </div>
    </div>
  );
}
