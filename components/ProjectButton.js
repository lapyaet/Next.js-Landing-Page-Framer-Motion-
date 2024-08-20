import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";

const ProjectButton = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[180px] h-[180px] flex justify-center items-center group"
      >
        <Image
          src={"/rounded-text.png"}
          width={140}
          height={148}
          className="w-full h-full max-w-[140px] max-h-[148px] animate-spin-slow"
        />
        <HiArrowRight className="absolute text-4xl transition-all duration-300 -rotate-90 group-hover:rotate-0" />
      </Link>
    </div>
  );
};

export default ProjectButton;
