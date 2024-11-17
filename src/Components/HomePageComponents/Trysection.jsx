import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Trysection = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Hook to capture the scroll progress within the target section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Trigger the scroll progress as the section enters and leaves
  });

  // Calculate how much horizontal scroll is needed dynamically after rendering
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth); // Set card width after card is rendered
    }
  }, []);

  const scrollLength = cardWidth * 13; // Total scroll length based on card width and number of cards
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollLength]);

  return (
    <div className={`relative h-[350vh] `} ref={containerRef}>
      <div className="sticky top-20">
        <h2 className="text-center text-3xl font-bold py-8">Portfolio</h2>
      </div>

      {/* Horizontal scrolling section */}
      <motion.div
        ref={horizontalRef}
        className="sticky top-24 flex space-x-4 h-[70vh] items-center px-8 hide-scrollbar"
        style={{ x, width: "200vw" }} // Ensure the width is wide enough for horizontal scrolling
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <motion.div
              ref={cardRef}
              key={index}
              className="w-[30%] bg-white card h-[300px] flex-shrink-0 shadow-xl"
            >
              {/* Replace with your actual image URLs */}
              <Image
                src={`/projects/project-${index + 1}.jpg`}
                alt={`Project ${index + 1}`}
                width={400}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Project {index + 1}</h3>
                <p>Description for project {index + 1}</p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Trysection;
