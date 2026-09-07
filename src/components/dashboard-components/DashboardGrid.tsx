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
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-4 md:p-6">

      {/* ==================== MY CARD ==================== */}
      <DashboardCard className="flex flex-col justify-between h-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <AiOutlineCreditCard className="w-5 h-5 text-[#525866] shrink-0" />
            <h2 className="text-base font-medium text-[#0E121B] truncate">
              My Cards
            </h2>
          </div>

          <button className="flex items-center gap-1.5 border border-[#E1E4EA] rounded-xl px-2.5 py-1.5 hover:bg-gray-100 transition shrink-0">
            <FiPlus className="w-3.5 h-3.5 text-[#525866]" />
            <span className="font-medium text-xs sm:text-sm text-[#525866]">
              Add Card
            </span>
          </button>
        </div>

        {/* Actual Card Visual */}
        <div className="relative min-h-[170px] sm:min-h-[188px] w-full rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 overflow-hidden flex flex-col justify-between">
          
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[90px] sm:w-[116px] h-[80px] sm:h-[99px]">
              <img
                src={vector}
                alt="Card background"
                className="w-full h-full object-contain object-top-right"
              />
            </div>
            <div className="absolute top-0 right-0 w-[75px] sm:w-[96px] h-[120px] sm:h-[150px]">
              <img
                src={vector1}
                alt="Card background secondary"
                className="w-full h-full object-contain object-top-right"
              />
            </div>
          </div>

          {/* Card Top */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap">
              <img
                src={logo}
                alt="Apex logo"
                className="w-7 h-7 sm:w-9 sm:h-9 object-contain shrink-0"
              />
              <span className="text-[#99A0AE] rotate-90 flex items-center justify-center text-sm">
                <IoWifiSharp />
              </span>
              <button className="flex items-center gap-1 rounded-full border px-2 py-0.5 bg-white border-[#E1E4EA]">
                <span className="flex items-center justify-center w-3 h-3 rounded-full bg-green-500 text-white">
                  <TiTickOutline className="text-[10px]" />
                </span>
                <span className="text-[10px] sm:text-xs text-[#525866] font-medium">
                  Active
                </span>
              </button>
            </div>

            <img
              src={mastercard}
              alt="Mastercard logo"
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain shrink-0"
            />
          </div>

          {/* Card Bottom */}
          <div className="relative z-10 mt-4">
            <p className="text-xs sm:text-sm font-medium text-[#525866]">
              Savings Card
            </p>
            <div className="flex items-end justify-between gap-2">
              <h1 className="text-xl sm:text-2xl lg:text-[28px] font-medium text-[#0E121B] mt-1 truncate">
                $16,058.94
              </h1>

              <div className="flex shrink-0">
                <button className="flex items-center justify-center w-6 h-6 border border-[#E1E4EA] rounded-l-xl bg-white hover:bg-gray-50">
                  <FiChevronLeft className="text-[#0E121B] text-xs" />
                </button>
                <button className="flex items-center justify-center w-6 h-6 border border-l-0 border-[#E1E4EA] rounded-r-xl bg-white hover:bg-gray-50">
                  <FiChevronRight className="text-[#0E121B] text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Timeframe Tabs */}
        <div className="grid grid-cols-3 w-full h-8 mt-4 rounded-md border border-[#E1E4EA] overflow-hidden">
          <button className="py-1 px-1 sm:px-3 border-r border-[#E1E4EA] bg-white flex items-center justify-center transition hover:bg-gray-50">
            <p className="text-xs font-medium text-[#525866] truncate">
              Daily
            </p>
          </button>
          <button className="py-1 px-1 sm:px-3 border-r border-[#E1E4EA] bg-[#F5F7FA] flex items-center justify-center">
            <p className="text-xs font-medium text-[#0E121B] truncate">
              Weekly
            </p>
          </button>
          <button className="py-1 px-1 sm:px-3 bg-white flex items-center justify-center transition hover:bg-gray-50">
            <p className="text-xs font-medium text-[#525866] truncate">
              Monthly
            </p>
          </button>
        </div>

        {/* Spending Limit Row */}
        <div className="flex items-center justify-between mt-4 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[5px] sm:border-[6px] border-gray-300 border-r-blue-600 border-t-blue-600 shrink-0" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-[#525866] truncate">
                Spending Limit
              </p>
              <div className="flex items-baseline truncate">
                <span className="text-sm sm:text-base font-semibold text-[#0E121B] truncate">
                  $1,500.00
                </span>
                <span className="text-xs font-medium text-[#99A0AE] ml-1 shrink-0">
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
      <DashboardCard className="flex flex-col justify-between h-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-3 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <RiFlashlightLine className="w-5 h-5 text-[#525866] shrink-0" />
            <h2 className="text-base font-medium text-[#0E121B] truncate">
              Saved Actions
            </h2>
          </div>

          <button className="h-8 px-2.5 rounded-lg border border-[#E1E4EA] bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition shrink-0">
            <span className="text-xs sm:text-sm font-medium text-[#525866]">
              See All
            </span>
          </button>
        </div>

        <div className="border-t border-[#E1E4EA] mb-1" />

        {/* Actions List */}
        <div className="flex-1 flex flex-col justify-between divide-y divide-gray-100">

          {/* Item 1 */}
          <div className="flex items-center justify-between py-2 gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <RiHomeSmileFill className="text-green-600 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-xs sm:text-sm text-[#0E121B] truncate">
                  Rent Payment
                </h3>
                <p className="text-[#525866] text-xs font-normal truncate">
                  Monthly rent payment.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="py-0.5 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-xs font-medium">
                $940.00
              </span>
              <FiChevronRight className="text-gray-400 text-sm sm:text-base" />
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between py-2 gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 overflow-hidden">
                <img src={avaterGirl} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-xs sm:text-sm text-[#0E121B] truncate">
                  Natalia's Tuition
                </h3>
                <p className="text-[#525866] text-xs font-normal truncate">
                  Nat's university fee.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="py-0.5 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-xs font-medium">
                $750.00
              </span>
              <FiChevronRight className="text-gray-400 text-sm sm:text-base" />
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between py-2 gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                <FaHandHoldingHeart className="text-pink-600 text-base sm:text-lg" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-xs sm:text-sm text-[#0E121B] truncate">
                  Donation to TEMA
                </h3>
                <p className="text-[#525866] text-xs font-normal truncate">
                  In the name of family.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="py-0.5 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-xs font-medium">
                $100.00
              </span>
              <FiChevronRight className="text-gray-400 text-sm sm:text-base" />
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center justify-between py-2 gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <RiFireFill className="text-red-500 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-xs sm:text-sm text-[#0E121B] truncate">
                  Gas Bill Payment
                </h3>
                <p className="text-[#525866] text-xs font-normal truncate">
                  Monthly gas bill payment.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="py-0.5 px-2 text-[#717784] bg-[#F2F5F8] rounded-full text-xs font-medium">
                $20.00
              </span>
              <FiChevronRight className="text-gray-400 text-sm sm:text-base" />
            </div>
          </div>

        </div>

        {/* Action Button */}
        <button className="w-full h-9 mt-3 bg-white border border-[#E1E4EA] rounded-lg flex items-center justify-center gap-1 hover:bg-[#F5F7FA] transition shrink-0">
          <span className="text-[#525866] text-lg leading-none">+</span>
          <span className="text-xs sm:text-sm font-medium text-[#525866]">
            Save a New Action
          </span>
        </button>

      </DashboardCard>


      {/* ==================== SPENDING SUMMARY ==================== */}
      <DashboardCard className="flex flex-col justify-between h-full">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <FiPieChart className="h-5 w-5 text-gray-700 shrink-0" />
            <h2 className="text-base font-medium text-[#0E121B] truncate">
              Spending Summary
            </h2>
          </div>

          <button className="border rounded-full py-1 px-2.5 bg-white border-[#E1E4EA] flex items-center justify-between h-8 min-w-[100px] shrink-0 hover:bg-gray-50">
            <span className="text-xs sm:text-sm text-[#0E121B] font-medium">
              Last Week
            </span>
            <IoIosArrowDown className="w-3.5 h-3.5 text-[#525866] ml-1" />
          </button>
        </div>

        {/* Gauge Wrapper */}
        <div className="py-2 w-full flex justify-center border-b border-[#E1E4EA] overflow-hidden">
          <div className="w-full max-w-[220px] sm:max-w-[260px]">
            <GaugeComponent
              type="semicircle"
              value={1800}
              minValue={0}
              maxValue={2000}
              labels={{
                valueLabel: {
                  formatTextValue: () => "$1,800.00",
                  style: {
                    fontSize: "26px",
                    fill: "#111827",
                    fontWeight: "600"
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

        {/* Breakdown Categories */}
        <div className="grid grid-cols-3 border-b border-gray-200 w-full">

          <div className="flex flex-col items-center border-r border-gray-200 py-2.5 px-1 text-center">
            <div className="mb-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#EBF1FF] shrink-0">
              <FiShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
            </div>
            <p className="text-[11px] font-medium text-[#525866]">
              Shopping
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#0E121B] truncate w-full">
              $900.00
            </p>
          </div>

          <div className="flex flex-col items-center border-r border-gray-200 py-2.5 px-1 text-center">
            <div className="mb-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#EBF8FF] shrink-0">
              <FiFileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-500" />
            </div>
            <p className="text-[11px] font-medium text-[#525866]">
              Utilities
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#0E121B] truncate w-full">
              $600.00
            </p>
          </div>

          <div className="flex flex-col items-center py-2.5 px-1 text-center">
            <div className="mb-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#F2F5F8] shrink-0">
              <FiDollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#525866]" />
            </div>
            <p className="text-[11px] font-medium text-[#525866]">
              Others
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#0E121B] truncate w-full">
              $200.00
            </p>
          </div>

        </div>

        {/* Limit Message */}
        <div className="bg-white w-full mt-3 rounded-md border border-[#E1E4EA] px-2.5 py-1.5 flex items-center justify-between gap-2">
          <p className="text-xs text-[#525866] truncate">
            Weekly spending limit is{" "}
            <span className="font-semibold text-[#0E121B]">
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