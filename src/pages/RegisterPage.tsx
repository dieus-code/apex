import { FiUserPlus } from "react-icons/fi";
import AuthCard from "../components/AuthCard";
import GridBackground from "../components/GridBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewInputs from "../components/inputs";
import Layout from "../components/Layout";

const RegisterPage = () => {
  return (
      <Layout
        text="Already have an account?"
        linkText="Login"
        linkTo="/login"
      >
      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<FiUserPlus className="h-5 w-5 text-gray-500" />}
        >
          <NewInputs />
        </AuthCard>
      </div>
    </Layout>
  );
};

export default RegisterPage;