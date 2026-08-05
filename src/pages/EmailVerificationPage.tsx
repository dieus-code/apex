import { RiMailCheckFill } from "react-icons/ri";
import AuthCard from "../components/AuthCard";
import GridBackground from "../components/GridBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { VerifyInputs } from "../components/inputs";

const EmailVerificationPage = () => {
  return (
    <GridBackground>
      <Navbar
        text="Back to login?"
        linkText="Login"
        linkTo="/login"
      />

      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiMailCheckFill className="h-5 w-5 text-gray-500" />}
        >
          <VerifyInputs />
        </AuthCard>
      </div>

      <Footer />
    </GridBackground>
  );
};

export default EmailVerificationPage;