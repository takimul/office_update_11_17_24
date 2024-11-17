import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  const data = [
    {
      name: "Md Sazzad Hossen",
      title: "Senion Web Developer",
      description:
        "A senior web developer specializing in the MERN stack (MongoDB, Express, React, Node.js) with expertise in designing, building, and optimizing full-stack applications. Skilled in leading projects, mentoring teams, and ensuring high-quality, scalable solutions for complex web applications.",
      image:
        "https://i.ibb.co.com/sWkDXBm/Whats-App-Image-2024-11-17-at-10-53-07-PM-1.jpg",
    },
    {
      name: "Md Takimul Hasan Nihal",
      title: "Senion Web Developer",
      description:
        "Senior Front-End Developer specializing in creating responsive, interactive, and visually appealing user interfaces using HTML, CSS, JavaScript, and modern frameworks. Expert in optimizing performance, ensuring cross-browser compatibility, and delivering seamless user experiences.",
      image:
        "https://i.ibb.co.com/tYHRrzz/Whats-App-Image-2024-11-17-at-10-53-05-PM.jpg",
    },
    {
      name: "Rafiul Haque Raad",
      title: "Social Media Manager",
      description:
        "A Social Media Manager is responsible for planning, creating, and managing content across social media platforms to enhance brand presence, engage audiences, and drive traffic. They analyze performance metrics, execute campaigns, and stay updated on trends to optimize engagement and align with marketing goals. Skilled in strategy, content creation, and community management.",
      image:
        "https://i.ibb.co.com/TvMkGVj/Whats-App-Image-2024-11-17-at-10-53-24-PM.jpg",
    },
    {
      name: "Saad Abdullah Zidan",
      title: "Digital Marketing Expert",
      description:
        "A digital marketing expert specializes in developing and executing online strategies to drive brand awareness, engagement, and conversions. They are skilled in SEO, social media, email marketing, PPC, and analytics, using data-driven insights to optimize campaigns and achieve marketing goals across digital channels.",
      image:
        "https://i.ibb.co.com/sbJBX9C/Whats-App-Image-2024-11-17-at-10-53-07-PM.jpg",
    },
    {
      name: "Rafiul Haque Brinto",
      title: "Graphic Designer (3D)",
      description:
        "A 3D graphic designer specializes in creating three-dimensional visual content for various media, including animation, games, advertising, and product visualization. Skilled in 3D modeling, texturing, rendering, and animation, they use software like Blender, Maya, or 3ds Max to produce realistic or stylized visuals that enhance storytelling and brand experiences.",
      image:
        "https://i.ibb.co.com/MMYStdm/Whats-App-Image-2024-11-17-at-8-40-08-PM.jpg",
    },
    {
      name: "Md Ashikur Rahman",
      title: "Junior Web Developer",
      description:
        "A WordPress Developer with expertise in PHP, specializing in creating, customizing, and managing WordPress websites. Skilled in developing custom themes, plugins, and functionalities using PHP to meet unique client needs. Proficient in integrating APIs, optimizing website performance, and ensuring responsive, SEO-friendly designs. Experienced in troubleshooting, maintaining WordPress sites, and collaborating on both frontend and backend development tasks. Passionate about delivering high-quality, user-focused web solutions.",
      image:
        "https://i.ibb.co.com/wWgfV8N/Whats-App-Image-2024-11-17-at-10-53-05-PM-1.jpg",
    },
  ];
  return (
    <MainLayout>
      <div
        className={
          "py-24 w-[90%] mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-16"
        }
      >
        {data.map((person, idx) => (
          <div key={idx} className="card bg-base-100  shadow-xl">
            <figure>
              <img className={""} src={person.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-extrabold">
                {person.name}
              </h2>
              <div className={"divider divider-neutral"}></div>
              <h2 className={"card-title"}>{person.title}</h2>
              <hr />
              <p>{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default page;
