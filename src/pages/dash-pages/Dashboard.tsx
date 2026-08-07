import DashHeader from "../../components/dashboard-components/DashHeader";
import DashboardGrid from "../../components/dashboard-components/DashboardGrid";
import avatar from "../../assets/avatar.png";
import TransactionTable from "../../components/dashboard-components/TransactionTable";

const Dashboard = () => {
  return (
   <div className="p-6 space-y-6">
  <DashHeader
    avatar={
      <img
        src={avatar}
        alt="Arthur Taylor"
        className="h-full w-full rounded-full object-cover"
      />
    }
    title="Arthur Taylor"
    subtitle="Welcome back to Apex 👋"
  />

  <DashboardGrid />

  <TransactionTable />
</div>
  );
};

export default Dashboard;