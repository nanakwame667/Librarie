import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Button
        backgroundColor="#F02B37"
        color="#fff"
        borderRadius="7px"
        className=" font-medium text-white w-1/4 h-12"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Home;
