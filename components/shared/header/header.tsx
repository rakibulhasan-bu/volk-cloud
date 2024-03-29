"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import logo from "../../../public/logo-removebg-preview.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const userData = localStorage.getItem("user");
  const loggedIn = JSON.parse(userData as string);
  console.log(loggedIn);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navlinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/features",
      title: "Features",
    },
    loggedIn
      ? {
          path: "/dashboard",
          title: "Dashboard",
        }
      : { path: "/login", title: "Login" },
  ];
  return (
    <header className="bg-white z-50 sticky top-0 border border-b-2">
      <nav className="container mx-auto nav flex h-[65px] items-center justify-between px-8 relative">
        <Link className="text-xl lg:text-3xl text-black font-bold" href="/">
          <Image src={logo} width={120} alt="logo" />
        </Link>
        <div className=" hidden lg:block">
          <ul className=" flex gap-10">
            {navlinks.map(({ path, title }) => (
              <li key={path} className="relative group nav-link">
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
        </div>
        <div className=" lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <MenuIcon size={25} /> : <MenuIcon size={25} />}
        </div>
        <div
          className={` absolute duration-300 ease-out ${
            open ? " right-14 top-0" : "right-14 -top-[15rem]"
          }`}
        >
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
