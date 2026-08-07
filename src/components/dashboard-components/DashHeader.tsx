import { FiBell, FiSearch } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

interface DashHeaderProps {
  avatar: React.ReactNode;
  title: string;
  subtitle: string;
}

function DashHeader({
  avatar,
  title,
  subtitle,
}: DashHeaderProps) {
  return (
    <header className="flex h-[88px] items-center justify-between px-8 py-5">
      {/* Left */}
      <div className="flex items-center gap-[14px]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C0D5FF]">
          {avatar}
        </div>

        <div>
          <h1 className="text-[18px] font-medium leading-6 tracking-[-0.015em] text-[#0E121B]">
            {title}
          </h1>

          <p className="text-sm leading-5 tracking-[-0.006em] text-[#525866]">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="flex h-10 w-10 items-center justify-center rounded-[10px]">
          <FiSearch size={20} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-[10px]">
          <FiBell size={20} />
        </button>

        <button className="flex h-10 items-center gap-1 rounded-[10px] bg-[#335CFF] px-4 text-sm font-medium text-white">
          Move Money
          <FiArrowUpRight size={16} />
        </button>
      </div>
    </header>
  );
}

export default DashHeader;