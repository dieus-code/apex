import { Routes, Route } from "react-router-dom";

import LoginCard from "./components/LoginCard";
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
  );
}

export default App;