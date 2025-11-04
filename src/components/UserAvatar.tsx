import React, { useMemo } from 'react';

const bgColors = [
  'bg-red-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-teal-500',
];

const UserAvatar = ({ name }: { name: string }) => {
   const initials = React.useMemo(() => {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const second = parts.length > 1 ? parts[1]?.[0] ?? '' : '';
    return (first + second).toUpperCase();
  }, [name]);
  
  const bgColor = useMemo(() => {
    if (!name) return bgColors[0];
    const index = name.length % bgColors.length;
    return bgColors[index];
  }, [name]);

  return (
    <div
      className={`${bgColor} rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border border-black`}
    >
      <p className="text-white text-xs sm:text-xs font-semibold">{initials}</p>
    </div>
  );
};

export default UserAvatar;
