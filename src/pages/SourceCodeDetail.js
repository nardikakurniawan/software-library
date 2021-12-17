import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Modal from "@material-tailwind/react/Modal";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import ModalBody from "@material-tailwind/react/ModalBody";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

import imgProject2 from "../img/project-overview2.jpg";
// import imgProject1 from "../img/project-overview1.jpg";

export default function SourceCodeDetail() {
  const [showModal, setShowModal] = useState(false);
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalDocs, setShowModalDocs] = useState(false);

  const setShowModalCode = () => setShowModal(!showModal);
  const setShowModalCodeVideo = () => setShowModalVideo(!showModalVideo);
  const setShowModalCodeDocs = () => setShowModalDocs(!showModalDocs);

  const buttonBack = useRef();
  const buttonRefDelete = useRef();
  const buttonRefEdit = useRef();
  const buttonRefAdd = useRef();

  return (
    <div className="mt-28 lg:ml-90 ml-4 mr-4 mb-6">
      <div className="container mx-auto">
        <div className="flex items-center" data-aos="fade-right">
          <Link
            to="/source-code"
            ref={buttonBack}
            className=" text-slPurple hover:text-slPurple-dark transition-all duration-500"
          >
            <FaIcons.FaArrowLeft className="text-2xl mr-6" />
          </Link>
          <Tooltips placement="top" ref={buttonBack}>
            <TooltipsContent>Back</TooltipsContent>
          </Tooltips>

          <h1 className="text-3xl font-bold">Details Source Code</h1>
        </div>

        <div className="mt-6">
          <div class="lg:grid lg:grid-cols-2 gap-6">
            <div>
              <div
                className="image rounded-3xl max-h-497 overflow-hidden shadow-xl"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src={imgProject2}
                  alt=""
                  className=" w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <h1
                  className="uppercase text-2xl text-slPurple font-bold mb-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Python-mini-projects
                </h1>
                <h4
                  className=" text-xl text-gray-400"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Website {" | "}
                  <span className="">Sunday, 19-12-2021</span>
                </h4>
                <p
                  className=" text-gray-500 mt-2 text-base text-justify"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis repellat adipisci aspernatur nostrum eligendi
                  quibusdam illo dolores omnis molestiae velit accusamus
                  officiis rerum ea enim facere fugit tempore consectetur,
                  dolorum alias culpa fuga voluptatum distinctio! Minima amet
                  consequuntur eos ipsam corporis totam, laudantium in quia
                  accusantium illum laboriosam tempore necessitatibus! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                  quo. Voluptatem eius voluptatibus quae natus assumenda
                  accusamus et corrupti necessitatibus.
                </p>
              </div>

              <div className="mt-2" data-aos="fade-up" data-aos-delay="600">
                <div className=" text-xl text-slPurple font-semibold">
                  Tools
                </div>
                <span className="text-gray-500 mt-2 text-base">
                  Python, Tailwind, React Js
                </span>
              </div>

              <div className="mt-4 flex">
                <Link
                  ref={buttonRefEdit}
                  to="/source-code/edit-data"
                  className="text-slBlue-light bg-gray-100 py-2 rounded-md  hover:text-slBlue hover:bg-slBlue-light hover:shadow-lg text-2xl px-6 transition-all duration-700 mr-4"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  <FaIcons.FaEdit />
                </Link>
                <Tooltips placement="left" ref={buttonRefEdit}>
                  <TooltipsContent>Edit Source Code</TooltipsContent>
                </Tooltips>

                <button
                  type="button"
                  ref={buttonRefDelete}
                  onClick={(e) => setShowModalCode(true)}
                  className="text-slRed-light bg-gray-100 py-2 rounded-md  hover:text-slRed hover:bg-slRed-light hover:shadow-lg text-2xl px-6 transition-all duration-700"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  <FaIcons.FaTrashAlt />
                </button>
                <Tooltips placement="right" ref={buttonRefDelete}>
                  <TooltipsContent>Delete Source Code</TooltipsContent>
                </Tooltips>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="lg:grid lg:grid-cols-2 gap-6">
            <div className="videos" data-aos="zoom-out" data-aos-delay="1100">
              <div className=" shadow-xl py-2 px-4 rounded-lg ">
                <div className="md:flex md:justify-between">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl text-slPurple font-bold mb-2">
                      Video Tutorial
                    </h1>
                    <Link
                      ref={buttonRefAdd}
                      to="/source-code/add-video"
                      className=" md:ml-6 lg:ml-10 bg-slGreen py-2 px-4 rounded-md text-slWhite hover:bg-slGreen-dark transition-all duration-500 hover:shadow-md"
                    >
                      <FaIcons.FaPlus />
                    </Link>
                    <Tooltips placement="right" ref={buttonRefAdd}>
                      <TooltipsContent>Add Video</TooltipsContent>
                    </Tooltips>
                  </div>

                  <div className="flex justify-between items-center md:w-1/3 sm:w-4/12 relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="block text-slPurple border border-gray-300 py-2 px-2 focus:shadow outline-none focus:border-slPurple focus:outline-purple rounded-md w-full"
                    />
                    <span className=" absolute top-3 right-4 text-gray-400">
                      <FaIcons.FaSearch />
                    </span>
                  </div>
                </div>

                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-2">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full">
                        <thead class=" bg-slPurple h-16 font-bold">
                          <tr>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider"
                            >
                              No
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider"
                            >
                              Video Title
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider "
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">1</div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">
                                Install dan setup awal project
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex w-full">
                                <Link
                                  ref={buttonRefEdit}
                                  to="/source-code/edit-video"
                                  className=" text-slGray  hover:text-slBlue text-2xl mr-4"
                                >
                                  <FaIcons.FaEdit />
                                </Link>
                                <Tooltips placement="left" ref={buttonRefEdit}>
                                  <TooltipsContent>Edit video</TooltipsContent>
                                </Tooltips>

                                <button
                                  type="button"
                                  ref={buttonRefDelete}
                                  onClick={(e) => setShowModalCodeVideo(true)}
                                  className=" text-slGray  hover:text-slRed text-2xl "
                                >
                                  <FaIcons.FaTrashAlt />
                                </button>
                                <Tooltips
                                  placement="right"
                                  ref={buttonRefDelete}
                                >
                                  <TooltipsContent>Hapus Video</TooltipsContent>
                                </Tooltips>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">2</div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">
                                Membuat Navbar Responsive
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex w-full">
                                <Link
                                  ref={buttonRefEdit}
                                  to="/source-code/edit-video"
                                  className=" text-slGray  hover:text-slBlue text-2xl mr-4"
                                >
                                  <FaIcons.FaEdit />
                                </Link>
                                <Tooltips placement="left" ref={buttonRefEdit}>
                                  <TooltipsContent>Edit video</TooltipsContent>
                                </Tooltips>

                                <button
                                  type="button"
                                  ref={buttonRefDelete}
                                  onClick={(e) => setShowModalCodeVideo(true)}
                                  className=" text-slGray  hover:text-slRed text-2xl "
                                >
                                  <FaIcons.FaTrashAlt />
                                </button>
                                <Tooltips
                                  placement="right"
                                  ref={buttonRefDelete}
                                >
                                  <TooltipsContent>Hapus Video</TooltipsContent>
                                </Tooltips>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">3</div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">
                                Membuat Hero
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex w-full">
                                <Link
                                  ref={buttonRefEdit}
                                  to="/source-code/edit-video"
                                  className=" text-slGray  hover:text-slBlue text-2xl mr-4"
                                >
                                  <FaIcons.FaEdit />
                                </Link>
                                <Tooltips placement="left" ref={buttonRefEdit}>
                                  <TooltipsContent>Edit video</TooltipsContent>
                                </Tooltips>

                                <button
                                  type="button"
                                  ref={buttonRefDelete}
                                  onClick={(e) => setShowModalCodeVideo(true)}
                                  className=" text-slGray  hover:text-slRed text-2xl "
                                >
                                  <FaIcons.FaTrashAlt />
                                </button>
                                <Tooltips
                                  placement="right"
                                  ref={buttonRefDelete}
                                >
                                  <TooltipsContent>Hapus Video</TooltipsContent>
                                </Tooltips>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">4</div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">
                                Membuat Features Project
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex w-full">
                                <Link
                                  ref={buttonRefEdit}
                                  to="/source-code/edit-video"
                                  className=" text-slGray  hover:text-slBlue text-2xl mr-4"
                                >
                                  <FaIcons.FaEdit />
                                </Link>
                                <Tooltips placement="left" ref={buttonRefEdit}>
                                  <TooltipsContent>Edit video</TooltipsContent>
                                </Tooltips>

                                <button
                                  type="button"
                                  ref={buttonRefDelete}
                                  onClick={(e) => setShowModalCodeVideo(true)}
                                  className=" text-slGray  hover:text-slRed text-2xl "
                                >
                                  <FaIcons.FaTrashAlt />
                                </button>
                                <Tooltips
                                  placement="right"
                                  ref={buttonRefDelete}
                                >
                                  <TooltipsContent>Hapus Video</TooltipsContent>
                                </Tooltips>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">5</div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">
                                Membuat Footer
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex w-full">
                                <Link
                                  ref={buttonRefEdit}
                                  to="/source-code/edit-video"
                                  className=" text-slGray  hover:text-slBlue text-2xl mr-4"
                                >
                                  <FaIcons.FaEdit />
                                </Link>
                                <Tooltips placement="left" ref={buttonRefEdit}>
                                  <TooltipsContent>Edit video</TooltipsContent>
                                </Tooltips>

                                <button
                                  type="button"
                                  ref={buttonRefDelete}
                                  onClick={(e) => setShowModalCodeVideo(true)}
                                  className=" text-slGray  hover:text-slRed text-2xl "
                                >
                                  <FaIcons.FaTrashAlt />
                                </button>
                                <Tooltips
                                  placement="right"
                                  ref={buttonRefDelete}
                                >
                                  <TooltipsContent>Hapus Video</TooltipsContent>
                                </Tooltips>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-end mt-4 px-10">
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-2xl px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <MdIcons.MdKeyboardArrowLeft />
                  </button>
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    3
                  </button>
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-2xl px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <MdIcons.MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="supporting-documents my-10"
              data-aos="zoom-out"
              data-aos-delay="1100"
            >
              <div className="shadow-xl rounded-lg py-2 px-4">
                <div className="md:flex md:justify-between">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl text-slPurple font-bold mb-2">
                      Supporting Documents
                    </h1>
                    <Link
                      ref={buttonRefAdd}
                      to="/source-code/add-video"
                      className=" md:ml-6 lg:ml-10 bg-slGreen py-2 px-4 rounded-md text-slWhite hover:bg-slGreen-dark transition-all duration-500 hover:shadow-md"
                    >
                      <FaIcons.FaPlus />
                    </Link>
                    <Tooltips placement="right" ref={buttonRefAdd}>
                      <TooltipsContent>Add Documents</TooltipsContent>
                    </Tooltips>
                  </div>

                  <div className="flex justify-between items-center md:w-1/3 sm:w-4/12 relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="block text-slPurple border border-gray-300 py-2 px-2 focus:shadow outline-none focus:border-slPurple focus:outline-purple rounded-md w-full"
                    />
                    <span className=" absolute top-3 right-4 text-gray-400">
                      <FaIcons.FaSearch />
                    </span>
                  </div>
                </div>

                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-2">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
                      <table class="min-w-full">
                        <thead class=" bg-slPurple h-16 font-bold">
                          <tr>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider"
                            >
                              No
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider"
                            >
                              Document Name
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider "
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">1</div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-lg text-gray-900">UAT</div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex w-full">
                                <Link
                                  ref={buttonRefEdit}
                                  to="/source-code/edit-video"
                                  className=" text-slGray  hover:text-slBlue text-2xl mr-4"
                                >
                                  <FaIcons.FaEdit />
                                </Link>
                                <Tooltips placement="left" ref={buttonRefEdit}>
                                  <TooltipsContent>Edit Docs</TooltipsContent>
                                </Tooltips>

                                <button
                                  type="button"
                                  ref={buttonRefDelete}
                                  onClick={(e) => setShowModalCodeDocs(true)}
                                  className=" text-slGray  hover:text-slRed text-2xl "
                                >
                                  <FaIcons.FaTrashAlt />
                                </button>
                                <Tooltips
                                  placement="right"
                                  ref={buttonRefDelete}
                                >
                                  <TooltipsContent>Hapus Docs</TooltipsContent>
                                </Tooltips>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-end mt-4 px-10">
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-2xl px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <MdIcons.MdKeyboardArrowLeft />
                  </button>
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-md px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    3
                  </button>
                  <button
                    class="text-slPurple bg-transparent hover:bg-slPurple hover:text-white active:bg-purple-600 font-bold uppercase text-2xl px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <MdIcons.MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
          <ModalBody>
            <p className=" leading-relaxed text-gray-600 font-bold px-4">
              Are you sure want to delete this Source Code?
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
          size="sm"
          active={showModalVideo}
          toggler={() => setShowModalVideo(false)}
        >
          <ModalBody>
            <p className=" leading-relaxed text-gray-600 font-bold px-4">
              Are you sure want to delete this Video?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="gray"
              buttonType="link"
              onClick={(e) => setShowModalCodeVideo(false)}
              ripple="dark"
            >
              Tidak
            </Button>

            <Button
              color="red"
              onClick={(e) => setShowModalCodeVideo(false)}
              ripple="light"
            >
              Ya
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          size="sm"
          active={showModalDocs}
          toggler={() => setShowModalDocs(false)}
        >
          <ModalBody>
            <p className=" leading-relaxed text-gray-600 font-bold px-4">
              Are you sure want to delete this Document?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="gray"
              buttonType="link"
              onClick={(e) => setShowModalCodeDocs(false)}
              ripple="dark"
            >
              Tidak
            </Button>

            <Button
              color="red"
              onClick={(e) => setShowModalCodeDocs(false)}
              ripple="light"
            >
              Ya
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
