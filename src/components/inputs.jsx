import React from "react";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

export default function LoginInputs(){
    return(
    <>
        
    <form className="space-y-5" action="#" method="POST">
    
     <div className="relative flex items-center">
              <MdMailOutline className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="hello@alignui.com" 
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition duration-150 ease-in-out"
              />
            </div>

     
      <div>
       <div className="relative flex items-center">
        {/* React Icon positioned absolutely */}
        <CiLock className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />

        {/* Input field with pl-11 to prevent text from overlapping the icon */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••••"
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition duration-150 ease-in-out"
        />
        <IoEyeOutline className="absolute right-3.5 text-slate-400 text-xl pointer-events-none"  />
      </div>
      </div>

 {/* remember me checkbox and forget password link */}
      <div class="flex items-center">
        <input 
          type="checkbox" 
          id="remember" 
          name="remember" 
          class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
        />
        <label for="remember" class="ml-2 text-sm text-slate-600 cursor-pointer select-none">
          keep me logged in
        </label>
    
        <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-500 transition-colors mask-linear-to-zinc-700 ml-20">
            Forgot password?
          </a>
       </div>
       {/* login button */}
      <button 
        type="submit" 
        className="w-full bg-indigo-700 py-3 px-4 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow-md"
      >
        Login
      </button>
      
    </form>
    </>
    );
} 