import LoginCard from "./components/LoginCard";
import GridBackground from "./components/GridBackground";

function App() {
  return (
    <GridBackground>
      <div className="flex min-h-screen items-center justify-center px-4">
        <LoginCard />
      </div>
    </GridBackground>
  );
}

export default App;