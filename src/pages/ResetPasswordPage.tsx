import { RiDoorLockFill } from "react-icons/ri";
import AuthCard from "../components/AuthCard";
import GridBackground from "../components/GridBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ResetInputs } from "../components/inputs";
import Layout from "../components/Layout";

const ResetPasswordPage = () => {
  return (
      <Layout
        text="Remember your password?"
        linkText="Login"
        linkTo="/login"
      >

      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiDoorLockFill className="h-5 w-5 text-gray-500" />}
        >
          <ResetInputs />
        </AuthCard>
      </div>

      <Footer />
    </Layout>
  );
};

export default ResetPasswordPage;