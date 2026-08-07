import { ReactNode } from "react";
import SideBar from "./sidebar";

interface LayoutProps {
    
    children: ReactNode;
}

function Layout({
    
    children,
}: LayoutProps){

    return (
        
            <div className=" min-h-screen flex">
                <SideBar/>
            <main >
                {children}
            </main>   
        </div>
        
    );    
}
export default Layout;