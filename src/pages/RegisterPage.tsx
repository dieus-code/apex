import { RiUserAddFill } from "react-icons/ri";
import AuthCard from "../components/AuthCard";
import GridBackground from "../components/GridBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewInputs from "../components/inputs";

const RegisterPage = () => {
  return (
    <GridBackground>
      <Navbar
        text="Already have an account?"
        linkText="Login"
        linkTo="/login"
      />

      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiUserAddFill  className="h-5 w-5 text-gray-500" />}
        >
          <NewInputs />
        </AuthCard>
      </div>

      <Footer />
    </GridBackground>
  );
};

export default RegisterPage;