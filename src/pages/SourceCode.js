import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
// import * as MdIcons from "react-icons/md";

import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

import imgProject1 from "../img/project-overview1.jpg";

export default function SourceCode() {
  const [showModal, setShowModal] = useState(false);
  const [showModalLg, setShowModalLg] = useState(false);

  const setShowModalCode = () => setShowModal(!showModal);
  const setShowModalCodeLg = () => setShowModalLg(!showModalLg);

  return (
    <div className=" mt-28 lg:ml-90 ml-4 mr-4 mb-6 ">
      <div className="container mx-auto">
        <div data-aos="zoom-in" className="md:flex md:justify-between">
          <div className="flex items-center justify-between">
            <h1 className=" text-3xl font-bold">Source Code</h1>
            <Link
              to="/source-code/add-data"
              className=" md:ml-6 lg:ml-10 bg-slGreen py-2 px-4 rounded-md text-slWhite hover:bg-slGreen-dark transition-all duration-500 hover:shadow-md"
            >
              <FaIcons.FaPlus />
            </Link>
          </div>
          <div className="flex justify-between items-center md:w-5/12 sm:w-4/12 ">
            <span class="text-gray-400  md:text-sm lg:text-base ">
              Select Filter:
            </span>
            <div className="md:w-34 w-3/4 relative">
              <select class="appearance-none form-select block text-gray-400 border border-gray-200 py-2 px-2 focus:shadow focus:outline-none rounded-md w-full ">
                <option value="">All</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
                <option value="java script">Java Script</option>
              </select>
              {/* <MdIcons.MdInfoOutline className="absolute top-2 right-2 text-gray-400 text-2xl" /> */}
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
          <div className="item-link" data-aos="fade-up">
            <div className=" shadow-xl rounded-xl px-2">
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
                      <button
                        type="button"
                        onClick={(e) => setShowModalCodeLg(true)}
                        className=" text-2xl text-center text-gray-400 hover:text-slWhite"
                      >
                        <abbr title="Detail">
                          <FaIcons.FaEye />
                        </abbr>
                      </button>
                    </div>
                    <div className="mt-4 flex  w-full">
                      <Link
                        to="/source-code/edit-data"
                        className="text-gray-400  hover:text-slBlue text-2xl px-6"
                      >
                        <abbr title="Edit">
                          <FaIcons.FaEdit />
                        </abbr>
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => setShowModalCode(true)}
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <abbr title="Delete">
                          <FaIcons.FaTrashAlt />
                        </abbr>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className=" flex justify-center items-center ">
                <div className="flex justify-around w-full my-4">
                  <Link
                    to="/source-code/add-video"
                    className="bg-slCyan py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slCyan-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Video
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className=" bg-slPurple py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slPurple-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block mx-2 lg:mx-0"
                  >
                    Add e-Book
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className="bg-slWhite py-2 px-4 text-slPurple rounded-md shadow-sm hover:shadow-lg hover:bg-slWhite-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Document
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item-link" data-aos="fade-up">
            <div className=" shadow-xl rounded-xl px-2">
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
                      <button
                        type="button"
                        onClick={(e) => setShowModalCodeLg(true)}
                        className=" text-2xl text-center text-gray-400 hover:text-slWhite"
                      >
                        <abbr title="Detail">
                          <FaIcons.FaEye />
                        </abbr>
                      </button>
                    </div>
                    <div className="mt-4 flex  w-full">
                      <Link
                        to="/source-code/edit-data"
                        className="text-gray-400  hover:text-slBlue text-2xl px-6"
                      >
                        <abbr title="Edit">
                          <FaIcons.FaEdit />
                        </abbr>
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => setShowModalCode(true)}
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <abbr title="Delete">
                          <FaIcons.FaTrashAlt />
                        </abbr>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className=" flex justify-center items-center ">
                <div className="flex justify-around w-full my-4">
                  <Link
                    to="/source-code/add-video"
                    className="bg-slCyan py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slCyan-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Video
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className=" bg-slPurple py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slPurple-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block mx-2 lg:mx-0"
                  >
                    Add e-Book
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className="bg-slWhite py-2 px-4 text-slPurple rounded-md shadow-sm hover:shadow-lg hover:bg-slWhite-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Document
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item-link" data-aos="fade-up">
            <div className=" shadow-xl rounded-xl px-2">
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
                      <button
                        type="button"
                        onClick={(e) => setShowModalCodeLg(true)}
                        className=" text-2xl text-center text-gray-400 hover:text-slWhite"
                      >
                        <abbr title="Detail">
                          <FaIcons.FaEye />
                        </abbr>
                      </button>
                    </div>
                    <div className="mt-4 flex  w-full">
                      <Link
                        to="/source-code/edit-data"
                        className="text-gray-400  hover:text-slBlue text-2xl px-6"
                      >
                        <abbr title="Edit">
                          <FaIcons.FaEdit />
                        </abbr>
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => setShowModalCode(true)}
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <abbr title="Delete">
                          <FaIcons.FaTrashAlt />
                        </abbr>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className=" flex justify-center items-center ">
                <div className="flex justify-around w-full my-4">
                  <Link
                    to="/source-code/add-video"
                    className="bg-slCyan py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slCyan-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Video
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className=" bg-slPurple py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slPurple-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block mx-2 lg:mx-0"
                  >
                    Add e-Book
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className="bg-slWhite py-2 px-4 text-slPurple rounded-md shadow-sm hover:shadow-lg hover:bg-slWhite-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Document
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item-link" data-aos="fade-up">
            <div className=" shadow-xl rounded-xl px-2">
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
                      <button
                        type="button"
                        onClick={(e) => setShowModalCodeLg(true)}
                        className=" text-2xl text-center text-gray-400 hover:text-slWhite"
                      >
                        <abbr title="Detail">
                          <FaIcons.FaEye />
                        </abbr>
                      </button>
                    </div>
                    <div className="mt-4 flex  w-full">
                      <Link
                        to="/source-code/edit-data"
                        className="text-gray-400  hover:text-slBlue text-2xl px-6"
                      >
                        <abbr title="Edit">
                          <FaIcons.FaEdit />
                        </abbr>
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => setShowModalCode(true)}
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <abbr title="Delete">
                          <FaIcons.FaTrashAlt />
                        </abbr>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className=" flex justify-center items-center ">
                <div className="flex justify-around w-full my-4">
                  <Link
                    to="/source-code/add-video"
                    className="bg-slCyan py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slCyan-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Video
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className=" bg-slPurple py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slPurple-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block mx-2 lg:mx-0"
                  >
                    Add e-Book
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className="bg-slWhite py-2 px-4 text-slPurple rounded-md shadow-sm hover:shadow-lg hover:bg-slWhite-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Document
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="item-link" data-aos="fade-up">
            <div className=" shadow-xl rounded-xl px-2">
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
                      <button
                        type="button"
                        onClick={(e) => setShowModalCodeLg(true)}
                        className=" text-2xl text-center text-gray-400 hover:text-slWhite"
                      >
                        <abbr title="Detail">
                          <FaIcons.FaEye />
                        </abbr>
                      </button>
                    </div>
                    <div className="mt-4 flex  w-full">
                      <Link
                        to="/source-code/edit-data"
                        className="text-gray-400  hover:text-slBlue text-2xl px-6"
                      >
                        <abbr title="Edit">
                          <FaIcons.FaEdit />
                        </abbr>
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => setShowModalCode(true)}
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <abbr title="Delete">
                          <FaIcons.FaTrashAlt />
                        </abbr>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className=" flex justify-center items-center ">
                <div className="flex justify-around w-full my-4">
                  <Link
                    to="/source-code/add-video"
                    className="bg-slCyan py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slCyan-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Video
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className=" bg-slPurple py-2 px-4 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-slPurple-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block mx-2 lg:mx-0"
                  >
                    Add e-Book
                  </Link>
                  <Link
                    to="/source-code/add-video"
                    className="bg-slWhite py-2 px-4 text-slPurple rounded-md shadow-sm hover:shadow-lg hover:bg-slWhite-dark transition-all duration-500 uppercase transform hover:-translate-y-1 hover:scale-110 text-sm text-center block"
                  >
                    Add Document
                  </Link>
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
