"use client";

import Modal from "@/Components/Modals/Modal";
import LoadingInfinite from "@/Components/Shared/Loading/LoadingInfinite";
import useLoadData from "@/Hooks/useLoadData";
import useLoggedUser from "@/Hooks/useLoggedUser";
import MainLayout from "@/Layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  const { isAdmin } = useLoggedUser();
  const [data, , isLoading] = useLoadData("portfolio");
  const projects = data?.data;

  console.log(projects, isLoading);

  // const projects = [
  //   {
  //     id: 1,
  //     name: "E-commerce Platform",
  //     description:
  //       "Developed a fully-functional e-commerce platform with a responsive UI, payment integration, and product management system.",
  //     technologies: ["React", "Next.js", "Stripe API", "Node.js"],
  //     price: 5000,
  //     pages: 25,
  //     url: "https://example-ecommerce.com",
  //   },
  //   {
  //     id: 2,
  //     name: "SaaS Dashboard",
  //     description:
  //       "Created an intuitive dashboard for a SaaS application, featuring real-time data visualization and user management.",
  //     technologies: ["Vue.js", "Django", "PostgreSQL", "D3.js"],
  //     price: 7000,
  //     pages: 15,
  //     url: "https://example-saas.com",
  //   },
  //   {
  //     id: 3,
  //     name: "Portfolio Website",
  //     description:
  //       "Designed and developed a personal portfolio website for a designer, highlighting projects and creative work.",
  //     technologies: ["HTML5", "CSS3", "JavaScript", "Gatsby"],
  //     price: 1500,
  //     pages: 8,
  //     url: "https://example-portfolio.com",
  //   },
  //   {
  //     id: 4,
  //     name: "Real Estate Listing Platform",
  //     description:
  //       "Built a real estate listing platform with advanced search filters, map integration, and property management features.",
  //     technologies: ["Angular", "Node.js", "MongoDB", "Google Maps API"],
  //     price: 6000,
  //     pages: 20,
  //     url: "https://example-realestate.com",
  //   },
  //   {
  //     id: 5,
  //     name: "Healthcare Booking System",
  //     description:
  //       "Developed a booking and scheduling system for a healthcare provider, with integration for online consultations.",
  //     technologies: ["React", "Next.js", "Firebase", "Twilio API"],
  //     price: 5500,
  //     pages: 18,
  //     url: "https://example-healthcare.com",
  //   },
  //   {
  //     id: 6,
  //     name: "Online Learning Platform",
  //     description:
  //       "Created an e-learning platform featuring video lessons, quizzes, and student progress tracking.",
  //     technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
  //     price: 4500,
  //     pages: 22,
  //     url: "https://example-elearning.com",
  //   },
  //   {
  //     id: 7,
  //     name: "Social Media App",
  //     description:
  //       "Developed a social media application allowing users to post, like, comment, and follow other users.",
  //     technologies: ["React Native", "Node.js", "Firebase", "Redux"],
  //     price: 8000,
  //     pages: 30,
  //     url: "https://example-socialapp.com",
  //   },
  //   {
  //     id: 8,
  //     name: "Restaurant Management System",
  //     description:
  //       "Built a system for managing restaurant orders, inventory, and staff schedules, with a mobile-friendly interface.",
  //     technologies: ["React", "Node.js", "MongoDB", "Express"],
  //     price: 4000,
  //     pages: 12,
  //     url: "https://example-restaurant.com",
  //   },
  //   {
  //     id: 9,
  //     name: "Event Management Platform",
  //     description:
  //       "Created a platform for organizing and managing events, including ticket sales, guest lists, and live streaming features.",
  //     technologies: ["Next.js", "Node.js", "Stripe API", "WebSocket"],
  //     price: 6500,
  //     pages: 14,
  //     url: "https://example-events.com",
  //   },
  //   {
  //     id: 10,
  //     name: "Fitness App",
  //     description:
  //       "Developed a fitness app for tracking workouts, meal plans, and user progress with a personalized dashboard.",
  //     technologies: ["React Native", "Firebase", "GraphQL", "Node.js"],
  //     price: 6000,
  //     pages: 16,
  //     url: "https://example-fitnessapp.com",
  //   },
  // ];

  return (
    <MainLayout>
      {isLoading || projects === "undefined" ? (
        <div
          className={
            "h-screen text-white bg-black justify-center items-center flex"
          }
        >
          <LoadingInfinite> </LoadingInfinite>
        </div>
      ) : (
        <div className=" py-20 ">
          <div className=" text-center py-6">
            <h1 className="font-bold text-3xl">Projects</h1>
            <div className="py-4">
              {isAdmin && (
                <Modal
                  id={"addProjectModal"}
                  apiName="portfolio"
                  buttonName={"Add Project"}
                  heading={"Add a New Project"}
                  input={[
                    ["name"],
                    ["technologies"],
                    ["price"],
                    ["pages"],
                    ["description"],
                  ]}
                ></Modal>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[85%] mx-auto gap-12 text-black">
            {projects?.map((project, index) => (
              <div
                key={index}
                className="card card-compact shadow-xl flex h-[450px] lg:h-[500px] bg-base-200  text-2xl relative"
              >
                <figure className={"lg:h-1/2 overflow-hidden"}>
                  <Image
                    src={project.url}
                    alt={project.name}
                    width={1400}
                    height={800}
                  />
                </figure>
                <div className="card-body text-black text-start h-1/2">
                  <h2 className="card-title text-start">{project.name}</h2>
                  <p>{project.description}</p>
                  <p className={"-mt-12 lg:mt-0"}>
                    Technologies :{" "}
                    {project?.technologies?.map((project, idx) => (
                      <span key={idx} className={"md:ml-2"}>
                        {project}
                      </span>
                    ))}
                  </p>

                  <Link
                    href={`/portfolio/${project._id}`}
                    className="btn btn-xs btn-outline absolute right-4 bottom-4"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default PortfolioPage;
