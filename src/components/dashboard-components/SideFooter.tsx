import { FiChevronRight } from "react-icons/fi";

interface SideFooterProps {
  avatar: React.ReactNode;
  name: string;
  email: string;
}

function SideFooter({
  avatar,
  name,
  email,
}: SideFooterProps) {
  return (
    <div className="flex h-[88px] w-[272px] items-center gap-3 p-3">
      {/* Avatar */}
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
        {avatar}
      </div>

      {/* User information */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-medium leading-5 text-[#0E121B]">
          {name}
        </p>

        <p className="truncate text-[12px] font-normal leading-4 text-[#525866]">
          {email}
        </p>
      </div>

      {/* Arrow */}
      <button className="flex h-5 w-5 items-center justify-center">
        <FiChevronRight size={16} />
      </button>
    </div>
  );
}

export default SideFooter;