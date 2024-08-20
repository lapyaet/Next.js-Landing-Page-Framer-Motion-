import React from "react";
import { animate, motion } from "framer-motion";

//Creating Variants
const transionAnimation = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transitions = () => {
  return (
    <>
      <motion.div
        variants={transionAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="fixed w-screen h-screen z-30 bg-[#ffffff] right-full top-0 bottom-0"
      ></motion.div>
      <motion.div
        variants={transionAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="fixed w-screen h-screen z-20 bg-[#f16324] right-full top-0 bottom-0"
      ></motion.div>
      <motion.div
        variants={transionAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="fixed w-screen h-screen z-10 bg-[#000] right-full top-0 bottom-0"
      ></motion.div>
    </>
  );
};

export default Transitions;
