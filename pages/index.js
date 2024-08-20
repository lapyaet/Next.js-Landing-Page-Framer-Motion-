import Avatars from "@/components/Avatars";
import ProjectButton from "@/components/ProjectButton";
import Stack from "@/components/Stack";
import React from "react";

//Framer motion
import { easeInOut, motion } from "framer-motion";
import { SmoothIn } from "@/animate";

const Home = () => {
  return (
    <div className="h-full">
      {/* Left text section */}
      <div className="w-full h-full">
        <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left">
          {/* Stack logo */}
          <motion.div
            variants={SmoothIn("down", 0.2)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="flex justify-center mb-3 xl:justify-start"
          >
            <Stack />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="h1"
            variants={SmoothIn("down", 0.2)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
          >
            Design. Development. <br></br>
            <span className="text-accent">Mastership.</span>
          </motion.h1>

          <motion.p
            variants={SmoothIn("down", 0.3)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="max-w-sm mx-auto text-black xl:max-w-xl xl:mx-0"
          >
            We design and develop exceptional degital products and services ,
            eCommerce, and brand communication solutions.
          </motion.p>

          {/* Project circle button */}
          <div className="relative z-10 justify-center hidden">
            <ProjectButton />
          </div>
          <motion.div
            variants={SmoothIn("down", 0.4)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="hidden"
          >
            <ProjectButton />
          </motion.div>

          {/* Button */}
          <motion.div
            variants={SmoothIn("down", 0.6)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="flex mt-6 gap-x-4"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="flex items-center px-8 overflow-hidden text-white transition-all duration-300 bg-white border rounded-full btn border-black/20 hover:border-accent group"
            />
            <button
              type="submit"
              className="flex-none rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-accent"
            >
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
      {/* Right text section */}

      <div className="w-full h-full">
        <motion.div
          variants={SmoothIn("up", 0.5)}
          initial={"hidden"}
          animate={"show"}
          exit={"hidden"}
          transition={{
            duration: 1,
            ease: easeInOut,
          }}
          className="w-full h-full max-w-[670px] max-h-[720px] absolute top-32 lg:bottom-0 lg:right-[2%]"
        >
          <Avatars />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
