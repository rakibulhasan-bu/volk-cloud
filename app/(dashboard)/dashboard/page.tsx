import React from "react";
import Header from "../../../components/Dashborad-compo/header";
import {
  MessageSquareMoreIcon,
  PanelLeftDashed,
  Pin,
  Stethoscope,
} from "lucide-react";
import Chart from "../../../components/Dashborad-compo/chart";

const Dashboard = () => {
  return (
    <section className=" bg-zinc-100">
      <Header />
      <div className=" lg:flex justify-center  gap-5 p-5">
        <div className=" flex flex-col gap-5 lg:w-1/2">
          <div className="bg-white p-6 rounded-2xl">
            <h2 className=" font-semibold text-lg mb-5">My Saved Chart</h2>
            <div className=" flex items-center justify-between gap-4 mb-5">
              <div className=" flex items-center gap-2">
                <div className=" bg-primaryColor rounded-full p-2">
                  <Pin color=" silver" />
                </div>
                <div>
                  <h4 className=" text-xl font-bold">Appointment / Contact</h4>
                  <span className=" text-primaryColor">
                    1 month ago, 1 Region, 1 Company
                  </span>
                </div>
              </div>
              <div>40%</div>
            </div>
            <div className=" flex items-center justify-between gap-4 mb-5">
              <div className=" flex items-center gap-2">
                <div className=" bg-primaryColor rounded-full p-2">
                  <Stethoscope color=" silver" />
                </div>
                <div>
                  <h4 className=" text-xl font-bold">Appointment / Contact</h4>
                  <span className=" text-primaryColor">
                    1 month ago, 1 Region, 1 Company
                  </span>
                </div>
              </div>
              <div>40%</div>
            </div>
            <div className=" flex items-center justify-between gap-4 mb-5">
              <div className=" flex items-center gap-2">
                <div className=" bg-primaryColor rounded-full p-2">
                  <Pin color=" silver" />
                </div>
                <div>
                  <h4 className=" text-xl font-bold">Appointment / Contact</h4>
                  <span className=" text-primaryColor">
                    1 month ago, 1 Region, 1 Company
                  </span>
                </div>
              </div>
              <div>40%</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <h2 className=" font-semibold text-lg mb-5">Bar chart</h2>
            <Chart />
          </div>
        </div>

        <div className=" flex flex-col gap-5 lg:w-1/2">
          <div className="bg-white p-6 rounded-2xl">
            <h2 className=" font-semibold text-lg mb-5">Advance Statistic</h2>
            <div>
              <div className=" flex items-center justify-between gap-4 mb-5">
                <div className=" flex items-center gap-2">
                  <div className=" bg-primaryColor rounded-full p-2">
                    <PanelLeftDashed color=" silver" />
                  </div>
                  <div>
                    <h4 className=" text-xl font-bold">Task A</h4>
                    <span className=" text-primaryColor">+ $ 200.00</span>
                  </div>
                </div>
                <div>On progress</div>
              </div>
              <div className=" flex items-center justify-between gap-4 mb-5">
                <div className=" flex items-center gap-2">
                  <div className=" bg-primaryColor rounded-full p-2">
                    <PanelLeftDashed color=" silver" />
                  </div>
                  <div>
                    <h4 className=" text-xl font-bold">Task A</h4>
                    <span className=" text-primaryColor">+ $ 200.00</span>
                  </div>
                </div>
                <div>On progress</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <h2 className=" font-semibold text-lg mb-5">By Country</h2>
            <img
              src="https://imgs.search.brave.com/aYTLUNfVLZQP9cudNq_82ZTMY9x3Bs7_axRiIHewYwY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nZW9s/b2d5LmNvbS93b3Js/ZC9tYXAvbWFwLW9m/LXRoZS11bml0ZWQt/c3RhdGVzLW9mLWFt/ZXJpY2EuZ2lm.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
