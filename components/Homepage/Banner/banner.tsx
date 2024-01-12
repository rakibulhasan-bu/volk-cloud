import { TagIcon } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <section className=" flex justify-center items-center bg-sky-200 h-[60vh]">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className=" text-center space-y-6">
          <p className=" flex gap-1 justify-center">
            <TagIcon />{" "}
            <span className=" font-bold text-lg text-secondaryColor">
              30- DAY FREE TRIAL
            </span>
          </p>
          <h1 className=" font-black text-4xl text-secondaryColor">
            ACCOUNTING SOFTWARE THAT WILL SIMPLIFY YOUR TASKS.
          </h1>
          <p className=" text-center text-lg font-bold text-secondaryColor">
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
