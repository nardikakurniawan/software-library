import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Modal from "@material-tailwind/react/Modal";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import ModalBody from "@material-tailwind/react/ModalBody";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

import * as FaIcons from "react-icons/fa";

export default function SourceCodeAddCategory() {
  const [showModal, setShowModal] = useState(false);

  const setShowModalCode = () => setShowModal(!showModal);

  const buttonBack = useRef();
  const buttonRefDelete = useRef();

  return (
    <div className="mt-28 lg:ml-90 ml-4 mr-4 mb-6">
      <div className="container mx-auto">
        <div className="flex items-center" data-aos="fade-right">
          <Link
            to="/source-code/add-data"
            ref={buttonBack}
            className=" text-slPurple hover:text-slPurple-dark transition-all duration-500"
          >
            <FaIcons.FaArrowLeft className="text-2xl mr-6" />
          </Link>
          <Tooltips placement="top" ref={buttonBack}>
            <TooltipsContent>Back</TooltipsContent>
          </Tooltips>

          <h1 className="text-3xl font-bold">Source Code Add Category</h1>
        </div>

        <div className="md:mt-6 lg:w-1/2">
          <form action="">
            <div
              class=" p-6 rounded-lg shadow-lg bg-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="form-input">
                <div className="flex justify-between items-end">
                  <label class=" w-9/12">
                    <span class="text-black font-semibold text-xl">
                      Category Name
                    </span>
                    <input
                      type="text"
                      placeholder="Enter name"
                      class="px-3 py-3 text-gray-600 mt-3 bg-white rounded border border-gray-300 outline-none focus:outline-purple focus:border-slPurple w-full"
                    />
                    {/* <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      Invalid project name field !
                    </span> */}
                  </label>
                  <button
                    type="button"
                    className="bg-slPurple flex items-center justify-center py-3 w-1/5 rounded-md text-slWhite text-lg font-bold hover:bg-slPurple-dark hover:shadow-lg ml-1 transition-all duration-500 "
                  >
                    Add
                  </button>
                </div>
              </div>

              <div class="flex justify-center mt-10 ">
                <ul class="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
                  <li class="px-6 py-4 border-b border-gray-200 w-full rounded-t-lg">
                    <div className="flex justify-between">
                      <span className=" text-xl">Android</span>
                      <button
                        type="button"
                        ref={buttonRefDelete}
                        onClick={(e) => setShowModalCode(true)}
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <FaIcons.FaTrashAlt />
                      </button>
                      <Tooltips placement="right" ref={buttonRefDelete}>
                        <TooltipsContent>Delete Category</TooltipsContent>
                      </Tooltips>
                    </div>
                  </li>
                  <li class="px-6 py-4 border-b border-gray-200 w-full">
                    <div className="flex justify-between">
                      <span className=" text-xl">Desktop</span>
                      <button
                        type="button"
                        ref={buttonRefDelete}
                        onClick={(e) => setShowModalCode(true)}
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <FaIcons.FaTrashAlt />
                      </button>
                      <Tooltips placement="right" ref={buttonRefDelete}>
                        <TooltipsContent>Delete Category</TooltipsContent>
                      </Tooltips>
                    </div>
                  </li>
                  <li class="px-6 py-4 border-b border-gray-200 w-full">
                    <div className="flex justify-between">
                      <span className=" text-xl">Website</span>
                      <button
                        type="button"
                        ref={buttonRefDelete}
                        onClick={(e) => setShowModalCode(true)}
                        className="text-gray-400  hover:text-slRed text-2xl px-6"
                      >
                        <FaIcons.FaTrashAlt />
                      </button>
                      <Tooltips placement="right" ref={buttonRefDelete}>
                        <TooltipsContent>Delete Category</TooltipsContent>
                      </Tooltips>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>

        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
          <ModalBody>
            <p className=" leading-relaxed text-gray-600 font-bold px-4">
              Are you sure want to delete this Category?
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
      </div>
    </div>
  );
}
