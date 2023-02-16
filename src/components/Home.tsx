import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full h-auto">
      <Button
        width="250px"
        height="50px"
        backgroundColor="#F02B37"
        color="#fff"
        borderRadius="10px"
        className=" font-medium text-white"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Home;
