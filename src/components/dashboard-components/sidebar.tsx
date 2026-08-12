import React from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { RiExpandUpDownLine } from "react-icons/ri";
import { RiLayoutGridLine } from "react-icons/ri";
import { RiBankCardLine } from "react-icons/ri";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { RiHistoryLine } from "react-icons/ri";
import { RiBillLine } from "react-icons/ri";
import { RiExchangeLine } from "react-icons/ri";
import { RiSettings2Line } from "react-icons/ri";
import { RiHeadphoneLine } from "react-icons/ri";
import SideFooter from "./SideFooter";

export default function SideBar() {
  return (
    <div className="flex h-screen w-[272px] flex-col border-r-[1px] border-[#E1E4EA] bg-[#FFFFFF]">
      <div className="flex h-[88px]  w-[272px] gap-3 p-3 flex-wrap">
      <div className="h-[64px] w-[248px] p-3 gap-3 flex flex-row items-center justify-start">
        <img 
        src={logo}
        alt="Logo"
        className="h-[40px] w-[40px] rounded-full object-contain"
      />
      <div className="h-10 w-34 gap-1 flex-col ">
        <p className="font-['Inter'] font-medium text-[14px] leading-5 tracking-[-0.006em] text-[#0E121B)]">Apex</p>
        <p className="font-['Inter'] font-normal text-[12px] leading-4 tracking-[-0.006em]">Finance & Banking </p>
      </div>
      <button className="flex row justify-center items-center p-0.5 gap-0.5 w-6 h-6 bg-white border border-[#E1E4EA] shadow-[0px_1px_2px_rgba(10,13,20,0.03)] rounded-[6px] flex-none z-[3]">
  <div className="relative w-5 h-5 flex items-center justify-center"><RiExpandUpDownLine /></div>
</button>
      
      </div>
      </div>
      {/* divider */}
      <div className="h-[1px] w-[272px] bg-[#E1E4EA]"></div>
      {/* sections container */}
      <div className="flex flex-1 flex-col w-[272px] gap-5 px-5 pt-5 pb-4">
        {/* main section */}
        <div className="flex w-[232px] flex-col gap-2">
            <p className="font-['Inter'] font-medium text-[12px] uppercase leading-[16px] tracking-[-0.006em] text-[#99A0AE] h-[24px]">Main</p>
            <div>
               
              <div className="flex"> <div className="w-5 h-5 flex items-center justify-center"><RiLayoutGridLine /></div><p className="text-[14px] font-[inter] font-[medium] leading-5">Dashboard</p></div> 
              <div className="flex"> <div className="w-5 h-5 flex items-center justify-center" ><RiBankCardLine  /></div><p className="text-[14px] font-[inter] font-[medium] leading-5">My Cards</p></div>
              <div className="flex"> <div className="w-5 h-5 flex items-center justify-center"><RiArrowLeftRightLine /></div><p className="text-[14px] font-[inter] font-[medium] leading-5">Transfer</p></div>
              <div className="flex"> <div className="w-5 h-5 flex items-center justify-center"><RiHistoryLine /></div><p className="text-[14px] font-[inter] font-[medium] leading-5">Transactions</p></div>
              <div className="flex"> <div className="w-5 h-5 flex items-center justify-center"><RiBillLine /></div><p className="text-[14px] font-[inter] font-[medium] leading-5">Payments</p></div>
              <div className="flex"> <div className="w-5 h-5 flex items-center justify-center"><RiExchangeLine /></div><p className="text-[14px] font-[inter] font-[medium] leading-5">Exchange</p></div>
              
            </div>
        </div>
        {/* other section */}
        <div className="h-[400px] w-[232px] gap-1.5 flex-col flex">
            <p className="font-['Inter'] font-medium text-[14px] uppercase leading-[16px] tracking-[-0.006em] text-[#99A0AE]">Other</p>
            <div>
              <div>
                <div className="flex"> <div className="w-5 h-5 flex items-center justify-center"><RiSettings2Line /></div><p className="text-[14px] font-[inter] font-[medium] leading-5">Settings</p></div>
                <div className="flex"> <div className="w-5 h-5 flex items-center justify-center"><RiHeadphoneLine /></div><p className="text-[14px] font-[inter] font-[medium] leading-5">Support</p></div>
              </div>
            </div>
        </div>
    </div>
  <div className="mt-auto">
  <SideFooter
    avatar={
      <img
        src={avatar}
        alt="Arthur Taylor"
        className="h-full w-full object-cover"
      />
    }
    name="Arthur Taylor"
    email="arthur@alignui.com"
  />
</div>
</div>
  );
}