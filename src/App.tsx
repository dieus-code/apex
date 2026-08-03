import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

function App() {
  return (
    <GridBackground>
      <Navbar
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/signup"
      />
      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard >
          <VerifyInputs/>
        </AuthCard>
      </div>
      <Footer/>
    </GridBackground>
  );
}

export default App;