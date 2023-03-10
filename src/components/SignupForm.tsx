import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "./Button";
import Inputfield from "./Inputs/Inputfield";
import google from "../assets/google.svg";

const SignupForm = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-3/4  justify-center">
      <a href="/">
        <img src={Logo} alt="" className="w-8" />
      </a>
      <h1 className=" text-3xl my-4">Sign Up</h1>
      <form>
        <Inputfield
          label="Full Name"
          required={true}
          type="text"
          className="rounded-md h-12 border-innerText border-opacity-20 my-4 text-black focus:ring-primary  focus:border-primary focus:outline-none"
          placeholder="Enter your full name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="text"
        />
        <Inputfield
          label="Email"
          required={true}
          type="email"
          className="rounded-md h-12 border-innerText border-opacity-20 my-4 text-black focus:ring-primary  focus:border-primary focus:outline-none"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <Inputfield
          label="Password"
          required={true}
          type="password"
          className="rounded-md h-12 border-innerText border-opacity-20 my-4 text-black focus:ring-primary  focus:border-primary focus:outline-none"
          placeholder="Create your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="password"
        />
        <Button
          backgroundColor="#F02B37"
          color="#fff"
          borderRadius="5px"
          className=" font-semibold text-white w-full h-12"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </Button>
        <Button
          backgroundColor="#ffff"
          color="#0000"
          borderRadius="5px"
          className="flex flex-row items-center justify-center font-medium border-2 border-opacity-20 border-innerText text-title w-full h-12 mt-5"
          onClick={() => navigate("/signup")}
        >
          <img className="w-5 mr-4" src={google} alt="google" /> Sign Up with
          Google
        </Button>
        <div className="flex items-center  w-full justify-center mt-4">
          <span className="font-regular text-title">
            Already have an account?
          </span>
          <a className="text-primary ml-2 font-medium" href="/login">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
