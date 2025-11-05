import React, { useMemo } from 'react';

const bgPalette = [
  '#ef4444', 
  '#22c55e', 
  '#3b82f6', 
  '#eab308',
  '#a855f7', 
  '#ec4899', 
  '#6366f1', 
  '#14b8a6', 
];

const UserAvatar = ({ name }: { name: string }) => {
   const initials = useMemo(() => {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const second = parts.length > 1 ? parts[1]?.[0] ?? '' : '';
    return (first + second).toUpperCase();
  }, [name]);
  
  const bgColor = useMemo(() => {
    if (!name) return bgPalette[0];
    const index = name.length % bgPalette.length;
    return bgPalette[index];
  }, [name]);

  return (
    <div
        style={{
        backgroundColor: bgColor,
        boxShadow: `0 2px 6px ${bgColor}60`,
      }}
      className={`rounded-full w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center border`}
    >
      <p className="text-white text-xs sm:text-xs font-semibold">{initials}</p>
    </div>
  );
};

export default UserAvatar;
