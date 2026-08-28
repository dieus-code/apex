import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard-pages/Dashboard";
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
        <Route path="/dashboard" element={<Dashboard/>} />
        
      </Routes>
  );
}

export default App;