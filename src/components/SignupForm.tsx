import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "./Button";

const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-3/4  justify-center">
      <img src={Logo} alt="" className="w-8" />
      <h1 className=" text-3xl my-4">Sign Up</h1>
      <form>
        <Button
          backgroundColor="#F02B37"
          color="#fff"
          borderRadius="5px"
          className=" font-semibold text-white w-full h-14"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
