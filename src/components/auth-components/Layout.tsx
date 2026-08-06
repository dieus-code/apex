import Footer from "./Footer";
import GridBackground from "./GridBackground";
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
        <GridBackground>
            <div className=" min-h-screen flex flex-col">
            <Navbar
                text={text}
                linkText={linkText}
                linkTo={linkTo} 
            />
            <main >
                {children}
            </main>
            <Footer/>    
        </div>
        </GridBackground>
    );    
}
export default Layout;