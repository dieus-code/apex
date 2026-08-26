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
      className={`rounded-xl border border-gray-200 bg-white p-4 gap-4 shadow-sm h-[385px] w-full`}
    >
      {children}
    </div>
  );
}

export default DashboardCard;