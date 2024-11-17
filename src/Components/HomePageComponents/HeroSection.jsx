"use client";
import useLoggedUser from "@/Hooks/useLoggedUser";
import useLoadData from "@/Hooks/useLoadData";
import Modal from "../Modals/Modal";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { isAdmin } = useLoggedUser();
  const [data, refetch] = useLoadData("banner");

  // Ensure that data and data.data are defined before trying to access them
  const bannerData = data?.data?.[0];
  const title = bannerData?.title || "Default Title"; // Provide a default title if data is missing
  const image = bannerData?.image || "default-image-url"; // Provide a default image if data is missing

  return (
    <div
      className={
        "min-h-screen flex justify-center items-center bg-no-repeat bg-cover bg-opacity-50 relative overflow-hidden"
      }
    >
      <motion.div
        initial={{ opacity: 0.2, rotateX: "45deg" }}
        animate={{
          opacity: 1,
          scaleX: 1.6,
          scaleY: 1.3,
          rotateX: "-45deg",
          transition: {
            type: "tween",
            stiffness: 180,
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className={"absolute z-0 h-[300px] md:h-[600px] w-full "}
      >
        <Image
          src={"https://i.ibb.co/Y23YNzX/Ripple.png"}
          fill
          alt={"background"}
        ></Image>
      </motion.div>

      <motion.div
        className={
          "flex flex-col-reverse lg:flex-row items-center lg:gap-24 lg:max-w-[80%] lg:mx-auto px-3 lg:px-0 z-10"
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial state (invisible and off-screen)
          whileInView={{ opacity: 1, x: 0 }} // Becomes visible when in view
          exit={{ opacity: 0, x: -100 }} // Disappears when out of view
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 80,
          }} // Smooth easing transition
          viewport={{ once: false, amount: 0.1 }} // Controls the visibility threshold
          className={"w-full lg:w-2/3 space-y-6"}
        >
          <h1 className={"lg:text-5xl text-2xl font-bold leading-snug"}>
            {title}
          </h1>
          <button className={"btn btn-outline"}>Start a project with us</button>
          {isAdmin && (
            <div className={"mt-6 bottom-16 z-10"}>
              <Modal
                apiName="banner"
                buttonName={"Update Banner"}
                id={"updateBannerModal"}
                loadedImage={image}
                loadedTitle={title}
                refetch={refetch}
                heading={"Customize Your Banner"}
                input={["description"]}
              ></Modal>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Initial state (invisible and off-screen)
          whileInView={{ opacity: 1, x: 0 }} // Becomes visible when in view
          exit={{ opacity: 0, x: "100vh" }} // Disappears when out of view
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 80,
          }} // Smooth easing transition
          viewport={{ once: false, amount: 0.1 }} // Controls the visibility threshold
          className={"lg:w-2/3 "}
        >
          <Image
            className={"rounded-3xl "}
            src={
              image ||
              "http://localhost:3000/_next/image?url=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2F335c79145455835.629ef2634f695.png&w=1200&q=75"
            }
            alt={"Hero Image"}
            width={1200}
            height={600}
          ></Image>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
