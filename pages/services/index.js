import ServiceSlider from "@/components/ServiceSlider";
import React from "react";
import { motion } from "framer-motion";
import { SmoothIn } from "@/animate";

const Service = () => {
  return (
    <div className="flex items-center h-full py-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8">
          {/* Text Section */}
          <div className="text-center flex xl:w-[50vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={SmoothIn("up", 0.2)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="h2 xl:mt-8"
            >
              My services <span className=" text-accent"></span>
            </motion.h2>
            <motion.p
              variants={SmoothIn("up", 0.4)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="mx-auto mb-4 text-black lg:mx-0"
            >
              We bringing the history of your brand to the forefront gives an
              emotional dimension to your visual identity
            </motion.p>
          </div>

          {/* Slider Section */}
          <motion.div
            variants={SmoothIn("down", 0.6)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="w-full xl:max-w-[95%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
