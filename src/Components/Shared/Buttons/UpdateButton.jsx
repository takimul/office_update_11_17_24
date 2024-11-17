"use client";
import React from "react";

const UpdateButton = ({ buttonName }) => {
  return (
    <div>
      <button className="btn btn-xs lg:btn-md bg-gray-800 text-white bg-opacity-80 backdrop-blur-2xl">
        {buttonName}
      </button>
    </div>
  );
};

export default UpdateButton;
