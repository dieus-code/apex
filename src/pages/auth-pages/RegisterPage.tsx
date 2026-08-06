import { RiUserAddFill } from "react-icons/ri";
import AuthCard from "../../components/auth-components/AuthCard";
import NewInputs from "../../components/auth-components/inputs";
import Layout from "../../components/auth-components/Layout";

const RegisterPage = () => {
  return (
      <Layout
        text="Already have an account?"
        linkText="Login"
        linkTo="/login"
      >
      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiUserAddFill  className="h-8 w-8 text-gray-500" />}
        >
          <NewInputs />
        </AuthCard>
      </div>
    </Layout>
  );
};

export default RegisterPage;