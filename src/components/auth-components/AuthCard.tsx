import type { ReactNode } from "react";

type AuthCardProps = {
  icon: ReactNode;
  children?: ReactNode;
};

const AuthCard = ({ icon, children }: AuthCardProps) => {
  return (
   
    <div className="w-full max-w-[440px] rounded-xl border border-gray-200 bg-white p-6 shadow-">
     <div className=" flex w-24 h-24 mb-5 mx-auto items-center justify-center rounded-full bg-gradient-to-b from-[#717784]/10 to-[#717784]/0 p-4">
      <div className="p-4 mx-auto  flex h-16 w-16 items-center justify-center rounded-full bg-[#FFFFFF] shadow-sm border border-[#E1E4EA]">
        {icon}
      </div>
</div>
    

      {/* Page-specific content */}
      {children}
    </div>
  );
};

export default AuthCard;