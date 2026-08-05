import type { ReactNode } from "react";

type AuthCardProps = {
  icon: ReactNode;
  children?: ReactNode;
};

const AuthCard = ({ icon, children }: AuthCardProps) => {
  return (
    <div className="w-full max-w-[440px] rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Icon */}
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
        {icon}
      </div>

    

      {/* Page-specific content */}
      {children}
    </div>
  );
};

export default AuthCard;