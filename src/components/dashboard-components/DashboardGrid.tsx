import DashboardCard from "./DashboardCard";

function DashboardGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* My Cards */}
      <DashboardCard className="min-h-[280px]">
        {/* My Cards Content */}
      </DashboardCard>

      {/* Saved Actions */}
      <DashboardCard className="min-h-[280px]">
        {/* Saved Actions Content */}
      </DashboardCard>

      {/* Spending Summary */}
      <DashboardCard className="min-h-[280px]">
        {/* Spending Summary Content */}
      </DashboardCard>

      {/* Recent Transactions */}
      <DashboardCard className="col-span-3 min-h-[320px]">
        {/* Recent Transactions Content */}
      </DashboardCard>
    </div>
  );
}

export default DashboardGrid;