import type { ReactNode } from "react";
import { FiUser } from "react-icons/fi";

type AuthCardProps = {
  children?: ReactNode;
};

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className="w-full max-w-[380px] rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Icon */}
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
        <FiUser className="h-5 w-5 text-gray-500" />
      </div>

     

      {/* Page-specific content */}
      {children}
    </div>
  );
};

export default AuthCard;