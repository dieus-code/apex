import React from "react";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import { RiInformationFill } from "react-icons/ri";
import Button from "./buttons";

export default function NewInputs(){
    return(
    <>
    {/* header */}
        <div className="text-center mb-8">
      <h1 className="text-2xl font-medium leading-8 text-center text-[#0E121B]">Create a new account</h1>
      <p className="text-sm text-slate-500 mt-1">Enter your details to register</p>
    </div>

     {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />

    <form className="space-y-5 align-items-center justify-center" action="#" method="POST">
        {/* name section */}
    <div className="flex flex-col ">
            <label className="text-[14px] text-black ">
            Full Name <span className="text-blue-600">*</span>
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
          
          <label className="text-[14px] text-black  ">
              Email Address<span className="text-blue-600">*</span>
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
        <label className=" text-[14px]  text-black ">
             Password<span className="text-blue-600">*</span>
            </label>
       <div className="relative flex items-center">
        {/* React Icon positioned absolutely */}
        <CiLock className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />

        {/* Input field with pl-11 to prevent text from overlapping the icon */}
        <input
          type="password"
          id="password"
          name="password"
         placeholder="• • • • • • • • • •"
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition duration-150 ease-in-out"
        />
        <IoEyeOutline className="absolute right-3.5 text-slate-400 text-xl pointer-events-none"  />
      </div>
      

 {/* Password Requirements Checklist Line */}
        <div  className="text-center flex items-center gap-3 mt-1 text-xs text-slate-500"> <RiInformationFill/><span><p>Must conatin 1 uppercase letter,1 number and min. 8 characters </p ></span></div>
        </div>
       <Button type="submit">Register</Button>
        {/* terms and conditions */}
        <div  > <span><p className="text-center text-[#525866] text-[14px] ">By clicking Register, you agree to accept Apex Financial's</p ></span>
         <a href="/reset-password" className=" text-black hover:text-indigo-500 transition-colors underline">
                <p className="text-center text-[14px] mt-1">Forgot password?</p>
              </a>
      </div>
    </form>
    </>
    );
} 
export function LoginInputs(){
       return(
    <>
       {/* header */}
        <div className="text-center mb-8">
      <h1  className="text-2xl font-medium leading-8 text-center text-[#0E121B]">Login to your account</h1>
      <p className="text-sm text-slate-500 mt-1">Enter your details to login</p>
    </div>

     {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />

    <form className="space-y-5" action="#" method="POST">
      
          {/* email section */}
          <label className="text-xs font-bold text-black uppercase tracking-wider">
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
        <label className="text-xs font-bold text-black uppercase tracking-wider">
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
          placeholder="• • • • • • • • • •"
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
             <a href="/reset-password" className="ml-35 text-xs font-medium text-black hover:text-indigo-500 transition-colors underline">
                Forgot password?
              </a>
          </div>

     <Button type="submit">Login</Button>
    </form>
    </>
       );
}
export function ResetInputs(){
       return(
    <>
       {/* header */}
        <div className="text-center mb-5">
      <h1 className="text-2xl font-medium leading-8 text-center text-[#0E121B]">Reset Password</h1>
      <p className="text-sm text-slate-500 mt-1">Enter your details to reset your password.</p>
    </div>

     {/* Divider */}
      <div className=" mb-5 h-px w-full bg-gray-200" />

    <form className="align-center justify-center flex-col items-center gap-5" action="#" method="POST">
      
          {/* email section */}
          <label className="text-[14px]   text-black ">
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

    <div  className="align-center justify-center flex-col items-center gap-3 mt-5 text-xs">
      <Button type="submit">Reset Password</Button>
      <div className="mt-5">
      
         <span className="text-center"><p>Don't have access anymore?</p ></span>

          <span className="text-center "><a href="#" className="text-black font-medium underline "><p className="mt-2">Try another method</p></a></span>
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
          <h1 className="text-2xl font-medium leading-8 text-center text-[#0E121B]">Enter verification code</h1>
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
           <Button type="submit">Submit code</Button>
        </div>
        </>
        );
}





