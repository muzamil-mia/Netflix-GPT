import React from "react";
import Header from "./Header";
import { MAIN_IMG } from "../utils/constants";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="relative">
      <Header />
      <div>
        <img src={MAIN_IMG} alt="bg" />
      </div>
      <div className="w-3/12 absolute bg-black bg-opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <form className="overflow-hidden w-[90%] mx-auto">
          <h1 className="text-3xl fnt-bold py-3 px-2">{isSignInForm ? "Sign In": "Sign Up"}</h1>
          {!isSignInForm && (
            <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full mb-4 bg-slate-800 border-none focus:outline-none"
          />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full mb-4 bg-slate-800 border-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 my-4 w-full bg-slate-800 focus:outline-none"
          />
          <button className="block bg-red-700 w-[80%] m-auto text-2xl font-bold rounded-lg my-4 py-2 border-none" >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={handleSigninForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
