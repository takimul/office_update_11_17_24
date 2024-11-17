"use client";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const Card = ({ service, idx, progress, targetScale, range }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      key={idx}
      className={
        "h-screen sticky -top-16 lg:top-0 flex items-center justify-center z-10"
      }
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        style={{
          top: `calc(25% + ${idx * 30}px)`,
          scale,
        }}
        className={`w-full p-6 bg-slate-50 lg:p-10 flex flex-col lg:flex-row-reverse gap-16 items-center shadow-lg rounded-2xl lg:h-[500px] absolute border border-gray-200 `}
      >
        <Image
          className={"rounded-2xl"}
          src={service.image}
          width={600}
          height={400}
          alt={service.name}
        />
        <div className={"space-y-3"}>
          <h1 className={"text-lg font-bold"}>{service.name}</h1>
          <p>{service.description}</p>
          <ul className={"ml-5 flex flex-col lg:flex-row lg:gap-8"}>
            {service.offerings.map((offer, idx) => (
              <li className={"list-item list-disc font-md"} key={idx}>
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
