import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <section className=" py-10">
      <div className=" container mx-auto">
        <h1 className=" font-bold text-xl text-secondaryColor text-center mb-8">
          Feature Overview
        </h1>
        <div className=" flex flex-col lg:flex-row 2xl:flex-row justify-center items-center mb-8 gap-10">
          <div className=" flex items-center flex-col gap-3 p-5">
            <img
              width="90"
              height="90"
              src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-headphones-multimedia-smashingstocks-detailed-outline-smashing-stocks.png"
            />
            <p className=" font-bold text-center">CLAIM YOUR DUES</p>
          </div>
          <div className=" flex items-center flex-col gap-3 p-5">
            <img
              width="90"
              height="90"
              src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-headphones-multimedia-smashingstocks-detailed-outline-smashing-stocks.png"
            />
            <p className=" font-bold text-center">24/7 UNLIMITED SUPPORT</p>
          </div>
          <div className=" flex items-center flex-col gap-3 p-5">
            <img
              width="90"
              height="90"
              src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-headphones-multimedia-smashingstocks-detailed-outline-smashing-stocks.png"
            />
            <p className=" font-bold text-center">CREATE AND SEND INVOICES</p>
          </div>
          <div className=" flex items-center flex-col gap-3 p-5">
            <img
              width="90"
              height="90"
              src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-headphones-multimedia-smashingstocks-detailed-outline-smashing-stocks.png"
            />
            <p className=" font-bold text-center">
              DOMESTIC REVERSE CHARGES VAT
            </p>
          </div>
          <div className=" flex items-center flex-col gap-3 p-5">
            <img
              width="90"
              height="90"
              src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-headphones-multimedia-smashingstocks-detailed-outline-smashing-stocks.png"
            />
            <p className=" font-bold text-center">REPORTING</p>
          </div>
        </div>
        <div className=" text-center">
          <Link href={'/features'} className=" font-bold text-lg bg-primaryColor px-6 py-2 rounded-md text-white">
            All Features <ArrowRightCircle className=" inline-block ml-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
