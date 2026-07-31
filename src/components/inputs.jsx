import React from "react";

export default function NewInputs(){

    return(
       
        
            <form className="flex-col  bg-blue-900 ">
            <label>full Name:
            <input className=""  />
            </label>
            <label>email:
            <input className=""  />
            </label>
            <label>password:
            <input className=""  />
            </label>
            
            <button className="bg-blue-500">register</button>
            </form>
        
    );
}
export function LoginInputs(){
    return(
    <>
           
            <label>email:
            <input className=""  />
            </label>
            <label>password:
            <input className=""  />
            </label>
            <button>login</button>
    </>
    );
} 