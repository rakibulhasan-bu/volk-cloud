import { TagIcon } from "lucide-react";
import React from "react";
import bg from "../../../public/background.png";

const Banner = () => {
  console.log(bg);
  return (
    <section
      style={{
        background: `linear-gradient(to top,#000000db,#0000003b) ,url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" flex justify-center items-center bg-green-200 min-h-[80vh]"
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className=" text-center space-y-6">
          <p className=" flex gap-1 justify-center">
            <TagIcon className=" text-white" />
            <span className=" font-bold text-lg text-white">
              30- DAY FREE TRIAL
            </span>
          </p>
          <h1 className=" font-bold 2xl:text-4xl text-2xl lg:text-4xl text-white">
            ACCOUNTING SOFTWARE THAT WILL SIMPLIFY YOUR TASKS.
          </h1>
          <p className=" text-center text-lg lg:font-semibold 2xl:font-semibold text-white">
            STREAMLIN, SIMPLIGY, SUCCEED: VOLKCLOUD YOUR VERY OWN COMPREHENSIVE
            ACCOUNTING <br />
            COMPANION FOR SMALL TO MEDIUM BUSINESSES!
          </p>
          <div className="">
            <button className=" font-bold text-lg bg-primaryColor px-6 py-2 rounded-md text-white">
              Try For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
