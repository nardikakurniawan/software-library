import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Modal from "@material-tailwind/react/Modal";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import ModalBody from "@material-tailwind/react/ModalBody";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

import * as FaIcons from "react-icons/fa";

export default function SourceCodeEditVideos() {
  const [showModal, setShowModal] = useState(false);

  const setShowModalCode = () => setShowModal(!showModal);

  const buttonBack = useRef();

  return (
    <div className="mt-28 lg:ml-76 ml-4 mr-4 mb-6">
      <div className="container mx-auto">
        <div className="flex items-center" data-aos="fade-right">
          <Link
            to="/source-code/detail"
            ref={buttonBack}
            className=" text-slPurple hover:text-slPurple-dark transition-all duration-500"
          >
            <FaIcons.FaArrowLeft className="text-2xl mr-6" />
          </Link>
          <Tooltips placement="top" ref={buttonBack}>
            <TooltipsContent>Back</TooltipsContent>
          </Tooltips>

          <h1 className="text-3xl font-bold">Edit Video</h1>
        </div>

        <div className="mt-10 lg:w-1/2" data-aos="fade-up">
          <form action="">
            <div className="form-input shadow-xl rounded-lg p-6">
              <label class="block " data-aos="fade-up">
                <span class="text-black font-semibold text-xl">
                  Video Title
                </span>
                <input
                  type="text"
                  placeholder="Enter Video Title"
                  class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-purple focus:border-slPurple  w-full"
                />
                <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  Invalid title field !
                </span>
              </label>

              <label class="block mt-4" data-aos="fade-up" data-aos-delay="200">
                <span class="text-black font-semibold text-xl">Link Video</span>
                <input
                  type="text"
                  placeholder="Enter Link Video"
                  class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-purple focus:border-slPurple  w-full"
                />
              </label>

              <label class="block mt-4" data-aos="fade-up" data-aos-delay="500">
                <span class="text-black font-semibold text-xl">
                  Descriptions
                </span>
                <textarea
                  class="form-textarea px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-purple focus:border-slPurple w-full"
                  rows="5"
                  placeholder="Enter some long form content."
                ></textarea>
              </label>
            </div>

            <div
              className="my-6 flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <button
                type="button"
                className=" bg-gray-400 py-2 px-4 rounded-md text-slWhite w-32 mr-4 hover:bg-gray-600 hover:shadow-xl transition-all duration-500"
              >
                Clear
              </button>
              <button
                type="submit"
                className=" bg-slBlue py-2 px-4 rounded-md text-slWhite w-32 hover:bg-slBlue-dark hover:shadow-xl transition-all duration-500"
              >
                Save
              </button>
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
