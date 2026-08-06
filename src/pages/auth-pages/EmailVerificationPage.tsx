import { RiMailCheckFill } from "react-icons/ri";
import AuthCard from "../../components/auth-components/AuthCard";
import { VerifyInputs } from "../../components/auth-components/inputs";
import Layout from "../../components/auth-components/Layout";

const EmailVerificationPage = () => {
  return (
      <Layout
        text="Back to login?"
        linkText="Login"
        linkTo="/login"
      >

      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiMailCheckFill className="h-8 w-8 text-gray-500" />}
        >
          <VerifyInputs />
        </AuthCard>
      </div>
    </Layout>
  );
};

export default EmailVerificationPage;