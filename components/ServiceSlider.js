import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Image from "next/image";
// import { FreeMode, Pagination } from "swiper";

const skillData = [
  {
    image: "/ico-1.png",
    title: "Branding",
    description:
      "Minimal personal page (built with Framer) for freelance product designer.",
  },
  {
    image: "/ico-2.png",
    title: "Design",
    description:
      "Featuring a unique bento grid of preview images when you click projects.",
  },
  {
    image: "/ico-3.png",
    title: "Development",
    description:
      "Clean One pager for Relay grid of the design studio led when you click his projects.",
  },
  {
    image: "/ico-4.png",
    title: "Mobile Apps",
    description:
      "Lots of fun stuff in here like a when you click his projects unique bento grid of preview images",
  },
  {
    image: "/ico-2.png",
    title: "SEO",
    description:
      "Chat bot and even a pong game fun stuff in that discounts his services if you beat the house.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      // modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {skillData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="flex px-6 py-8 transition-all duration-300 bg-white rounded-lg cursor-pointer h-max sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-black hover:text-white">
            <div className="mb-4 text-4xl">
              <Image src={item.image} width={50} height={50} alt={item.title} />
            </div>

            <div className="mb-2">
              <div className="mb-2 text-lg">{item.title}</div>
            </div>
            <div>{item.description}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
