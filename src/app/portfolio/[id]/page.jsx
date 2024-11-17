"use client";
import MainLayout from "@/Layout/MainLayout";
import { useAxios } from "@/Services/useAxios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const ProjectDetails = ({ params }) => {
  const id = params.id;
  console.log(id);
  const { data: projectDetails, isLoading } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await useAxios.get(`${id}/api`);
      return data.data;
    },
  });
  console.log(projectDetails);

  return (
    <MainLayout>
      {isLoading ? (
        <div className={"min-h-screen items-center flex justify-center"}>
          <div className="flex w-52 flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="skeleton h-32 w-full"></div>
          </div>
        </div>
      ) : (
        <div className={"py-20 lg:max-w-[90%] mx-auto px-4 lg:px-0"}>
          <h1 className={"text-2xl lg:text-5xl font-semibold"}>
            {projectDetails?.name}
          </h1>
          <p className={"my-4 lg:w-1/2 font-semibold"}>
            {projectDetails?.description}
          </p>
          <div>
            Technologies :{" "}
            {projectDetails?.technologies?.map((project, idx) => (
              <span key={idx} className={"md:ml-2"}>
                {project}
              </span>
            ))}
          </div>
          <div className={"mt-2"}>Pages : {projectDetails.pages}</div>
          <div className={"mt-2"}>Price : ${projectDetails.price}</div>
          <div className={"mt-2"}>
            <Image
              src={projectDetails?.url}
              alt={projectDetails?.name}
              width={1900}
              height={600}
            ></Image>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ProjectDetails;
