import React, { Component } from "react";

import Chart from "../components/charts/ApexChart";

import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="mt-28 lg:ml-76 ml-4 mr-4 mb-6">
        <div className="container mx-auto">
          <div className="" data-aos="fade-right">
            <h1 className="text-3xl font-bold">Hello Maulana</h1>
            <h5 className=" text-lg text-gray-400">Welcome back!</h5>
          </div>

          <div class="md:grid md:grid-cols-5 md:gap-4 mt-6">
            <div className="col-span-3" data-aos="fade-up" data-aos-delay="100">
              <Chart />
            </div>
            <div
              className=" col-span-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className=" bg-slPurple shadow-inner w-full h-90 md:h-full rounded-2xl bg-opacity-30 mt-4 md:mt-0">
                <div className="flex h-full">
                  <div className="flex items-center justify-center w-1/2">
                    <div className="visits text-center">
                      <div className=" bg-slPurple text-7xl text-white flex items-center justify-center rounded-full w-28 h-28">
                        <FaIcons.FaRegCompass />
                      </div>
                      <h5 className="  text-base mt-8 text-gray-500">
                        Visits /day
                      </h5>
                      <div className="  text-7xl mt-2 font-bold">63</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-1/2">
                    <div className="visits ">
                      <div className=" bg-slPurple text-7xl text-white flex items-center justify-center rounded-full w-28 h-28">
                        <HiIcons.HiDownload />
                      </div>
                      <h5 className="  text-base mt-8 text-gray-500">
                        Download /week
                      </h5>
                      <div className="  text-7xl mt-2 font-bold">600</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 mt-6">
            <div
              className=" bg-blue-800 w-full h-60 rounded-2xl py-8 px-6 bg-opacity-20 shadow-inner"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative">
                <h3 className="font-bold text-2xl">Website</h3>
                <p className=" font-semibold text-lg text-slPurple">
                  Total Download
                </p>
                <div className=" bg-slPurple rounded-full w-10 h-10 flex items-center justify-center text-white text-xl absolute top-0 right-0">
                  <HiIcons.HiDownload />
                </div>
                <div className="text-7xl font-bold text-center mt-6">300</div>
              </div>
            </div>

            <div
              className=" bg-blue-100 w-full h-60 rounded-2xl py-8 px-6 bg-opacity-20 shadow-inner mt-4 md:mt-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative">
                <h3 className="font-bold text-2xl">Mobile Apps</h3>
                <p className=" font-semibold text-lg text-slPurple">
                  Total Download
                </p>
                <div className=" bg-slPurple rounded-full w-10 h-10 flex items-center justify-center text-white text-xl absolute top-0 right-0">
                  <HiIcons.HiDownload />
                </div>
                <div className="text-7xl font-bold text-center mt-6">120</div>
              </div>
            </div>

            <div
              className=" bg-slBrawn w-full h-60 rounded-2xl py-8 px-6 bg-opacity-20 shadow-inner mt-4 md:mt-0"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="relative">
                <h3 className="font-bold text-2xl">Desktop</h3>
                <p className=" font-semibold text-lg text-slPurple">
                  Total Download
                </p>
                <div className=" bg-slPurple rounded-full w-10 h-10 flex items-center justify-center text-white text-xl absolute top-0 right-0">
                  <HiIcons.HiDownload />
                </div>
                <div className="text-7xl font-bold text-center mt-6">80</div>
              </div>
            </div>

            <div
              className=" bg-slPurple-light w-full h-60 rounded-2xl py-8 px-6 bg-opacity-90 shadow-inner mt-4 md:mt-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="relative">
                <h3 className="font-bold text-2xl">Arduino</h3>
                <p className=" font-semibold text-lg text-slPurple">
                  Total Download
                </p>
                <div className=" bg-slPurple rounded-full w-10 h-10 flex items-center justify-center text-white text-xl absolute top-0 right-0">
                  <HiIcons.HiDownload />
                </div>
                <div className="text-7xl font-bold text-center mt-6">150</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
