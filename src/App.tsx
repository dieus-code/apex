import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/Authlayout";
import AuthCard from "./components/AuthCard";
import NewInputs ,{ LoginInputs} from "./components/inputs";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          path="/"
          element={
            <AuthCard>
              <LoginInputs />
            </AuthCard>
          }
        />

        <Route
          path="/login"
          element={
            <AuthCard>
              <LoginInputs />
            </AuthCard>
          }
        />

        <Route
          path="/register"
          element={
            <AuthCard>
              <NewInputs />
            </AuthCard>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;