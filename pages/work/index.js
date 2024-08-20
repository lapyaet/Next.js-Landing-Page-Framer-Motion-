import WorkSlider from "@/components/WorkSlider";
import React from "react";
import { motion } from "framer-motion";
import { SmoothIn } from "@/animate";

const Work = () => {
  return (
    <div className="flex items-center h-full py-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8">
          {/* Text Section */}
          <div className="text-center flex xl:w-[60vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={SmoothIn("up", 0.2)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="h2"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={SmoothIn("up", 0.4)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="mx-auto mb-4 text-black lg:mx-0"
            >
              It's a small agency. We help businesses elevate their value
              through custom software development, product design, QA and
              consultancy services. We will help you to ideate, design and
              implement your product from conception to iderative.
            </motion.p>
          </div>

          {/* Work Slider Section */}
          <motion.div
            variants={SmoothIn("down", 0.6)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
