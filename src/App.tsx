import AuthCard from "./components/AuthCard";
import GridBackground from "./components/GridBackground";

function App() {
  return (
    <GridBackground>
      <main className="flex min-h-screen items-center justify-center p-4">
        <AuthCard>
          {/* Page-specific auth content will go here */}
        </AuthCard>
      </main>
    </GridBackground>
  );
}

export default App;