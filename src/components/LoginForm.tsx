import React, { useState } from "react";
import Inputfield from "./Inputs/Inputfield";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import google from "../assets/google.svg";

const LoginForm = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-3/4  justify-center">
      <a href="/">
        <img src={Logo} alt="" className="w-8" />
      </a>
      <h1 className=" text-3xl mt-4">Welcome Back</h1>
      <p className="mb-4 text-innerText font-light">
        Please enter your details
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
        <Inputfield
          label="Password"
          requested={true}
          type="password"
          className="rounded-md h-12 border-innerText border-opacity-20 my-4 text-black focus:ring-primary  focus:border-primary focus:outline-none"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="password"
        />
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center">
            <Inputfield
              requested={false}
              type="checkbox"
              className="rounded w-5 h-5  border-innerText border-opacity-50 my-4 text-primary focus:ring-primary  focus:border-primary focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="checkbox"
            />
            <span className="ml-2 text-title font-regular">Remember Me</span>
          </div>
          <a href="/validate-password" className="text-primary font-medium">
            Forgot Password?
          </a>
        </div>
        <Button
          backgroundColor="#F02B37"
          color="#fff"
          borderRadius="5px"
          className=" font-semibold text-white w-full h-12"
          onClick={() => navigate("/dashboard/welcome")}
        >
          Login
        </Button>
        <Button
          backgroundColor="#ffff"
          color="#0000"
          borderRadius="5px"
          className="flex flex-row items-center justify-center font-medium border-2 border-opacity-20 border-innerText text-title w-full h-12 mt-5"
          onClick={() => navigate("/signup")}
        >
          <img className="w-5 mr-4" src={google} alt="google" /> Login with
          Google
        </Button>
        <div className="flex items-center  w-full justify-center mt-4">
          <span className="font-regular text-title">
            Don't have an account?
          </span>
          <a className="text-primary ml-2 font-medium" href="/signup">
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
