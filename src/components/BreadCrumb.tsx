import React from "react";

type BreadCrumbItem = {
    type : "icon" | "text";
    content: string;
}

type BreadcrumbProps = {
  breadcrumb?: BreadCrumbItem[];
};

export default function Breadcrumb({ breadcrumb = [] }: BreadcrumbProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <nav className="flex items-center gap-1 text-sm text-gray-500">
        {breadcrumb.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {crumb.type === "icon" ? (
              <span className={`ri-${crumb.content} text-gray-400 text-base leading-none`}></span>
            ) : (
            <span
              className={`leading-none ${
                idx === breadcrumb.length - 1
                  ? "text-gray-900 font-medium text-xs"
                  : "hover:text-blue-600 cursor-pointer"
              }`}
            >
              {crumb.content}
            </span>
            )}
            {idx < breadcrumb.length - 1 && (
                <span className="ri-arrow-right-s-line text-base leading-none text-gray-400"></span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
}
