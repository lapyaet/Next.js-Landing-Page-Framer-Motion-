import Socials from "@/components/Socials";
import React from "react";
import AvatarPerson from "@/components/AvatarPerson";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { SmoothIn } from "@/animate";

const About = () => {
  return (
    <div className="h-full py-32 text-center xl:text-left">
      <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6">
        {/* Left side content */}
        <div className="flex flex-col justify-center flex-1">
          <motion.h2
            className="h2"
            variants={SmoothIn("right", 0.2)}
            initial={"hidden"}
            animate="show"
            exit={"hidden"}
          >
            A <span className="text-accent">Profolio</span> writer makes big
            differ.
          </motion.h2>

          <motion.p
            variants={SmoothIn("right", 0.4)}
            initial={"hidden"}
            animate="show"
            exit={"hidden"}
            className="max-w-[500px] mx-auto xl:mx-0 text-black mb-3 xl:mb-6 px-2 xl:px-0"
          >
            Highly creative strategic media and techonology leader. speaker and
            advisor who has recevied wide industry recoginition for his impact
            including being top executives at forties500.
          </motion.p>

          <motion.div
            variants={SmoothIn("right", 0.6)}
            initial={"hidden"}
            animate="show"
            exit={"hidden"}
          >
            <div className="flex justify-center lg:justify-start">
              <Socials />
            </div>
          </motion.div>
        </div>
        {/* Right side content */}
        <motion.div
          variants={SmoothIn("left", 0.4)}
          initial={"hidden"}
          animate="show"
          exit={"hidden"}
          className="flex flex-col w-full xl:max-w-[48%]"
        >
          <div className="flex mx-auto gap-x-4 xl:gap-x-8 xl:mx-0">
            <AvatarPerson />
          </div>

          {/* Count up Experience */}
          <div className="absolute z-20 flex justify-center flex-1 p-5 mt-16 rounded-full bg-white/90">
            <div className="text-2xl font-extrabold xl:text-4xl text-accent">
              <CountUp start={0} end={4} duration={5} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Years of Experience
            </div>
          </div>

          {/* Count up Projects */}
          <div className="absolute z-20 flex justify-center flex-1 p-5 rounded-full mt-80 ms-96 bg-white/90">
            <div className="text-2xl font-extrabold xl:text-4xl text-accent">
              <CountUp start={0} end={6} duration={5} />K
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Finished Projects
            </div>
          </div>

          {/* Count up Awards*/}
          <div className="absolute z-20 flex justify-center flex-1 p-5 rounded-full mt-96 ms-18 bg-white/90">
            <div className="text-2xl font-extrabold xl:text-4xl text-accent">
              <CountUp start={0} end={3} duration={5} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Finished Projects
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
