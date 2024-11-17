import React from "react";
import Heading from "../Shared/Heading/Heading";
import Image from "next/image";

const AboutUsSection = () => {
  const data = {
    title: "About Us",
    intro:
      "At Zinnodev, we specialize in delivering top-tier web development solutions to help businesses establish a strong online presence. With a focus on innovation, creativity, and user-centric design, we bring your vision to life with cutting-edge technology and design excellence.",
    mission: {
      heading: "Our Mission",
      description:
        "Our mission is to empower businesses by building websites and applications that are not only visually stunning but also functionally robust and optimized for growth. We are committed to providing tailored solutions that meet the unique needs of each client.",
    },
    values: {
      heading: "Core Values",
      list: [
        {
          title: "Customer-Centric",
          description:
            "We prioritize our clients' needs, ensuring every project is tailored to deliver exceptional value and satisfaction.",
        },
        {
          title: "Innovation",
          description:
            "We stay ahead of industry trends, incorporating the latest technologies and tools to create innovative solutions.",
        },
        {
          title: "Quality",
          description:
            "Our focus on quality ensures that every project we deliver meets the highest standards of functionality, design, and performance.",
        },
        {
          title: "Collaboration",
          description:
            "We believe in strong collaboration with our clients, working closely with them to ensure their vision is realized.",
        },
      ],
    },
    team: {
      heading: "Our Team",
      description:
        "We are a team of passionate web developers, designers, and digital strategists with years of experience in the field. Our combined expertise allows us to handle everything from simple websites to complex web and mobile applications.",
    },
    closing:
      "We look forward to collaborating with you and bringing your digital vision to life!",
  };

  return (
    <div className={"max-w-[90%] mx-auto"}>
      <div className={"my-16 text-center"}>
        <Heading heading={data.title}></Heading>
      </div>

      <div className={"my-6 flex flex-col  lg:gap-6 items-center"}>
        <div className={"flex flex-col lg:flex-row gap-4 items-center"}>
          <div className={"md:text-xl font-semibold leading-relaxed"}>
            {data.intro}
          </div>
          <Image
            src={
              "https://img.freepik.com/premium-vector/professional-employees-programming-develop-design-concept_1332470-1454.jpg"
            }
            alt={"about image"}
            width={600}
            height={600}
          ></Image>
        </div>
        <div className={"w-full"}>
          {data.values.list.map((item, idx) => (
            <div key={idx} className={"flex lg:items-center gap-4 py-3 "}>
              <h1 className={"font-bold w-1/3 border-b border-gray-300 py-2"}>
                {item.title}
              </h1>{" "}
              : <p className={"w-2/3"}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
