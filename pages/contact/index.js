import React from "react";
import { BsArrowRight } from "react-icons/bs";

// Animation
import { motion } from "framer-motion";
import { SmoothIn } from "@/animate";

const Contact = () => {
  return (
    <div className="h-full">
      <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
        <div className="flex flex-col w-full max-w-[720px]">
          <motion.h2
            variants={SmoothIn("up", 0.2)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="mb-12 text-center h2"
          >
            Let's <span className=" text-accent">talk</span> with experience
            advicors.
          </motion.h2>

          {/* form */}
          <motion.form
            variants={SmoothIn("up", 0.2)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="flex flex-col flex-1 w-full gap-6 mx-auto"
          >
            {/* input field */}
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>

            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="Mobile No." className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>

            <input type="text" placeholder="subject" className="input" />
            <textarea className="textarea" placeholder="message"></textarea>

            <button className="btn rounded-full bg-accent text-white border border-black/20 max-w-[175px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's Talk
              </span>
              <BsArrowRight className=" -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
