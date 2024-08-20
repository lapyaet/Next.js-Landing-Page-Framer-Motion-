import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialsData = [
  {
    image: "/t-avt-1.png",
    name: "Anna",
    positon: "CEO - Taunna",
    message:
      "It is a world class design and development work at a fair price point. The team is professinoal, and nailed the final product. 10/10 recommend!.",
  },
  {
    image: "/t-avt-2.png",
    name: "Doe",
    positon: "CEO - Patrik",
    message:
      "It is a world class design and development work at a fair price point. The team is professinoal, and nailed the final product. 10/10 recommend!.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jimmi",
    positon: "customer",
    message:
      "It is a world class design and development work at a fair price point. The team is professinoal, and nailed the final product. 10/10 recommend!.",
  },
];

const TestimonialsSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      // modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {TestimonialsData.map((person, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center h-full px-16 gap-x-8">
              {/* Avatar, Name, Position */}
              <div className="relative flex flex-col items-center w-full mx-auto xl:justify-center xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mx-auto mt-16 mb-12">
                    <Image src={person.image} width={100} height={100} />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.positon}
                  </div>
                </div>

                {/* Message */}
                <div className="flex before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                  <div className="mb-4">
                    <FaQuoteLeft className="mx-auto text-4xl xl:text-6xl text-white/20 md:m-0" />
                  </div>
                  <div className="xl:text-lg mt-3 w-[80%] text-center md:text-center">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialsSlider;
