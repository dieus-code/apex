import { FiMail } from "react-icons/fi";
import AuthCard from "../components/AuthCard";
import GridBackground from "../components/GridBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { VerifyInputs } from "../components/inputs";
import Layout from "../components/Layout";

const EmailVerificationPage = () => {
  return (
      <Layout
        text="Back to login?"
        linkText="Login"
        linkTo="/login"
      >

      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<FiMail className="h-5 w-5 text-gray-500" />}
        >
          <VerifyInputs />
        </AuthCard>
      </div>
    </Layout>
  );
};

export default EmailVerificationPage;