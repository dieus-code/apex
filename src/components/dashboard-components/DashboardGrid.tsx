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
import avaterGirl from "../../assets/Avaatar-girl.png";

function DashboardGrid() {
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-3 gap-6 ml-[32px] w-full">
      {/* My Card */}
<DashboardCard className="min-h-65">
=======
    <div className="grid grid-cols-[420px_420px_420px] gap-9 ml-4">
>>>>>>> b890f1632c482df9599b63e5187a814974309ccc

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
<<<<<<< HEAD
  <div className="relative h-[188px] w-[320px] rounded-4 border border-gray-200 bg-white p-6 overflow-hidden">
=======
  <div className=" h-[188px] w-full rounded-2xl border border-gray-200 bg-white p-6 overflow-hidden">
>>>>>>> b890f1632c482df9599b63e5187a814974309ccc

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

<<<<<<< HEAD
        {/* Active button */}
        <button className="flex items-center gap-[4px] rounded-full border pt-[4px] pl-[4px] pb-[4px] pr-[4px] w-[69px] t-[24px] h-[24px] l-[100px] bg-[#FFFFFF] border-[#E1E4EA]">
          <span className="flex items-center justify-center w-[12px] h-[12px] t-[2px] l-[2px] rounded-full bg-green-500 text-white">
            <TiTickOutline />
=======
                <span className="text-[10px] text-[#525866]">
                  Active
                </span>
              </button>
            </div>

            {/* Mastercard */}
            <div className="flex items-center">
              <span className="w-[17px] h-[17px] rounded-full bg-[#E80B26]" />
              <span className="w-[17px] h-[17px] rounded-full bg-[#F59D31] -ml-2 mix-blend-multiply" />
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-10">

            <p className="text-[14px] leading-5 text-[#525866]">
              Savings Card
            </p>

            <div className="flex items-end justify-between">

              <h1 className="text-[28px] leading-9 font-medium text-[#0E121B] mt-1">
                $16,058.94
              </h1>

              <div className="flex mt-2">
                <button className="flex items-center justify-center w-6 h-6 border border-[#E1E4EA] rounded-l-xl bg-white">
                  <FiChevronLeft className="text-[#0E121B]" />
                </button>

                <button className="flex items-center justify-center w-6 h-6 border border-[#E1E4EA] rounded-r-xl bg-white">
                  <FiChevronRight className="text-[#0E121B]" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 w-full h-6 mt-5 rounded-[6px] border border-[#E1E4EA] rounded-4 overflow-hidden">

          <button className="py-1 px-3 border-r border-[#E1E4EA] bg-white">
            <p className="text-[12px] leading-4 font-medium text-[#525866]">
              Daily
            </p>
          </button>

          <button className="py-1 px-3 border-r border-[#E1E4EA] bg-[#F5F7FA]">
            <p className="text-[12px] leading-4 font-medium text-[#0E121B]">
              Weekly
            </p>
          </button>

          <button className="py-1 px-3 bg-white">
            <p className="text-[12px] leading-4 font-medium text-[#525866]">
              Monthly
            </p>
          </button>

        </div>

        {/* Spending Limit */}
        <div className="flex items-center justify-between mt-3 ">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full border-[7px] border-gray-300 border-r-blue-600 border-t-blue-600 shrink-0" />

            <div>
              <p className="text-[14px] leading-5 text-[#525866]">
                Spending Limit
              </p>

              <div className="flex items-center">
                <span className="text-[18px] leading-6 font-medium text-[#0E121B]">
                  $1,500.00
                </span>

                <span className="text-[12px] leading-4 font-medium text-[#99A0AE] ml-1">
                  /week
                </span>
              </div>
            </div>

          </div>

          <button className="flex items-center justify-center w-6 h-6 border border-[#E1E4EA] rounded-md bg-white hover:bg-gray-100">
            <FiChevronRight className="text-[#525866]" />
          </button>

        </div>

      </DashboardCard>


      {/* ==================== SAVED ACTIONS ==================== */}
      <DashboardCard>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center gap-2">
            <RiFlashlightLine className="w-6 h-6" />

            <h2 className="text-[16px] leading-6 font-medium text-[#0E121B]">
              Saved Actions
            </h2>
          </div>

          <button className="h-8 px-3 rounded-lg border border-[#E1E4EA] bg-white flex items-center justify-center shadow-sm">
            <span className="text-[14px] leading-5 font-medium text-[#525866]">
              See All
            </span>
          </button>

        </div>

        <div className="border-t border-[#E1E4EA]" />

        {/* Actions */}
        <div className="flex-1 flex flex-col justify-between">

          {/* Action 1 */}
          <div className="flex items-center justify-between py-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <RiHomeSmileFill className="text-green-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-[14px] leading-5 text-[#0E121B]">
                  Rent Payment
                </h3>

                <p className="text-[#525866] text-[12px] leading-[18px] font-medium">
                  Monthly rent payment.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2">
              <span className="py-1 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-[13px]">
                $940.00
              </span>

              <FiChevronRight className="text-gray-500 text-lg" />
            </div>

          </div>


          {/* Action 2 */}
          <div className="flex items-center justify-between py-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                <img src={avaterGirl} alt="Avatar" className="text-cyan-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-[14px] leading-5 text-[#0E121B]">
                  Natalia's Tuition
                </h3>

                <p className="text-[#525866] text-[12px] leading-[18px] font-medium">
                  Nat's university fee.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2">
              <span className="py-1 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-[13px]">
                $750.00
              </span>

              <FiChevronRight className="text-gray-500 text-lg" />
            </div>

          </div>


          {/* Action 3 */}
          <div className="flex items-center justify-between py-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                <FaHandHoldingHeart className="text-pink-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-[14px] leading-5 text-[#0E121B]">
                  Donation to TEMA
                </h3>

                <p className="text-[#525866] text-[12px] leading-[18px] font-medium">
                  In the name of our family.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2">
              <span className="py-1 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-[13px]">
                $100.00
              </span>

              <FiChevronRight className="text-gray-500 text-lg" />
            </div>

          </div>


          {/* Action 4 */}
          <div className="flex items-center justify-between py-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <RiFireFill className="text-red-500 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-[14px] leading-5 text-[#0E121B]">
                  Gas Bill Payment
                </h3>

                <p className="text-[#525866] text-[12px] leading-[18px] font-medium">
                  Monthly gas bill payment.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2">
              <span className="py-1 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-[13px]">
                $20.00
              </span>

              <FiChevronRight className="text-gray-500 text-lg" />
            </div>

          </div>

        </div>

        {/* Bottom Button */}
        <button className="w-full h-9 mt-4 bg-white border border-[#E1E4EA] rounded-lg flex items-center justify-center gap-1 hover:bg-[#F5F7FA] transition">

          <span className="text-[#525866] text-[20px] leading-none">
            +
>>>>>>> b890f1632c482df9599b63e5187a814974309ccc
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

<<<<<<< HEAD
  </div>

  {/* Tabs */}
  <div className="grid grid-cols-3 border bg-[#FFFFFF] rounded-[6px] w-[full] border-[#E1E4EA] rounded-xl overflow-hidden mt-[16px]">
=======
        {/* Gauge */}
        <div className="pt-4 h-[145px] w-[300px] ml-11 border-b border-[#E1E4EA]">

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
                  fill: "#111827"
                },
              },
>>>>>>> b890f1632c482df9599b63e5187a814974309ccc

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

    <div className="flex items-center gap-4 mt-[20px]">

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
<DashboardCard className="flex flex-col">
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <div className="w-[246px] h-8 py-1 flex items-center gap-2 opacity-100">
      <span className="w-6 h-6 flex items-center justify-center opacity-100">
        <RiFlashlightLine size={24} />
      </span>
      <h2 className="w-[108px] h-6 font-medium leading-6 tracking-[-1.1%] text-[#0E121B] opacity-100">
        Saved Actions
      </h2>
    </div>

    <button className="w-[66px] h-8 rounded-lg border border-[#E1E4EA] bg-[#FFFFFF] p-[6px] flex items-center justify-center gap-0.5 opacity-100 shadow-[0px_1px_2px_0px_#0A0D1408]">
      <span className="w-[54px] h-5 px-1 flex items-center justify-center opacity-100">
        <span className="w-[46px] h-5 font-medium leading-5 text-[14px] tracking-[-0.6%] text-[#525866] text-center opacity-100">
          See All
        </span>
      </span>
    </button>
  </div>
  <div className="border border-[#E1E4EA] bg-[#FFFFFF] mb-4"></div>

  {/* Actions wrapper — grows to fill leftover height, spreads rows evenly */}
  <div className="w-full flex-1 flex flex-col justify-between">

    {/* Action 1 */}
    <div className="w-full flex items-center justify-between rounded-xl py-3">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <RiHomeSmileFill className="text-green-600 text-2xl" />
        </div>
        <div>
          <h3 className="font-bold text-[16px] leading-[22px] tracking-[-0.6%] text-[#0E121B]">
            Rent Payment
          </h3>
          <p className="text-[#525866] font-medium leading-[18px] text-[14px]">
            Monthly rent payment.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="py-1 px-3 flex gap-0.5 text-[#717784] bg-[#F2F5F8] rounded-full text-[15px]">
          $940.00
        </span>
        <FiChevronRight className="text-gray-500 text-lg" />
      </div>
    </div>

    {/* Action 2 */}
    <div className="w-full flex items-center justify-between rounded-xl py-3">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center">
          <PiStudent className="text-cyan-600 text-2xl" />
        </div>
        <div>
          <h3 className="font-bold text-[16px] leading-[22px] tracking-[-0.6%] text-[#0E121B]">
            Natalia's Tuition
          </h3>
          <p className="text-[#525866] font-medium leading-[18px] text-[14px]">
            Nat's university fee.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-[#F2F5F8] text-[#717784] py-1 px-3 font-medium rounded-full text-[15px]">
          $750.00
        </span>
        <FiChevronRight className="text-gray-500 text-lg" />
      </div>
    </div>

    {/* Action 3 */}
    <div className="w-full flex items-center justify-between rounded-xl py-3">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
          <FaHandHoldingHeart className="text-pink-600 text-2xl" />
        </div>
        <div>
          <h3 className="font-bold text-[16px] leading-[22px] tracking-[-0.6%] text-[#0E121B]">
            Donation to TEMA
          </h3>
          <p className="text-[#525866] font-medium leading-[18px] text-[14px]">
            In the name of our family.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="py-1 px-3 flex gap-0.5 text-[#717784] bg-[#F2F5F8] rounded-full text-[15px]">
          $100.00
        </span>
        <FiChevronRight className="text-gray-500 text-lg" />
      </div>
    </div>

    {/* Action 4 */}
    <div className="w-full flex items-center justify-between rounded-xl py-3">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
          <RiFireFill className="text-red-500 text-2xl"/>
        </div>
        <div>
          <h3 className="font-bold text-[16px] leading-[22px] tracking-[-0.6%] text-[#0E121B]">
            Gas Bill Payment
          </h3>
          <p className="text-[#525866] font-medium leading-[18px] text-[14px]">
            Monthly gas bill payment.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="py-1 px-3 flex gap-0.5 text-[#717784] bg-[#F2F5F8] rounded-full text-[15px]">
          $20.00
        </span>
        <FiChevronRight className="text-gray-500 text-lg" />
      </div>
    </div>

  </div>
  {/* end actions wrapper */}

  {/* Bottom Button */}
  <button className="w-full h-9 mt-4 bg-[#FFFFFF] border border-[#E1E4EA] rounded-lg p-2 flex items-center justify-center gap-1 opacity-100 transition hover:bg-[#F5F7FA]">
    <div className="w-5 h-5 flex items-center justify-center opacity-100">
      <span className="text-[#525866] text-[20px] leading-none">+</span>
    </div>
    <span className="w-[132px] h-5 px-1 leading-5 tracking-[-0.6%] text-[14px] font-medium text-[#525866] opacity-100 text-center">
      Save a New Action
    </span>
  </button>
</DashboardCard>

      {/* Spending Summary */}
      
<DashboardCard className="min-h-[280px]">
  {/* Header */}
  <div className="flex items-center justify-between border-b border-gray-200 pb-5]">
    <div className="flex items-center gap-3 mt-[16px]">
      <FiPieChart className="h-6 w-6 text-gray-700  mb-[16px]" />

      <h2 className="text-16px leading-[24px] tracking-[-1.1%] w-[147px] h-[24px] font-medium text-[#0E121B] mb-[16px]">
        Spending Summary
      </h2>
    </div>

    <button className="border rounded-full pt-[6px] pb-[6px] pr-[6px] pl-[10px] gap-[2px] bg-[#FFFFFF] border-[#E1E4EA] flex flex-row h-[32px] w-[106px] whitespace-nowrap mb-[16px]">
      <span className="text-[14px] leading-[20px] tracking-[-0.6%] font-normal w-[68px] h-[20px] text-[#0E121B]">Last Week</span>
      <span className="w-[20px] h-[20px] mt-0.5 text-[#525866]"> <IoIosArrowDown/></span>
    </button>
  </div>

  {/* Gauge */}
  <div className="border-t pt-6 mb-[16px] border-[#E1E4EA]">
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
        tickLabels:{
          hideMinMax:true,
        }
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
 <div className="bg-[#FFFFFF] h-[28px] w-full mt-[16px] rounded-[6px] border border-[#E1E4EA] px-[10px] flex items-center justify-between">
  <p className="leading-[16px] tracking-[0%] text-[12px] font-medium text-[#525866] whitespace-nowrap">
    Your weekly spending limit is{" "}
    <span className="leading-[20px] tracking-[0.6%] text-[14px] font-medium text-[#525866]">
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