import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileMenu = () => {
  const pathname = usePathname();
  const navlinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/features",
      title: "Features",
    },
    {
      path: "/login",
      title: "Login",
    },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
  ];
  return (
    <ul className="bg-white px-7 py-5 rounded-xl text-left z-10 space-y-4 backdrop-blur-2xl">
      {navlinks.map(({ path, title }) => (
        <li key={path} className=" relative group nav-link">
          <Link
            className={`${
              pathname === path
                ? "text-primaryColor font-bold text-base"
                : "font-bold text-secondaryColor group-hover:text-primaryColor duration-300 text-base"
            }`}
            href={path}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
