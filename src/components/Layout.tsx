import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface LayoutProps {
    text: string;
    linkText: string;
    linkTo: string;
    children: ReactNode;
}

function Layout({
    text,
    linkText,
    linkTo,
    children,
}: LayoutProps){

    return (
        <div className=" min-h-screen flex flex-col">
            <Navbar
                text={text}
                linkText={linkText}
                linkTo={linkTo} 
            />
            <main className="flex-1 flex items-center justify-center">
                {children}
            </main>
            <Footer/>    
        </div>
    );    
}
export default Layout;