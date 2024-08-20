import React from "react";
import Image from "next/image";

const Avatars = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/art.png"}
        width={670}
        height={700}
        alt=""
        className="w-full h-full translate-z-0"
      />
    </div>
  );
};

export default Avatars;
