import { RiUserFill } from "react-icons/ri";
import AuthCard from "../components/auth-components/AuthCard";
import GridBackground from "../components/auth-components/GridBackground";
import Navbar from "../components/auth-components/Navbar";
import Footer from "../components/auth-components/Footer";
import { LoginInputs } from "../components/auth-components/inputs";
import Layout from "../components/auth-components/Layout";

const LoginPage = () => {
  return (
      <Layout
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/signup"
      >
      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiUserFill className="h-5 w-5 text-gray-500" />}
        >
          <LoginInputs />
        </AuthCard>
      </div>
    </Layout>
  );
};

export default LoginPage;