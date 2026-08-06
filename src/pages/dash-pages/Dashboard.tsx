import DashHeader from "../../components/dashboard-components/DashHeader";
import avatar from "../../assets/avatar.png";
const Dashboard = () => {
    return (
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
    );
}
export default Dashboard;
