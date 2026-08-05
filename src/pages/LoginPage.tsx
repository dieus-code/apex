import { RiUserFill } from "react-icons/ri";
import AuthCard from "../components/AuthCard";
import GridBackground from "../components/GridBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LoginInputs } from "../components/inputs";

const LoginPage = () => {
  return (
    <GridBackground>
      <Navbar
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/signup"
      />

      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiUserFill className="h-5 w-5 text-gray-500" />}
        >
          <LoginInputs />
        </AuthCard>
      </div>

      <Footer />
    </GridBackground>
  );
};

export default LoginPage;