import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

import imgProject1 from "../img/project-overview1.jpg";

export default class SourceCode extends Component {
  render() {
    return (
      <div className=" mt-28 ml-90">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h1 className=" md:text-base lg:text-xl font-bold">Source Code</h1>
            <Link
              to="/source-code-add"
              className="ml-1 md:ml-4 lg:ml-10 bg-slGreen py-2 px-4 rounded-md text-slWhite hover:opacity-60"
            >
              <FaIcons.FaPlus />
            </Link>
          </div>
          <div className="flex items-center md:w-5/12 lg:w-3/12 ">
            <span class="text-gray-400 mr-2 md:text-sm lg:text-base ">
              Select Filter:
            </span>
            <div className="md:w-6/12 lg:w-8/12 relative">
              <select class="form-select block text-gray-400 border border-gray-200 py-2 px-2 focus:shadow focus:outline-none rounded-md w-full appearance-none">
                <option value="">All</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
                <option value="java script">Java Script</option>
              </select>
              <MdIcons.MdInfoOutline className="absolute top-2 right-2 text-gray-400 text-2xl" />
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
          <Link to="#" className="item-link">
            <div className=" ">
              <h4 className="uppercase md:text-md lg:text-lg text-center mb-2">
                Python-mini-projects
              </h4>

              <div className=" w-full overflow-hidden rounded relative ">
                <img
                  src={imgProject1}
                  alt=""
                  className="object-cover object-center w-full h-full block"
                />
                <div className="btn absolute top-0 w-full h-full flex justify-center items-center bg-gray-800 opacity-0 hover:opacity-80 transition-opacity duration-1000 ">
                  <form
                    action=""
                    className=" block justify-center items-center"
                  >
                    <div className="flex justify-center">
                      <a
                        href="/detail-project"
                        className=" text-2xl text-center text-gray-400 hover:text-slGreen"
                      >
                        <FaIcons.FaEye />
                      </a>
                    </div>
                    <div className="mt-4 flex  w-full">
                      <a
                        href="/edit-project"
                        className="text-gray-400  hover:text-slBlue text-2xl px-6"
                      >
                        <FaIcons.FaEdit />
                      </a>
                      <a
                        href="/delete-project"
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <FaIcons.FaTrashAlt />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
