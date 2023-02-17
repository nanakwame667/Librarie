import React from "react";
import Banner from "../assets/signup-banner.svg";

import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex h-full w-1/2 ">
        <img className="w-full h-full object-cover" src={Banner} alt="banner" />
      </div>
      <div className="flex justify-center w-1/2 ">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
