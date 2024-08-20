import Link from "next/link";
import React from "react";
import {
  RiBubbleChartFill,
  RiDribbbleFill,
  RiMessengerFill,
  RiPatreonFill,
  RiWhatsappFill,
  RiYuqueFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center text-lg text-black gap-x-5">
      <Link className="transition-all duration-300 hover:text-accent" href={""}>
        <RiBubbleChartFill />
      </Link>
      <Link className="transition-all duration-300 hover:text-accent" href={""}>
        <RiDribbbleFill />
      </Link>
      <Link className="transition-all duration-300 hover:text-accent" href={""}>
        <RiMessengerFill />
      </Link>
      <Link className="transition-all duration-300 hover:text-accent" href={""}>
        <RiPatreonFill />
      </Link>
      <Link className="transition-all duration-300 hover:text-accent" href={""}>
        <RiWhatsappFill />
      </Link>
      <Link className="transition-all duration-300 hover:text-accent" href={""}>
        <RiYuqueFill />
      </Link>
    </div>
  );
};

export default Socials;
