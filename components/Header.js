import React from "react";

//Link
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 flex items-center w-full px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-8 gap-y-6">
          <Link href={"/"}>
            <Image src={"/logo.svg"} width={220} height={48} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
