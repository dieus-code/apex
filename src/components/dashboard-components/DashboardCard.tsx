import type { ReactNode } from "react";

interface DashboardCardProps {
  children?: ReactNode;
  className?: string;
}

function DashboardCard({
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm min-h-[385px] h-auto w-full min-w-0 ${className}`}
    >
      {children}
    </div>
  );
}

export default DashboardCard;