import { RiDoorLockFill } from "react-icons/ri";
import AuthCard from "../../components/auth-components/AuthCard";
import GridBackground from "../../components/auth-components/GridBackground";
import Navbar from "../../components/auth-components/Navbar";
import Footer from "../../components/auth-components/Footer";
import { ResetInputs } from "../../components/auth-components/inputs";
import Layout from "../../components/auth-components/Layout";

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
    </Layout>
  );
};

export default ResetPasswordPage;