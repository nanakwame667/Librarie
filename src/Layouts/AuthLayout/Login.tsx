import React from "react";
import Banner from "../../assets/login-banner.svg";
import LoginForm from "../../components/LoginForm";
const Login = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex h-full w-1/2 ">
        <img
          className="w-full h-full object-cover"
          src={Banner}
          alt="banner"
          loading="eager"
        />
      </div>
      <div className="flex justify-center w-1/2 ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
