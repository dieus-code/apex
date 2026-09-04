import DashboardCard from "./DashboardCard";
import { AiOutlineCreditCard } from "react-icons/ai";
import logo from "../../assets/logo.png";
import mastercard from "../../assets/Mastercard.png";
import vector from "../../assets/Vector.png";
import vector1 from "../../assets/Vector1.png";
import { FiPlus, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GaugeComponent from "react-gauge-component";
import {
  FiPieChart,
  FiInfo,
  FiDollarSign,
  FiFileText,
  FiShoppingBag,
} from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoWifiSharp } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import {
  RiHomeSmileFill,
  RiFireFill,
  RiFlashlightLine,
} from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import avaterGirl from "../../assets/Avaatar-girl.png";

function DashboardGrid() {
  return (
    <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-6">

      {/* ==================== MY CARD ==================== */}
      <DashboardCard>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AiOutlineCreditCard className="w-[18px] h-[18px] text-[#525866]" />

            <h2 className="text-[16px] leading-6 font-medium text-[#0E121B]">
              My Cards
            </h2>
          </div>

          <button className="flex items-center gap-2 border border-[#E1E4EA] rounded-xl px-3 py-2 hover:bg-gray-100 transition">
            <FiPlus className="w-[12px] h-[12px] text-[#525866]" />

            <span className="font-medium text-[14px] leading-5 text-[#525866]">
              Add Card
            </span>
          </button>
        </div>

        {/* Actual Card */}
        <div className="relative min-h-[188px] w-full rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 overflow-hidden">
          
          {/* Vector Background Wrapper */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Vector 1 Wrapper */}
            <div className="absolute top-0 right-0 w-[116px] h-[99px]">
              <img
                src={vector}
                alt="Card background design main"
                className="w-full h-full object-contain object-top-right"
              />
            </div>

            {/* Vector 2 Wrapper */}
            <div className="absolute top-0 right-0 w-[96px] h-[150px]">
              <img
                src={vector1}
                alt="Card background design secondary"
                className="w-full h-full object-contain object-top-right"
              />
            </div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col justify-between h-full gap-4">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <img
                  src={logo}
                  alt="Apex logo"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                />

                <span className="w-5 h-7 text-[#99A0AE] rotate-90 flex items-center justify-center">
                  <IoWifiSharp />
                </span>

                <button className="flex items-center gap-1 rounded-full border px-2 py-0.5 bg-white border-[#E1E4EA]">
                  <span className="flex items-center justify-center w-3 h-3 rounded-full bg-green-500 text-white">
                    <TiTickOutline className="text-[10px]" />
                  </span>

                  <span className="text-[10px] text-[#525866]">
                    Active
                  </span>
                </button>
              </div>

              {/* Mastercard Logo */}
              <img
                src={mastercard}
                alt="Mastercard logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
              />
            </div>

            {/* Bottom Bar */}
            <div>
              <p className="text-[14px] leading-5 text-[#525866]">
                Savings Card
              </p>

              <div className="flex items-end justify-between gap-2">
                <h1 className="text-[22px] sm:text-[28px] leading-8 sm:leading-9 font-medium text-[#0E121B] mt-1 truncate">
                  $16,058.94
                </h1>

                <div className="flex shrink-0">
                  <button className="flex items-center justify-center w-6 h-6 border border-[#E1E4EA] rounded-l-xl bg-white">
                    <FiChevronLeft className="text-[#0E121B]" />
                  </button>

                  <button className="flex items-center justify-center w-6 h-6 border border-l-0 border-[#E1E4EA] rounded-r-xl bg-white">
                    <FiChevronRight className="text-[#0E121B]" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 w-full h-8 mt-5 rounded-[6px] border border-[#E1E4EA] overflow-hidden">
          <button className="py-1 px-2 sm:px-3 border-r border-[#E1E4EA] bg-white flex items-center justify-center">
            <p className="text-[12px] leading-4 font-medium text-[#525866]">
              Daily
            </p>
          </button>

          <button className="py-1 px-2 sm:px-3 border-r border-[#E1E4EA] bg-[#F5F7FA] flex items-center justify-center">
            <p className="text-[12px] leading-4 font-medium text-[#0E121B]">
              Weekly
            </p>
          </button>

          <button className="py-1 px-2 sm:px-3 bg-white flex items-center justify-center">
            <p className="text-[12px] leading-4 font-medium text-[#525866]">
              Monthly
            </p>
          </button>
        </div>

        {/* Spending Limit */}
        <div className="flex items-center justify-between mt-4 gap-2">

          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[6px] sm:border-[7px] border-gray-300 border-r-blue-600 border-t-blue-600 shrink-0" />

            <div className="min-w-0">
              <p className="text-[12px] sm:text-[14px] leading-5 text-[#525866] truncate">
                Spending Limit
              </p>

              <div className="flex items-baseline truncate">
                <span className="text-[16px] sm:text-[18px] leading-6 font-medium text-[#0E121B]">
                  $1,500.00
                </span>

                <span className="text-[12px] leading-4 font-medium text-[#99A0AE] ml-1">
                  /week
                </span>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center w-6 h-6 border border-[#E1E4EA] rounded-md bg-white hover:bg-gray-100 shrink-0">
            <FiChevronRight className="text-[#525866]" />
          </button>

        </div>

      </DashboardCard>


      {/* ==================== SAVED ACTIONS ==================== */}
      <DashboardCard>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <RiFlashlightLine className="w-6 h-6 text-[#525866]" />

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

        <div className="border-t border-[#E1E4EA] mb-2" />

        {/* Actions */}
        <div className="flex-1 flex flex-col justify-between divide-y divide-gray-100">

          {/* Action 1 */}
          <div className="flex items-center justify-between py-2.5 gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <RiHomeSmileFill className="text-green-600 text-xl sm:text-2xl" />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-[14px] leading-5 text-[#0E121B] truncate">
                  Rent Payment
                </h3>

                <p className="text-[#525866] text-[12px] leading-[18px] font-medium truncate">
                  Monthly rent payment.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="py-1 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-[12px] sm:text-[13px] font-medium">
                $940.00
              </span>

              <FiChevronRight className="text-gray-500 text-base sm:text-lg" />
            </div>
          </div>


          {/* Action 2 */}
          <div className="flex items-center justify-between py-2.5 gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                <img src={avaterGirl} alt="Avatar" className="w-full h-full rounded-full object-cover" />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-[14px] leading-5 text-[#0E121B] truncate">
                  Natalia's Tuition
                </h3>

                <p className="text-[#525866] text-[12px] leading-[18px] font-medium truncate">
                  Nat's university fee.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="py-1 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-[12px] sm:text-[13px] font-medium">
                $750.00
              </span>

              <FiChevronRight className="text-gray-500 text-base sm:text-lg" />
            </div>
          </div>


          {/* Action 3 */}
          <div className="flex items-center justify-between py-2.5 gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                <FaHandHoldingHeart className="text-pink-600 text-xl sm:text-2xl" />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-[14px] leading-5 text-[#0E121B] truncate">
                  Donation to TEMA
                </h3>

                <p className="text-[#525866] text-[12px] leading-[18px] font-medium truncate">
                  In the name of our family.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="py-1 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-[12px] sm:text-[13px] font-medium">
                $100.00
              </span>

              <FiChevronRight className="text-gray-500 text-base sm:text-lg" />
            </div>
          </div>


          {/* Action 4 */}
          <div className="flex items-center justify-between py-2.5 gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <RiFireFill className="text-red-500 text-xl sm:text-2xl" />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-[14px] leading-5 text-[#0E121B] truncate">
                  Gas Bill Payment
                </h3>

                <p className="text-[#525866] text-[12px] leading-[18px] font-medium truncate">
                  Monthly gas bill payment.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="py-1 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-[12px] sm:text-[13px] font-medium">
                $20.00
              </span>

              <FiChevronRight className="text-gray-500 text-base sm:text-lg" />
            </div>
          </div>

        </div>

        {/* Bottom Button */}
        <button className="w-full h-9 mt-4 bg-white border border-[#E1E4EA] rounded-lg flex items-center justify-center gap-1 hover:bg-[#F5F7FA] transition shrink-0">
          <span className="text-[#525866] text-[20px] leading-none">
            +
          </span>

          <span className="text-[14px] leading-5 font-medium text-[#525866]">
            Save a New Action
          </span>
        </button>

      </DashboardCard>


      {/* ==================== SPENDING SUMMARY ==================== */}
      <DashboardCard>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <FiPieChart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 shrink-0" />

            <h2 className="text-[14px] leading-6 font-medium text-[#0E121B] trunc.ate">
              Spending Summary
            </h2>
          </div>

          <button className="border rounded-full py-1.5 px-3 bg-white border-[#E1E4EA] flex items-center justify-between h-8 min-w-[110px] shrink-0">
            <span className="text-[13px] sm:text-[14px] leading-5 text-[#0E121B]">
              Last Week
            </span>

            <IoIosArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#525866]" />
          </button>
        </div>

        {/* Gauge Wrapper */}
        <div className="pt-4 pb-2 w-full flex justify-center border-b border-[#E1E4EA] overflow-hidden">
          <div className="w-full max-w-[280px]">
            <GaugeComponent
              type="semicircle"
              value={1800}
              minValue={0}
              maxValue={2000}
              labels={{
                valueLabel: {
                  formatTextValue: () => "$1,800.00",
                  style: {
                    fontSize: "30px",
                    fill: "#111827"
                  },
                },
                tickLabels: {
                  hideMinMax: true,
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
        </div>

        {/* Categories */}
        <div className="grid grid-cols-3 border-b border-gray-200 w-full">

          {/* Shopping */}
          <div className="flex flex-col items-center border-r border-gray-200 py-3 sm:py-4 px-1 text-center">
            <div className="mb-2 sm:mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF1FF] shrink-0">
              <FiShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
            </div>

            <p className="text-[11px] sm:text-[12px] leading-4 font-semibold text-[#525866]">
              Shopping
            </p>

            <p className="text-[13px] sm:text-[14px] leading-5 font-medium text-[#0E121B] truncate w-full">
              $900.00
            </p>
          </div>

          {/* Utilities */}
          <div className="flex flex-col items-center border-r border-gray-200 py-3 sm:py-4 px-1 text-center">
            <div className="mb-2 sm:mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF8FF] shrink-0">
              <FiFileText className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500" />
            </div>

            <p className="text-[11px] sm:text-[12px] leading-4 font-medium text-[#525866]">
              Utilities
            </p>

            <p className="text-[13px] sm:text-[14px] leading-5 font-medium text-[#0E121B] truncate w-full">
              $600.00
            </p>
          </div>

          {/* Others */}
          <div className="flex flex-col items-center py-3 sm:py-4 px-1 text-center">
            <div className="mb-2 sm:mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#F2F5F8] shrink-0">
              <FiDollarSign className="h-4 w-4 text-[#525866]" />
            </div>

            <p className="text-[11px] sm:text-[12px] leading-4 font-medium text-[#525866]">
              Others
            </p>

            <p className="text-[13px] sm:text-[14px] leading-5 font-medium text-[#0E121B] truncate w-full">
              $200.00
            </p>
          </div>

        </div>

        {/* Spending Limit Message */}
        <div className="bg-white min-h-8 w-full mt-4 rounded-md border border-[#E1E4EA] px-2.5 py-1.5 flex items-center justify-between gap-2">
          <p className="text-[11px] sm:text-[12px] leading-4 font-medium text-[#525866] truncate">
            Your weekly spending limit is{" "}
            <span className="text-[12px] sm:text-[14px] leading-5 font-medium text-[#525866]">
              $2000.
            </span>
          </p>

          <FiInfo className="h-4 w-4 text-[#CACFD8] shrink-0" />
        </div>

      </DashboardCard>

    </div>
  );
}

export default DashboardGrid;