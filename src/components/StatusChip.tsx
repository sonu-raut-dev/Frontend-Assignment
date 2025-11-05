import React from "react";

const StatusChip = ({ active }: { active: boolean }) => {
  if (active) {
    return (
      <div
        className="flex items-center gap-1 py-[3px] px-2 rounded-[40px]
                   bg-[#DCF2FD] text-[#3786FF]
                   group-hover:bg-[#3786FF] group-hover:text-white
                   transition-colors duration-300"
      >
        <span className="ri-flashlight-fill text-inherit text-[14px] leading-none"></span>
        <span className="text-xs font-medium">Active</span>
      </div>
    );
  } else {
    return (
      <div
        className="flex items-center gap-1 py-[3px] px-2 rounded-[40px]
                   bg-[#DFDFDF] text-[#545454]
                   group-hover:bg-[#545454] group-hover:text-white
                   transition-colors duration-300"
      >
        <span className="ri-alert-fill text-inherit text-[14px] leading-none"></span>
        <span className="text-xs font-medium">Inactive</span>
      </div>
    );
  }
};

export default StatusChip;
