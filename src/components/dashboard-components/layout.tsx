import { ReactNode } from "react";
import SideBar from "./sidebar";

interface LayoutProps {
    
    children: ReactNode;
}

function Layout({
    
    children,
}: LayoutProps){

    return (
        
            <div className="flex h-screen overflow-hidden">
                <SideBar/>
            <main className=" flex-1 overflow-y-auto">
                {children}
            </main>   
        </div>SUPPORT
        
    );    
}
export default Layout;