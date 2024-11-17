import React from "react";

const TouchSection = () => {
  const data = {
    title: "Ready to transform your brand?",
    description:
      "Partner with us to elevate your brand to new heights. Contact our team of experts today.",
  };
  return (
    <div
      className={"lg:py-36 py-20 px-6 lg:px-0 bg-gray-100 mt-16 text-center"}
    >
      <h1 className={"lg:text-6xl text-2xl font-bold"}>{data.title}</h1>
      <p className={"my-6"}>{data.description}</p>
      <button className={"btn btn-outline"}>Get In Touch</button>
    </div>
  );
};

export default TouchSection;
