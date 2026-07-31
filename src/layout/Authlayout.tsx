import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GridBackground from "../components/GridBackground";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <GridBackground>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-6">
          {children}
        </main>

        <Footer />
      </div>
    </GridBackground>
  );
}