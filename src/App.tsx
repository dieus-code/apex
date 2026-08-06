import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth-pages/LoginPage";
import RegisterPage from "./pages/auth-pages/RegisterPage";
import ResetPasswordPage from "./pages/auth-pages/ResetPasswordPage";
import EmailVerificationPage from "./pages/auth-pages/EmailVerificationPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
  );
}

export default App;