import DashHeader from "../../components/dashboard-components/DashHeader";
import avatar from "../../assets/avatar.png";
import Layout from "../../components/dashboard-components/layout";
const Dashboard = () => {
    return (
      <Layout>
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
      </Layout>
      
    );
}
export default Dashboard;
