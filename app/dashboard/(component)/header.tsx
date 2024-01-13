import { Bell, MessageCircleCode } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <section className=" bg-white p-3">
      <div className=" flex justify-between items-center container mx-auto">
        <div className=" w-1/5">
          <h1 className=" text-2xl font-bold">Dashboard</h1>
        </div>
        <div className=" flex justify-end gap-10 items-center text-black w-4/5">
          <div>search</div>
          <div className=" flex items-center gap-2 text-gray-500">
            <MessageCircleCode />
            <Bell />
          </div>

          <div className=" flex items-center gap-4">
            <div className=" text-right">
              <p className=" font-semibold">Monica Volcko</p>
              <p className=" text-sm text-gray-500 font-medium">
                Administrator
              </p>
            </div>
            <img
              className=" rounded-full w-14 h-14 object-cover"
              src="https://imgs.search.brave.com/mxcvBwezjML3L3Cw5NzmL3Fa_Q73aYwG0LQ96TqvdOc/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy53/aGF0c2FwcGltYWdl/cy5pbi93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wOS9HaXJs/LURQLmpwZw"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
