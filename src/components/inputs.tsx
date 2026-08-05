import React from "react";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
export default function NewInputs(){
    return(
    <>
    {/* header */}
        <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Create a new account</h2>
      <p className="text-sm text-slate-500 mt-1">Enter your details to register</p>
    </div>

     {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />

    <form className="space-y-5 align-items-center justify-center" action="#" method="POST">
        {/* name section */}
    <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Full Name
            </label>
            <div className="relative flex items-center">
              <RiUser6Line className="absolute left-3.5 text-slate-400 text-lg pointer-events-none" />
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                required 
                placeholder="John Brown" 
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition duration-150 ease-in-out"
              />
            </div>
          </div>
          {/* email section */}
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Email Address
            </label>
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

     {/* password */}
      <div>
        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Password
            </label>
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
      

 {/* Password Requirements Checklist Line */}
        <div  className="flex items-center gap-3 mt-1 text-xs text-slate-500"> <span><p>must conatin 1 uppercase letter, 1 lowercase letter,1 number and min. 8characters </p ></span></div>
        </div>
      <button 
        type="submit" 
        className="w-full bg-indigo-700 py-3 px-4 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow-md"
      >
        Register
      </button>
        {/* terms and conditions */}
        <div  className="flex items-center gap-3 mt-1 text-xs text-slate-500"> <span><p>By clicking Register, you agree to accept Apex financial's</p ></span></div>
      
    </form>
    </>
    );
} 
export function LoginInputs(){
       return(
    <>
       {/* header */}
        <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Login to your account</h2>
      <p className="text-sm text-slate-500 mt-1">Enter your details to login</p>
    </div>

     {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />

    <form className="space-y-5" action="#" method="POST">
      
          {/* email section */}
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Email Address
            </label>
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

      
     {/* password */}
      <div>
        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Password
            </label>
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

          {/* Remember Me */}
          <div className="flex items-center">
            <input 
            type="checkbox"
              id="remember" 
              name="remember" 
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-slate-600 cursor-pointer select-none">
              keep me logged in
            </label>
             <a href="/reset-password" className="ml-35 text-xs font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                Forgot password?
              </a>
          </div>

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
export function ResetInputs(){
       return(
    <>
       {/* header */}
        <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Reset Password</h2>
      <p className="text-sm text-slate-500 mt-1">Enter your details to reset your password</p>
    </div>

     {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />

    <form className="align-center justify-center flex-col items-center gap-5" action="#" method="POST">
      
          {/* email section */}
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Email Address
            </label>
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

    <div  className="align-center justify-center flex-col items-center gap-3 mt-1 text-xs text-slate-500">
      <button 
        type="submit" 
        className="w-full bg-indigo-700 py-3 px-4 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow-md mt-2"
      >
        Reset Password
      </button>
      <div className="items-center mt-2 ml-20">
      
         <span><p>Don't have access anymore?</p ></span>

          <span><a href="#" className="text-indigo-700 font-medium"><p>Try another method</p></a></span>
          </div>
         </div>
      

    </form>
    </>
       );
}
export function VerifyInputs(){
const email = "hello@alignui.com"
  return(
  
      
        <>
        <div className="text-center mb-8">
          {/* Title & Description */}
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Enter verification code</h2>
          <p className="text-sm text-slate-500 mt-2 mb-8 leading-relaxed">
            We've sent a  code to {email}. 
          </p>
        </div>
         {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />
        <form  className="space-y-6">
          <div className="flex justify-between gap-2" >
              {/* input 1 */}
              <input
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="w-20 h-14 text-center text-xl font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
              />
              {/* input 2 */}
           <input
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="w-20 h-14 text-center text-xl font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
              />
              {/* input 3 */}
               <input
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="w-20 h-14 text-center text-xl font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
              />
              {/* input 4 */}
               <input
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="w-20 h-14 text-center text-xl font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
              />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Code
          </button>
        </form>
      

    
        <div className="flex-col justify-center mt-8 text-xs text-slate-500">
          <p className="text-center">
            Experiencing issues receiving the code?{" "}
          </p>
          <button
            type="button"
            className="text-indigo-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 align-center justify-center flex-col items-center gap-3 mt-1 text-xs text-slate-500 ml-30"
          >
            Resend Code
            
          </button>
        </div>
        </>
        );
}





