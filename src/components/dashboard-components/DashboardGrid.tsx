import DashboardCard from "./DashboardCard";

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