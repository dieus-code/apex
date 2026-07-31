import { Routes, Route } from "react-router-dom";

import LoginCard from "./components/LoginCard";
<<<<<<< HEAD
// import Register from "./components/Register";
// import Verification from "./pages/Verification";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/login" element={<LoginCard />} />

      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/verification" element={<Verification />} /> */}
      {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
    </Routes>
=======
import GridBackground from "./components/GridBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <GridBackground>
      <Navbar
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/signup"
      />
      <div className="flex min-h-screen items-center justify-center px-4">
        <LoginCard />
      </div>
      <Footer/>
    </GridBackground>
>>>>>>> 2b00ab9a07ec856669c9344cf7452190452a43e9
  );
}

export default App;