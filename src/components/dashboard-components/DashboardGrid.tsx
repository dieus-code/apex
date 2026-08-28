import DashboardCard from "./DashboardCard";
import { AiOutlineCreditCard } from "react-icons/ai";
import logo from "../../assets/logo.png";
import mastercard from "../../assets/Mastercard.png";
import { FiPlus, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GaugeComponent from "react-gauge-component";
import { PiStudent } from "react-icons/pi";
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

function DashboardGrid() {
  return (
    <div className="grid grid-cols-[352px_352px_352px] gap-4 ml-4">

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
  <div className=" h-[188px] w-[320px] rounded-2xl border border-gray-200 bg-white p-6 overflow-hidden">

          {/* Top */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Apex logo"
                className="w-9 h-9 object-contain"
              />

              <span className="w-5 h-7 text-[#99A0AE] rotate-90">
                <IoWifiSharp />
              </span>

              <button className="flex items-center gap-1 rounded-full border p-1 w-[69px] h-6 bg-white border-[#E1E4EA]">
                <span className="flex items-center justify-center w-3 h-3 rounded-full bg-green-500 text-white">
                  <TiTickOutline />
                </span>

                <span className="text-[10px] text-[#525866]">
                  Active
                </span>
              </button>
            </div>

            {/* Mastercard */}
            <div className="flex items-center">
              <img
                src={mastercard}
                alt="Mastercard image"
                className="w-9 h-9 object-contain"
              />
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-6">

            <p className="text-[14px] leading-5 text-[#525866]">
              Savings Card
            </p>

            <div className="flex items-end justify-between">

              <h1 className="text-[28px] leading-9 font-medium text-[#0E121B] mt-1">
                $16,058.94
              </h1>

              <div className="flex">
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
      <DashboardCard className="flex flex-col">

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
                <PiStudent className="text-cyan-600 text-2xl" />
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
          </span>

          <span className="text-[14px] leading-5 font-medium text-[#525866]">
            Save a New Action
          </span>

        </button>

      </DashboardCard>


      {/* ==================== SPENDING SUMMARY ==================== */}
      <DashboardCard>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">

          <div className="flex items-center gap-3">
            <FiPieChart className="h-6 w-6 text-gray-700" />

            <h2 className="text-[14px] leading-6 font-medium text-[#0E121B]">
              Spending Summary
            </h2>
          </div>

          <button className="border rounded-full py-1.5 px-2 pl-3 gap-1 bg-white border-[#E1E4EA] flex items-center h-8 w-[120px]">

            <span className="flex text-[14px] leading-5 text-[#0E121B]">
              Last Week
            </span>

            <IoIosArrowDown className="w-5 h-5 text-[#525866]" />

          </button>

        </div>


        {/* Gauge */}
        <div className="pt-4 h-[150px] w-[250px] ml-8 border-b border-[#E1E4EA]">

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


        {/* Categories */}
        <div className="grid grid-cols-3 border-y border-gray-200">

          {/* Shopping */}
          <div className="flex flex-col items-center border-r border-gray-200 py-4">

            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF1FF]">
              <FiShoppingBag className="h-5 w-5 text-blue-500" />
            </div>

            <p className="text-[12px] leading-4 font-semibold text-[#525866]">
              Shopping
            </p>

            <p className="text-[14px] leading-5 font-medium text-[#0E121B]">
              $900.00
            </p>

          </div>


          {/* Utilities */}
          <div className="flex flex-col items-center border-r border-gray-200 py-4">

            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF8FF]">
              <FiFileText className="h-5 w-5 text-cyan-500" />
            </div>

            <p className="text-[12px] leading-4 font-medium text-[#525866]">
              Utilities
            </p>

            <p className="text-[14px] leading-5 font-medium text-[#0E121B]">
              $600.00
            </p>

          </div>


          {/* Others */}
          <div className="flex flex-col items-center py-4">

            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#F2F5F8]">
              <FiDollarSign className="h-4 w-4 text-[#525866]" />
            </div>

            <p className="text-[12px] leading-4 font-medium text-[#525866]">
              Others
            </p>

            <p className="text-[14px] leading-5 font-medium text-[#0E121B]">
              $200.00
            </p>

          </div>

        </div>


        {/* Spending Limit Message */}
        <div className="bg-white h-7 w-full mt-4 rounded-md border border-[#E1E4EA] px-2.5 flex items-center justify-between">

          <p className="text-[12px] leading-4 font-medium text-[#525866] whitespace-nowrap">
            Your weekly spending limit is{" "}

            <span className="text-[14px] leading-5 font-medium text-[#525866]">
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