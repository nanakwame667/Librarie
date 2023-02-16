import React from "react";
import Banner from "../assets/signup-banner.svg";

const Signup = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex  w-1/2 h-fit">
        <img src={Banner} alt="banner" className="w-full h-auto" />
      </div>
      <div className="flex w-1/2"></div>
    </div>
  );
};

export default Signup;
