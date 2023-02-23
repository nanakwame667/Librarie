import React, { useState } from "react";
import Inputfield from "./Inputs/Inputfield";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

const ValidatePasswordForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-3/4  justify-center">
      <a href="/">
        <img src={Logo} alt="" className="w-8" />
      </a>
      <h1 className=" text-3xl mt-4">Reset Password</h1>
      <p className="mb-4 text-innerText font-light">
        Please provide your email address
      </p>
      <form>
        <Inputfield
          label="Email"
          requested={true}
          type="email"
          className=" peer rounded-md h-12 border-innerText border-opacity-20 my-4 text-black focus:ring-primary  focus:border-primary focus:outline-none"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required={true}
        />

        <Button
          backgroundColor="#F02B37"
          color="#fff"
          borderRadius="5px"
          className=" font-semibold text-white w-full h-12"
          onClick={() => navigate("/reset-password")}
        >
          Send Instructions
        </Button>

        <div className="flex items-center  w-full justify-center mt-4">
          <span className="font-regular text-title">Want to return back?</span>
          <a className="text-primary ml-2 font-medium" href="/signup">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default ValidatePasswordForm;
