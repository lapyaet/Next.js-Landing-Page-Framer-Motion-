import React from "react";

//React Icons
import {
  HiAcademicCap,
  HiHomeModern,
  HiMegaphone,
  HiMiniBriefcase,
  HiMiniCube,
  HiRocketLaunch,
} from "react-icons/hi2";

//next link
import Link from "next/link";

//next router
import { useRouter } from "next/router";

//Navication Data
export const navigationData = [
  { name: "home", path: "/", icon: <HiHomeModern /> },
  { name: "about", path: "/about", icon: <HiAcademicCap /> },
  { name: "services", path: "/services", icon: <HiMiniCube /> },
  { name: "work", path: "/work", icon: <HiMiniBriefcase /> },
  { name: "testimonials", path: "/testimonials", icon: <HiMegaphone /> },
  { name: "contact", path: "/contact", icon: <HiRocketLaunch /> },
];

const Nav = () => {
  const router = useRouter();
  const pathpame = router.pathname;
  return (
    <nav className="fixed bottom-0 flex flex-col items-center mt-auto xl:justify-center gap-y-4 h-max xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* menu enter section */}
      <div className="flex items-center justify-between px-4 xl:flex-col xl:justify-center gap-y-10 md:px-40 xl:px-0 h-[80px] bg-slate-200 xl:h-max py-8 text-3xl xl:text-xl xl:rounded-full w-full backdrop-blur-sm">
        {navigationData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathpame && "text-accent"
            } relative flex items-center hover:text-accent duration-300 group transition-all`}
          >
            {/* Tooltips */}
            <div className="absolute left-0 hidden pl-12 transition-all duration-300 xl:group-hover:flex">
              <div className="relative flex items-center px-4 py-2 text-white rounded-full bg-accent">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
              </div>
            </div>

            {/* nav icons */}
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
