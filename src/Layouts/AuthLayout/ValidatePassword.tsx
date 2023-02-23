import React from "react";
import Banner from "../../assets/login-banner.svg";
import ValidatePasswordForm from "../../components/ValidatePasswordForm";

const ValidatePassword = () => {
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
        <ValidatePasswordForm />
      </div>
    </div>
  );
};

export default ValidatePassword;
