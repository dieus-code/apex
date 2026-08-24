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
      className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm w-[352px] h-[380px] ${className}`}
    >
      {children}
    </div>
  );
}

export default DashboardCard;