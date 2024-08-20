import Image from "next/image";
import React from "react";

const AvatarPerson = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/hero.png"}
        width={950}
        height={980}
        alt="hero"
        className="w-full h-full transition-z-0"
      />
    </div>
  );
};

export default AvatarPerson;
