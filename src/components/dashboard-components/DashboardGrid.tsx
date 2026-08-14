import DashboardCard from "./DashboardCard";
import { AiOutlineCreditCard } from "react-icons/ai";
import logo from "../../assets/logo.png";
// import Avatar from "../../assets/Avaatar-girl.png"
import { FiPlus, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GaugeComponent from "react-gauge-component";
import { PiStudent } from "react-icons/pi";
import { FiPieChart, FiInfo, FiDollarSign,FiFileText,FiShoppingBag} from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoWifiSharp } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { RiHomeSmileFill, RiFireFill ,RiFlashlightLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";

function DashboardGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 ml-[32px] w-full">
      {/* My Card */}
<DashboardCard className="min-h-[260px]">

  {/* My Cards Header */}
  <div className="flex items-center justify-between mb-5">
    <div className="flex items-center gap-2 ">
      <AiOutlineCreditCard className="text-[#525866] w-[18px] h-[16.2px] t-[3.9px] l-[3px]" />
      <h2 className="text-[16px] text-[#0E121B] leading-[24px] tracking-[-1.1%] w-[72px] h-[24px] font-medium">My Cards</h2>
    </div>

    <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition">
      <FiPlus  className="text-[#525866] w-[10.5] h-[10.5] t-[4.75px] l-[4.75px]"/>
      <span className="w-[63px] h-[20px] font-medium text-[14px] leading-[20px] tracking-[-0.6%] text-[#525866]">Add Card</span>
    </button>
  </div>

  {/* Actual Card */}
  <div className="relative h-[188px] w-full rounded-[20px] border border-gray-200 bg-white p-6 overflow-hidden">

    {/* Decorative lines */}
    {/* <div className="absolute right-[-20px] top-[-30px] h-[180px] w-[180px] rounded-[40px] border border-gray-200 rotate-[35deg]"></div> */}

    {/* Top section */}
    <div className="relative z-10 flex items-center justify-between">

      {/* Left side */}
      <div className="flex items-center gap-4">

        {/* Apex Logo */}
        <img
          src={logo}
          alt="Apex logo"
          className="w-[40px] h-[40px] object-contain"
        />

        {/* Contactless */}
        <span className="h-[16.2px] w-[20.36px] t-[1.82px] l-[3.9px] text-[#99A0AE] rotate-90">
          <IoWifiSharp />
        </span>

        {/* Active button */}
        <button className="flex items-center gap-[4px] rounded-full border pt-[4px] pl-[4px] pb-[4px] pr-[4px] w-[69px] t-[24px] h-[24px] l-[100px] bg-[#FFFFFF] border-[#E1E4EA]">
          <span className="flex items-center justify-center w-[12px] h-[12px] t-[2px] l-[2px] rounded-full bg-green-500 text-white">
            <TiTickOutline />
          </span>
          Active
        </button>
      </div>

      {/* Mastercard */}
      <div className="flex items-center">
        <span className=" w-[16.8px] h-[16.8px] t-[7.6px]  l-[2px] rounded-full bg-[#E80B26]"></span>
        <span className=" w-[16.8px] h-[16.8px] t-[7.6px]  l-[2px] rounded-full bg-[#F59D31] mix-blend-multiply -ml-2"></span>
      </div>
    </div>

    {/* Bottom section */}
    <div className="relative z-10 mt-12">

      <p className="text-[14px] text-[#525866] leading-[20px] tracking-[-0.6%] font-sm w-[87px] h-[20px] t-[106px l-[20px]">
        Savings Card
      </p>

      <div className="flex items-end justify-between">

        <h1 className="text-[32px] leading-[40px] tracking-[-0.5%] font-medium text-[#0E121B] mt-[4px] h-[40px] w-[159px] t-[130px] l-[20px] mb-[18px]">
          $16,058.94
        </h1>

        {/* Navigation buttons */}
        <div className="flex rounded-[6px]">
          <button className="flex items-center justify-center w-[24px] h-[24px] gap-[4px] p-[4px] border bg-[#FFFFFF] border-[#E1E4EA] mb-[16px] rounded-tl-xl rounded-bl-xl">
            <FiChevronLeft className="text-[#0E121B]"/>
          </button>

          <button className="flex items-center justify-center w-[24px] h-[24px] gap-[4px] p-[4px] border bg-[#FFFFFF] border-[#E1E4EA] mb-[16px] rounded-tr-xl rounded-br-xl">
            <FiChevronRight  className=" text-[#0E121B]"/>
          </button>
        </div>

      </div>
    </div>

  </div>

  {/* Tabs */}
  <div className="grid grid-cols-3 border bg-[#FFFFFF] rounded-[6px] w-[full] border-[#E1E4EA] rounded-xl overflow-hidden mt-5">

    <button className="pt-[4px] pr-[12px] pb-[4px] pl-[12px] gap-[4px] bg-[#FFFFFF] border-[#E1E4EA] text-[16px] border-r">
      <p className="text-[12px] leading-[16px] tracking-[0%] font-medium text-[#525866] align-middle items-center">Daily</p>
    </button>

    <button className="pt-[4px] pl-[12px] pr-[12px] pb-[4px] bg-[#F5F7FA] border border-[#E1E4EA]">
      <p className="font-medium leading-[16px] tracking-[0%] text-[12px] text-[#0E121B]">Weekly</p>
    </button>

    <button className="pt-[4px] pl-[12px] pr-[12px] pb-[4px] gap-[4px] border bg-[#FFFFFF] border-[#E1E4EA] ">
      <p className="font-medium leading-[16px] tracking-[0%] text-[12px] text-[#525866]">Monthly</p>
    </button>

  </div>

  {/* Spending Limit */}
  <div className="flex items-center justify-between mt-5">

    <div className="flex items-center gap-4">

      {/* Gauge */}
      <div className="w-14 h-14 rounded-full border-[7px] border-gray-300 border-r-blue-600 border-t-blue-600"></div>

      <div>
        <p className="text-[14px] leading-[20px] tracking-[-0.6%] h-[20px] w-[216px] text-[#525866] font-normal">
          Spending Limit
        </p>

    
        <span className="text-[18px] font-medium leading-[24px] tracking-[-1.5%] w-[84px] h-[24px] text-[#0E121B] flex">
          $1,500.00{" "}
          <p className="text-[#99A0AE] text-[12px] leading-[16px] tracking-[0%] font-medium w-[32px] h-[16px]">
            /week
          </p>
        </span>
      </div>

    </div>

    <button className="flex items-center justify-center w-[24px] h-[24px] border border-[#E1E4EA] p-[2px] bg-[#FFFFFF] gap-[2px] rounded-[6px] hover:bg-gray-100">
      <FiChevronRight className="text-[#525866]"/>
    </button>

  </div>

</DashboardCard>

      
      {/* Saved Actions */}
<DashboardCard className="min-h-70">
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <span><RiFlashlightLine /></span>
      <h2 className="w-[108px] h-[24px] font-medium leading-[24px] tracking-[-1.1%] text-[#0E121B] ">
        Saved Actions
      </h2>
    </div>

    <button className="w-[46px] h-[20px] font-medium leading-[20px] text-[14px] tracking-[-0.6%] text-[#525866] bg-[#FFFFFF] border p-[6px] rounded-full border-[#E1E4EA] gap-0.5 w-[66px] h-[32px]">
      See All
    </button>
  </div>

  <div className="border border-[#E1E4EA] bg-[#FFFFFF] mb-4"></div>

  {/* Action 1 */}
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
        <RiHomeSmileFill className="text-green-600 text-xl" />
      </div>

      <div>
        <h3 className="font-semibold text-xl w-[161px] h-[20px] font-bold leading-[20px] tracking-[-0.6%] text-[14px] text-[#0E121B]">
          Rent Payment
        </h3>

        <p className="text-[#525866] w-[162PX] h-4 font-medium leading-4 tracking-[0%] text-[12px]">
          Monthly rent payment.
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <span className="border pt-0.5 pb-0.5 pr-2 pl-2 flex gap-0.5 text-[#717784] bg-[#F2F5F8] rounded-full">
        $940.00
      </span>

      <FiChevronRight className="text-gray-500 p-[1px] flex gap-[2px] rounded-[2px] w-fit h-[20px] h-fit h-[20px]" />
    </div>
  </div>

  {/* Action 2 */}
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
        {/* <img src="{Avaatar-girl}" alt="Avatar" className="text-cyan-600 text-xl"/> */}
        <PiStudent className="text-cyan-600 text-xl" />
      </div>

      <div>
        <h3 className="font-semibold text-xl w-[161px] h-[20px] font-bold leading-[20px] tracking-[-0.6%] text-[14px] text-[#0E121B]">
          Natalia's Tuition
        </h3>

        <p className="text-[#525866] w-[162PX] h-4 font-medium leading-4 tracking-[0%] text-[12px]">
          Nat's university fee.
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <span className="bg-[#F2F5F8] text-[#717784] px-3 pt-0.5 pr-2 pb-0.5 pl-[8px]font-medium border rounded-full ">
        $750.00
      </span>

      <FiChevronRight className="text-gray-500" />
    </div>
  </div>

  {/* Action 3 */}
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
        <FaHandHoldingHeart className="text-pink-600 text-xl" />
      </div>

      <div>
        <h3 className="font-semibold text-xl w-[161px] h-[20px] font-bold leading-[20px] tracking-[-0.6%] text-[14px] text-[#0E121B]">
          Donation to TEMA
        </h3>

        <p className="text-[#525866] w-[162PX] h-4 font-medium leading-4 tracking-[0%] text-[12px]">
          In the name of our family.
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <span className="border pt-0.5 pb-0.5 pr-2 pl-2 flex gap-0.5 text-[#717784] bg-[#F2F5F8] rounded-full">
        $100.00
      </span>

      <FiChevronRight className="text-gray-500" />
    </div>
  </div>

  {/* Action 4 */}
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
        <RiFireFill className="text-red-500 text-xl"/>
      </div>

      <div>
        <h3 className="font-semibold text-xl w-[161px] h-[20px] font-bold leading-[20px] tracking-[-0.6%] text-[14px] text-[#0E121B]">
          Gas Bill Payment
        </h3>

        <p className="text-[#525866] w-[162PX] h-4 font-medium leading-4 tracking-[0%] text-[12px]">
          Monthly gas bill payment.
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <span className="border pt-0.5 pb-0.5 pr-2 pl-2 flex gap-0.5 text-[#717784] bg-[#F2F5F8] rounded-full w-full">
        $20.00
      </span>

      <FiChevronRight className="text-gray-500 p-px flex gap-0.5 rounded-xs w-5 h-fit" />
    </div>
  </div>

  {/* Bottom Button */}
  <button className="w-full h-fit bg-[#FFFFFF] border border-[#E1E4EA] rounded-full p-2 justify-center gap-1 transition">
    <div className="w-5 h-5">
    <span className="w-[10.5px] h-[10.5px] mt-1 ml-[4.75px] text-[#525866]">+</span>
    </div>
    <span className="w-31 h-5 leading-5 tracking-[-0.6%] text-[14px] font-medium text-[#525866]">Save a New Action</span>
  </button>
</DashboardCard>

      {/* Spending Summary */}
      
<DashboardCard className="min-h-[280px]">
  {/* Header */}
  <div className="flex items-center justify-between border-b border-gray-200 pb-5">
    <div className="flex items-center gap-3 mt-[16px]">
      <FiPieChart className="h-6 w-6 text-gray-700" />

      <h2 className="text-16px leading-[24px] tracking-[-1.1%] w-[147px] h-[24px] font-medium text-[#0E121B]">
        Spending Summary
      </h2>
    </div>

    <button className="border rounded-full pt-[6px] pb-[6px] pr-[6px] pl-[10px] gap-[2px] bg-[#FFFFFF] border-[#E1E4EA] flex flex-row h-[32px] w-[106px]">
      <span className="text-[14px] leading-[20px] tracking-[-0.6%] font-semibold w-[68px] h-[20px] text-[#0E121B]">Last Week</span>
      <span className="w-[20px] h-[20px]"> <IoIosArrowDown/></span>
    </button>
  </div>

  {/* Gauge */}
  <div className="border-t pt-6 mb-[16px]">
    <GaugeComponent
      type="semicircle"
      value={1800}
      minValue={0}
      maxValue={2000}
      labels={{
        valueLabel: {
          formatTextValue: () => "$1,800.00",
          style: {
            fontSize: "36px",
            fill: "#111827",
            fontWeight: "700",
          },
        },
      }}
      arc={{
        colorArray: ["#4F46E5", "#06B6D4", "#E5E7EB"],
        subArcs: [
          { limit: 1200 },
          { limit: 1800 },
          { limit: 2000 },
        ],
        padding: 0.02,
      }}
      pointer={{
        hide: true,
      }}
    />
  </div>


  {/* Categories */}
  <div className="mt-6 grid grid-cols-3 border-y border-gray-200">
    {/* Shopping */}
    <div className="flex flex-col items-center border-r border-gray-200 py-6">
      <div className="mb-4 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#EBF1FF]">
        <FiShoppingBag className="h-[20px] w-[20px] text-blue-500" />
      </div>

      <p className="text-[#525866] leading-[16px] tracking-[0%] text-[12px] font-semibold w-[57px] h-[16px]">
        Shopping
      </p>

      <p className="h-[20px] w-[57px] leading-[20px] tracking-[-0.6%]  text-[14px] font-medium text-[#0E121B]">
        $900.00
      </p>
    </div>

    {/* Utilities */}
    <div className="flex flex-col items-center border-r border-gray-200 py-6">
      <div className="mb-4 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#EBF8FF]">
        <FiFileText className="h-[20px] w-[20px] text-cyan-500" />
      </div>

      <p className="h-[16px] w-[57px] leading-[16px] tracking-[0%] text-[12px] font-medium text-[#525866]">
        Utilities
      </p>

      <p className="h-[20px] w-[57px] leading-[20px] tracking-[0.6%] text-[14px] font-medium text-[#0E121B]">
        $600.00
      </p>
    </div>

    {/* Others */}
    <div className="flex flex-col items-center py-6">
      <div className="mb-4 flex h-[32px] p-[6px] w-[32px] items-center justify-center rounded-full bg-[#F2F5F8]">
        <FiDollarSign className="h-[15px] w-[15px] text-[#525866]" />
      </div>

      <p className="h-[16px] w-[57px] leading-[16px] tracking-[0%] text-[12px] font-medium text-[#525866] ">
        Others
      </p>

      <p className="h-[20px] w-[57px] leading-[20px] tracking-[0.6%] text-[14px] font-medium text-[#0E121B]">
        $200.00
      </p>
    </div>
  </div>

  {/* Spending limit message */}
  <div className="bg-[#FFFFFF] h-[28px] w-full mt-[16px] rounded-full border border-[#E1E4EA] pr-[4px] pt-[6px] pb-[6px] pl-[10px]">
    <p className="h-[16px] w-[57px] leading-[16px] tracking-[0%] text-[12px] font-medium text-[#525866] whitespace-nowrap">
      Your weekly spending limit is{" "}
      <span className="h-[20px] w-[57px] leading-[20px] tracking-[0.6%] text-[14px] font-medium text-[#525866]">
        $2000.
      </span>
    </p>

    <FiInfo className="h-4 w-4 text-[#CACFD8] flex-shrink-0" />
  </div>
</DashboardCard>

      {/* Recent Transactions
      <DashboardCard className="col-span-3 min-h-[320px]">
        Recent Transactions Content
      </DashboardCard> */}
    </div>
  );
}

export default DashboardGrid;