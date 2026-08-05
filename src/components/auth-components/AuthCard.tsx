import type { ReactNode } from "react";

type AuthCardProps = {
  icon: ReactNode;
  children?: ReactNode;
};

const AuthCard = ({ icon, children }: AuthCardProps) => {
  return (
    <div className="w-full max-w-[440px] rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
     <div className=" flex w-16 h-16 mb-5 mx-auto items-center justify-center rounded-full bg-gray-100 p-4">
      <div className="p-4 mx-auto  flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
        {icon}
      </div>
</div>
    

      {/* Page-specific content */}
      {children}
    </div>
  );
};

export default AuthCard;