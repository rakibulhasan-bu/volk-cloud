import { Button } from "@/components/ui/button";
import React from "react";

const FeaturePage = () => {
  return (
    <section>
      <div className=" container mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3">
          <div className=" text-center">
            <div>
              <img src="" alt="" />
            </div>
            <p>
              We love craete experience that enable people to connect, express
              themeselves and establish meaningfull relationships
            </p>
            <Button>Learn more</Button>
          </div>
          <div className=" text-center">
            <div>
              <img src="" alt="" />
            </div>
            <p>
              We love craete experience that enable people to connect, express
              themeselves and establish meaningfull relationships
            </p>
            <Button>Learn more</Button>
          </div>
          <div className=" text-center">
            <div>
              <img src="" alt="" />
            </div>
            <p>
              We love craete experience that enable people to connect, express
              themeselves and establish meaningfull relationships
            </p>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;
