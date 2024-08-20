import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Image from "next/image";
// import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb5.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb5.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      className=" h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-3 gap-4 cursor-pointer ">
            {item.images.map((image, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center overflow-hidden rounded-lg "
              >
                <div className="group">
                  <Image src={image.path} width={500} height={300} alt="" />

                  <div className="absolute bottom-0 right-0 flex-col items-center justify-end gap-8 p-6 text-xl transition duration-300 ease-in-out translate-y-full bg-white/90 w-96 from-transparent to-black group-hover:translate-y-0">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title 1*/}
                      <div className="delay-100">MY</div>
                      {/* title 2 */}
                      <div className=" translate-y-[300%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        WORKS
                      </div>
                      {/* icons */}
                      <div className="text-xl translate-y-[300%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
