import DashboardCard from "./DashboardCard";
import { AiOutlineCreditCard } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { FiPlus,FiHome, FiChevronLeft, FiGift, FiDroplet, FiChevronRight } from "react-icons/fi";
// import { PiStudent } from "react-icons/pi";
import GaugeComponent from "react-gauge-component";
import { RiFlashlightLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { FiPieChart, FiInfo, FiDollarSign,FiFileText,FiShoppingBag} from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function DashboardGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* My Cards */}
      <DashboardCard className="min-h-[260px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AiOutlineCreditCard className="text-2xl text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-900">
              My Cards
            </h2>
          </div>

          <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition">
            <FiPlus />
            <span>Add Card</span>
          </button>
        </div>

        {/* Card */}
        <div className="border 1px [#FFFFFF] rounded-2xl p-6 raidus-8 gap-2">
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Card Logo */}
              <div  className="flex items-center justify-between w-8 h[32px] t [20px] l[20px] object-contain">
                    <img
                      src={logo}
                      alt="Logo"
                    /></div>

              {/* Active Badge */}
              <button className="top[24px] left[100px] gap[4px] p-1 border[1px] pt[4px] pr[8px] pl[4px] pb[4px] bg-white-0 rounded-full text-sm font-stroke">
                Active
              </button>
            </div>

            {/* Mastercard */}
            <div className="text-lg font-bold text-gray-700">
              Mastercard
            </div>
          </div>

          {/* Card Name */}
          <p className="mt-8 text-gray-500">
            Savings Card
          </p>

          {/* Balance */}
          <h1 className="text-5xl font-bold text-gray-900 mt-2">
            $16,058.94
          </h1>

          {/* Navigation */}
          <div className="flex justify-end gap-2 mt-6">
            <button className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100">
              <FiChevronLeft />
            </button>

            <button className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100">
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 border rounded-xl overflow-hidden mt-6">
          <button className="py-3 border-r hover:bg-gray-100">
            Daily
          </button>

          <button className="py-3 border-r bg-gray-50 font-medium">
            Weekly
          </button>

          <button className="py-3 hover:bg-gray-100">
            Monthly
          </button>
        </div>

        {/* Spending Limit */}
        <div className="flex items-center justify-between mt-6 border border-gray-200 rounded-2xl p-4">
          <div className="flex items-center gap-4">
            {/* Circle */}
            <div className="w-14 h-14 rounded-full border-[6px] border-gray-300 border-t-blue-600"></div>

            <div>
              <p className="text-gray-500">
                Spending Limit
              </p>

              <h3 className="text-2xl font-bold">
                $1,500.00
                <span className="text-gray-400 text-base font-normal">
                  {" "}
                  / week
                </span>
              </h3>
            </div>
          </div>

          <button className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100">
            <FiChevronRight />
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

  <div className="border border-gray-200 mb-4"></div>

  {/* Action 1 */}
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
        <FiHome className="text-green-600 text-xl" />
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
        <FiGift className="text-pink-600 text-xl" />
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
        <FiDroplet className="text-red-500 text-xl" />
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
      {/* Spending Summary */}
<DashboardCard className="min-h-[280px]">
  {/* Header */}
  <div className="flex items-center justify-between border-b border-gray-200 pb-5">
    <div className="flex items-center gap-3">
      <FiPieChart className="h-6 w-6 text-gray-700" />

      <h2 className="text-xl font-medium text-gray-800">
        Spending Summary
      </h2>
    </div>

    <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-base text-gray-700 hover:bg-gray-50">
      <span>Last Week</span>
      <span> <IoIosArrowDown/></span>
    </button>
  </div>

  {/* Gauge */}
  <div className="border-t pt-6">
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
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
        <FiShoppingBag className="h-6 w-6 text-blue-500" />
      </div>

      <p className="text-lg text-gray-600">
        Shopping
      </p>

      <p className="mt-1 text-2xl font-medium text-gray-900">
        $900.00
      </p>
    </div>

    {/* Utilities */}
    <div className="flex flex-col items-center border-r border-gray-200 py-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
        <FiFileText className="h-6 w-6 text-cyan-500" />
      </div>

      <p className="text-lg text-gray-600">
        Utilities
      </p>

      <p className="mt-1 text-2xl font-medium text-gray-900">
        $600.00
      </p>
    </div>

    {/* Others */}
    <div className="flex flex-col items-center py-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
        <FiDollarSign className="h-6 w-6 text-gray-600" />
      </div>

      <p className="text-lg text-gray-600">
        Others
      </p>

      <p className="mt-1 text-2xl font-medium text-gray-900">
        $200.00
      </p>
    </div>
  </div>

  {/* Spending limit message */}
  <div className="mt-5 flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
    <p className="text-base text-gray-600">
      Your weekly spending limit is{" "}
      <span className="font-medium text-gray-800">
        $2000.
      </span>
    </p>

    <FiInfo className="h-5 w-5 text-gray-400" />
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