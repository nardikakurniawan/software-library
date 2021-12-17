import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
// import * as MdIcons from "react-icons/md";

import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

import imgProject1 from "../img/project-overview1.jpg";

export default function SourceCode() {
  const [showModal, setShowModal] = useState(false);
  const [showModalLg, setShowModalLg] = useState(false);

  const setShowModalCode = () => setShowModal(!showModal);
  const setShowModalCodeLg = () => setShowModalLg(!showModalLg);

  const buttonRefDetail = useRef();
  const buttonRefAdd = useRef();

  return (
    <div className="mt-28 lg:ml-90 ml-4 mr-4 mb-6">
      <div className="container mx-auto">
        <div data-aos="fade-right" className="md:flex md:justify-between">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Source Code</h1>
            <Link
              ref={buttonRefAdd}
              to="/source-code/add-data"
              className=" md:ml-6 lg:ml-10 bg-slGreen py-2 px-4 rounded-md text-slWhite hover:bg-slGreen-dark transition-all duration-500 hover:shadow-md"
            >
              <FaIcons.FaPlus />
            </Link>
            <Tooltips placement="right" ref={buttonRefAdd}>
              <TooltipsContent>Add Source Code</TooltipsContent>
            </Tooltips>
          </div>
          <div className="flex justify-between items-center md:w-5/12 sm:w-4/12 ">
            <span class="text-gray-400  md:text-sm lg:text-base ">
              Select Filter:
            </span>
            <div className="md:w-34 w-3/4 relative">
              <select class="form-select  text-gray-400 border border-gray-200 py-2 px-2 focus:shadow outline-none focus:outline-purple rounded-md w-full ">
                <option value="">All</option>
                <option value="website">Website</option>
                <option value="mobile">Mobile Apps</option>
                <option value="desktop">Desktop</option>
              </select>
              {/* <MdIcons.MdInfoOutline className="absolute top-2 right-2 text-gray-400 text-2xl" /> */}
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
          <div className="item-link" data-aos="fade-up">
            <div className=" shadow-xl rounded-xl p-2" data-aos="fade-up">
              <h4 className="uppercase text-lg text-slPurple font-bold text-center mb-2">
                Python-mini-projects
              </h4>

              <div className="w-full overflow-hidden rounded relative ">
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
                      <Link
                        to="/source-code/detail"
                        ref={buttonRefDetail}
                        className=" text-4xl text-center text-gray-400 hover:text-yellow-600 transition-all duration-700"
                      >
                        <FaIcons.FaEye />
                      </Link>

                      <Tooltips placement="top" ref={buttonRefDetail}>
                        <TooltipsContent>Detail Source Code</TooltipsContent>
                      </Tooltips>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="item-link" data-aos="fade-up" data-aos-delay="100">
            <div className=" shadow-xl rounded-xl p-2" data-aos="fade-up">
              <h4 className="uppercase text-lg text-slPurple font-bold text-center mb-2">
                Python-mini-projects
              </h4>

              <div className="w-full overflow-hidden rounded relative ">
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
                      <Link
                        to="/source-code/detail"
                        ref={buttonRefDetail}
                        className=" text-4xl text-center text-gray-400 hover:text-yellow-600 transition-all duration-700"
                      >
                        <FaIcons.FaEye />
                      </Link>

                      <Tooltips placement="top" ref={buttonRefDetail}>
                        <TooltipsContent>Detail Source Code</TooltipsContent>
                      </Tooltips>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="item-link" data-aos="fade-up" data-aos-delay="200">
            <div className=" shadow-xl rounded-xl p-2" data-aos="fade-up">
              <h4 className="uppercase text-lg text-slPurple font-bold text-center mb-2">
                Python-mini-projects
              </h4>

              <div className="w-full overflow-hidden rounded relative ">
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
                      <Link
                        to="/source-code/detail"
                        ref={buttonRefDetail}
                        className=" text-4xl text-center text-gray-400 hover:text-yellow-600 transition-all duration-700"
                      >
                        <FaIcons.FaEye />
                      </Link>

                      <Tooltips placement="top" ref={buttonRefDetail}>
                        <TooltipsContent>Detail Source Code</TooltipsContent>
                      </Tooltips>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="item-link" data-aos="fade-up" data-aos-delay="300">
            <div className=" shadow-xl rounded-xl p-2" data-aos="fade-up">
              <h4 className="uppercase text-lg text-slPurple font-bold text-center mb-2">
                Python-mini-projects
              </h4>

              <div className="w-full overflow-hidden rounded relative ">
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
                      <Link
                        to="/source-code/detail"
                        ref={buttonRefDetail}
                        className=" text-4xl text-center text-gray-400 hover:text-yellow-600 transition-all duration-700"
                      >
                        <FaIcons.FaEye />
                      </Link>

                      <Tooltips placement="top" ref={buttonRefDetail}>
                        <TooltipsContent>Detail Source Code</TooltipsContent>
                      </Tooltips>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="item-link" data-aos="fade-up" data-aos-delay="400">
            <div className=" shadow-xl rounded-xl p-2" data-aos="fade-up">
              <h4 className="uppercase text-lg text-slPurple font-bold text-center mb-2">
                Python-mini-projects
              </h4>

              <div className="w-full overflow-hidden rounded relative ">
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
                      <Link
                        to="/source-code/detail"
                        ref={buttonRefDetail}
                        className=" text-4xl text-center text-gray-400 hover:text-yellow-600 transition-all duration-700"
                      >
                        <FaIcons.FaEye />
                      </Link>

                      <Tooltips placement="top" ref={buttonRefDetail}>
                        <TooltipsContent>Detail Source Code</TooltipsContent>
                      </Tooltips>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
          <ModalBody>
            <p className=" leading-relaxed text-gray-600 font-bold px-4">
              Are you sure want to delete this Project?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="gray"
              buttonType="link"
              onClick={(e) => setShowModalCode(false)}
              ripple="dark"
            >
              Tidak
            </Button>

            <Button
              color="red"
              onClick={(e) => setShowModalCode(false)}
              ripple="light"
            >
              Ya
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          size="lg"
          active={showModalLg}
          toggler={() => setShowModalLg(false)}
        >
          <ModalHeader toggler={() => setShowModalLg(false)}>
            Details
          </ModalHeader>
          <ModalBody>
            <div className="md:grid md:grid-cols-2 gap-6  md:my-6">
              <div className="w-full rounded-md overflow-hidden shadow-xl">
                <img
                  src={imgProject1}
                  alt=""
                  className="object-cover object-center w-full h-full block"
                />
              </div>

              <div className="mt-6 md:mt-0">
                <h1 className="uppercase font-bold text-4xl">
                  Pyhton-Mini-projects
                </h1>
                <p className="text-base leading-relaxed text-gray-600 font-normal">
                  I always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of
                  themselves! They're slowed down by their perception of
                  themselves. If you're taught you can’t do anything, you won’t
                  do anything. I was taught I could do everything.
                </p>
                <div class="shadow-xl rounded-lg mt-10">
                  <div class="p-5">
                    <table class="table-fixed w-full">
                      <tbody>
                        <tr>
                          <td className="p-2">Code Category</td>
                          <td className="p-2">Website</td>
                        </tr>
                        <tr>
                          <td className="p-2">Link Source</td>
                          <td className="p-2">
                            <a href="https://inilinkproject">
                              <cite>https://inilinkproject</cite>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">Realesed Date</td>
                          <td className="p-2">Sunday, 19-12-2021</td>
                        </tr>
                        <tr>
                          <td className="p-2">Product Version</td>
                          <td className="p-2">Version 1.2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="gray"
              buttonType="link"
              onClick={(e) => setShowModalCodeLg(false)}
              ripple="dark"
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
