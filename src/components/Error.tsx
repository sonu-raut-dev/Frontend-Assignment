import React from "react";

const Error = ({ retry }: { retry: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-50 border border-red-100 shadow-sm mb-5">
        <span className="ri-prohibited-line text-4xl leading-none text-red-500" />
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-1">
        Oops! Something went wrong
      </h2>
      <p className="text-sm text-gray-600 max-w-sm mb-6">
        We couldn’t load the user list right now. It might be a network issue or
        a temporary glitch. Please try again.
      </p>
      <button
        onClick={retry}
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md text-white bg-[#3786FF] hover:bg-[#2f74e0] active:scale-[0.98] transition-all shadow-sm"
      >
        <i className="ri-refresh-line text-base" />
        Retry Loading
      </button>
    </div>
  );
};

export default Error;
