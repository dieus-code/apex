import React from "react";
import logo from "../../assets/Apex_logo.png";
import { RiExpandUpDownLine } from "react-icons/ri";

export default function SideBar() {
  return (
    <div className="h-[900px] w-[272px]  border-r-[1px] border-[#E1E4EA] bg-[#FFFFFF]">
      <div className="flex h-[88px]  w-[272px] gap-3 p-3 flex-wrap">
      <div className="h-[64px] w-[248px] p-3 gap-3 flex flex-row items-center justify-start">
        <img 
        src={logo}
        alt="Logo"
        className="h-[40px] w-[40px] rounded-full object-contain"
      />
      <div className="h-[40px] w-[136px] gap-1 flex-col ">
        <p className="font-['Inter'] font-medium text-[14px] leading-[20px] tracking-[-0.006em] text-[#0E121B)]">Apex</p>
        <p className="font-['Inter'] font-normal text-[12px] leading-[16px] tracking-[-0.006em]">Finance & Banking </p>
      </div>
      <button className="flex row justify-center items-center p-0.5 gap-0.5 w-6 h-6 bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_rgba(10,13,20,0.03)] rounded-[6px] flex-none z-[3]">
  <div className="relative w-5 h-5 flex-none"><RiExpandUpDownLine className = "absolute top-[3.64px] left-[5.69px] w-[8.62px] h-[12.73px] fill-[var(--icon-sub-600,#525866)]"/></div>
</button>
      
      </div>
      </div>
      {/* divider */}
      <div className="h-[1px] w-[272px] bg-[#E1E4EA]"></div>
      {/* sections container */}
      <div className="flex flex-col h-[724px] w-[272px] gap-5 pt-5 pb-4 pr-5 pl-5">
        {/* main section */}
        <div className="h-[268px] w-[232px] gap-2 flex-col flex ">
            <p className="font-['Inter'] font-medium text-[12px] uppercase leading-[16px] tracking-[-0.006em] text-[#99A0AE] h-[24px]">Main</p>
            <div>
              <ul>
                <li>Dashboard</li>
                <li>My Cards</li>
                <li>Transfer</li>
                <li>Transactions</li>
                <li>Payments</li>
                <li>Exchange</li>
              </ul>
            </div>
        </div>
        {/* other section */}
        <div className="h-[400px] w-[232px] gap-1.5 flex-col flex ">
            <p className="font-['Inter'] font-medium text-[14px] uppercase leading-[16px] tracking-[-0.006em] text-[#99A0AE]">Other</p>
            <div>
              <ul>
                <li>Settings</li>
                <li>Support</li>
              </ul>
            </div>
        </div>
    </div>
    </div>
  );
}