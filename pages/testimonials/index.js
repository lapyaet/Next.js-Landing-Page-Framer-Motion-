import TestimonialsSlider from "@/components/TestimonialsSlider";
import React from "react";
import { motion } from "framer-motion";
import { SmoothIn } from "@/animate";

const Testimonials = () => {
  return (
    <div className="h-full text-center py-36">
      <div className="container flex flex-col justify-center h-full mx-auto">
        {/* Title */}
        <motion.h2
          variants={SmoothIn("up", 0.2)}
          initial={"hidden"}
          animate={"show"}
          exit={"hidden"}
          className="mb-8 h2 xl:mb-0"
        >
          Testimonials<span className="text-accent">.</span>
        </motion.h2>

        {/* Slider */}
        <motion.div
          variants={SmoothIn("up", 0.4)}
          initial={"hidden"}
          animate={"show"}
          exit={"hidden"}
        >
          <TestimonialsSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
