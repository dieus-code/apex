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
            <main className="flex-1 min-w-0">
                {children}
            </main>   
        </div>
        
    );    
}
export default Layout;