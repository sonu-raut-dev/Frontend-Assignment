"use client";
import React, { useMemo } from "react";
import { User } from "@/features/users/type";
import UserAvatar from "./UserAvatar";
import StatusChip from "./StatusChip";
import { roles } from "@/data/staticData";

type Props = {
  user: User;
  onClick: () => void;
};

export default function UserCard({ user, onClick }: Props) {
  const active = Boolean(user.id % 2);

  const role = useMemo(() => roles[user.id % roles.length], [user.id]);

  return (
    <div
      onClick={onClick}
      className={` group rounded-lg bg-card transition cursor-pointer border-b-4 border-2 ${
        active
          ? "border-b-blue-500 bg-card"
          : "border-b-gray-500 inactive-bg-card"
      } border-[#DEDEDE] hover:shadow-[0_14px_4px_0_rgba(0,0,0,0.08)] p-4 sm:p-4 flex flex-col gap-3`}
    >
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold text-card-gray">{`#${user.id}`}</span>
        <span className="h-[26px] bg-[#B8B8B8] w-px"></span>
        <StatusChip active={active} />
      </div>

      <div className="min-w-0">
        <p className="text-base font-semibold text-black">{role}</p>
        <p className="text-xs text-card-gray truncate">{user.company.name}</p>
      </div>

      <div className="h-px w-full bg-[#E7E7E7]"></div>

      <div className="flex justify-between sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <UserAvatar name={user.name} />
          <div className="min-w-0">
            <span className="block font-medium text-sm text-gray-900 leading-none truncate">
              {user.name}
            </span>
            <span className="flex items-center gap-1 mt-1">
              <span className="ri-map-pin-2-line text-card-gray text-base leading-none"></span>
              <span className="text-xs font-normal text-card-gray">
                {user.address.city}
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="text-xs font-semibold cursor-pointer h-8 text-black px-4 py-2 bg-white rounded-md hover:bg-[#0086ff] hover:text-white transition
                        shrink-0 w-fit sm:w-auto text-center border border-[#BBBBBB]"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
