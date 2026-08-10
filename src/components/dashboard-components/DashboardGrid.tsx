import DashboardCard from "./DashboardCard";
import { AiOutlineCreditCard } from "react-icons/ai";
import logo from "../../assets/Apex_logo.png";
import { FiPlus,FiHome, FiChevronLeft, FiGift, FiDroplet, FiChevronRight } from "react-icons/fi";
// import { PiStudent } from "react-icons/pi";
import GaugeComponent from "react-gauge-component";
import { RiFlashlightLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";

function DashboardGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <DashboardCard className="min-h-[260px]">
        {/* My Card */}
      </DashboardCard>

      <DashboardCard className="min-h-[260px]">
        {/* Saved Actions */}
      </DashboardCard>

      <DashboardCard className="min-h-[260px]">
        {/* Spending Summary */}
      </DashboardCard>
    </div>
  );
}

export default DashboardGrid;