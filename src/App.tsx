import LoginCard from "./components/LoginCard";
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
  );
}

export default App;