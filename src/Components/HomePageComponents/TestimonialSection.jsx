"use client";

import Heading from "../Shared/Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO",
      company: "Tech Innovators",
      testimonial:
        "The team delivered a phenomenal website for our company. Their expertise in web development is evident in the seamless user experience and the stunning design they created. Highly recommend!",
      rating: 5,
      image:
        "https://images.squarespace-cdn.com/content/v1/572e050c4d088ea3a8f0ac9d/1652567753661-R2Q0NDAPAXPO9I7OQ6EK/850_6727-PRINT.jpg?format=1000w",
    },
    {
      name: "Jane Smith",
      designation: "Marketing Director",
      company: "Bright Future Media",
      testimonial:
        "Working with this web development team was a great experience. They were professional, responsive, and delivered the project on time. The website has boosted our brand presence significantly.",
      rating: 4.8,
      image:
        "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
    },
    {
      name: "Michael Johnson",
      designation: "Founder",
      company: "Creative Minds",
      testimonial:
        "Their web development services are top-notch. The team was able to capture our vision perfectly and turn it into a functional and attractive website. We are very satisfied with the final product.",
      rating: 4.9,
      image:
        "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg",
    },
  ];

  return (
    <div className={"lg:max-w-[90%] mx-auto"}>
      <div className={"text-center my-6 lg:my-16"}>
        <Heading heading={"Testimonials"}></Heading>
      </div>
      <Swiper
        draggable={true}
        pagination={{ clickable: true }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=" shadow-lg rounded-xl"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx} className={"p-6 md:p-16"}>
            <div
              className={
                "flex flex-col md:flex-row lg:gap-16 gap-6 items-center"
              }
            >
              <Image
                className={"rounded-2xl"}
                src={testimonial.image}
                alt={testimonial.name}
                width={300}
                height={300}
              ></Image>

              <div>
                <ReactStars
                  size={24}
                  edit={false}
                  value={testimonial.rating}
                  isHalf={true}
                />
                <div className={"my-6"}>{testimonial.testimonial}</div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.company}</div>
                <div className="text-gray-400">{testimonial.designation}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
