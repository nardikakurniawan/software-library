import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function SourceCodeEdit() {
  const [showModalMd, setShowModalMd] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const setShowModalCodeMd = () => setShowModalMd(!showModalMd);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className=" mt-28 lg:ml-76 ml-4 mr-4 mb-20">
      <div className="container mx-auto">
        <div className="flex items-center" data-aos="fade-right">
          <Link
            to="/source-code"
            className=" text-slPurple hover:text-slPurple-dark transition-all duration-500"
          >
            <FaIcons.FaArrowLeft className="text-2xl mr-6" />
          </Link>
          <h1 className="text-3xl font-bold">Source Code Edit Data</h1>
        </div>

        <div className=" md:mt-6 ">
          <form action="">
            <div class="md:grid md:grid-cols-2 gap-8 p-6 rounded-lg shadow-lg bg-white">
              <div className="form-input">
                <label class="block " data-aos="fade-up">
                  <span class="text-black font-semibold text-xl">
                    Project Name
                  </span>
                  <input
                    type="text"
                    value="Python Todo List"
                    placeholder="Enter project name"
                    class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-none focus:border-slPurple  w-full"
                  />
                  <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Invalid project name field !
                  </span>
                </label>

                <div
                  className="flex justify-between items-end"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <label class=" w-11/12 mt-4">
                    <span class="text-black font-semibold text-xl">
                      Category Code
                    </span>
                    <select class="form-select block w-full mt-1 px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-none focus:border-slPurple">
                      <option>Website</option>
                      <option>Android</option>
                      <option>Ios</option>
                    </select>
                  </label>
                  <button
                    type="button"
                    className="bg-slPurple flex items-center justify-center h-12 w-14 rounded-md text-slWhite hover:bg-slPurple-dark hover:shadow-lg ml-1 transition-all duration-500"
                    onClick={(e) => setShowModalCodeMd(true)}
                  >
                    <FaIcons.FaPlus className="text-center" />
                  </button>
                </div>

                <label
                  class="block mt-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span class="text-black font-semibold text-xl">
                    Link Source Code
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Link Source Code"
                    class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-none focus:border-slPurple  w-full"
                  />
                </label>

                <label
                  class="block mt-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <span class="text-black font-semibold text-xl">
                    Release Date
                  </span>
                  <input
                    type="date"
                    class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-none focus:border-slPurple  w-full"
                  />
                </label>

                <label
                  class="block mt-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <span class="text-black font-semibold text-xl">
                    Product Version
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Product Version"
                    class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-none focus:border-slPurple  w-full"
                  />
                  <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Invalid Product Version !
                  </span>
                </label>

                <label
                  class="block mt-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <span class="text-black font-semibold text-xl">
                    Descriptions
                  </span>
                  <textarea
                    class="form-textarea px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-none focus:border-slPurple w-full"
                    rows="3"
                    placeholder="Enter some long form content."
                  ></textarea>
                </label>
              </div>

              <div className="upload-image flex justify-center items-center mt-10 md:mt-0 ">
                <div className="file-image w-full h-full ">
                  <div
                    className="border border-gray-300  w-full md:h-2/5 lg:h-3/5 rounded-xl overflow-hidden p-2 flex justify-center items-center shadow-md relative"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  >
                    <div className=" border-2 border-gray-300 border-dashed w-3/4 md:h-3/4 bg-slWhite rounded-xl p-2 flex justify-center items-center">
                      <div className="grid grid-rows-3 grid-flow-col gap-2 ">
                        <span className="flex items-center font-semibold">
                          Drag your image here
                        </span>
                        <div className="flex justify-center items-center">
                          <hr className=" w-2/4 border border-gray-400" />{" "}
                          <span className="mx-2">OR</span>{" "}
                          <hr className=" w-2/4 border border-gray-400" />
                        </div>
                        <label className="bg-slBlue py-2 px-4 rounded-md text-center text-white hover:bg-slBlue-dark transition-all duration-500 cursor-pointer ">
                          Browse File
                          <input
                            accept="image/*"
                            type="file"
                            hidden
                            onChange={imageChange}
                          />
                          {selectedImage && (
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              alt="Thumb"
                              className="absolute top-0 left-0 w-full h-full object-cover object-center"
                            />
                          )}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-10"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <h5 className="text-black font-semibold text-xl">
                      Zip File
                    </h5>

                    <div className="border border-gray-300 shadow-md rounded-lg p-4 flex justify-center items-center mt-2 ">
                      <label className="cursor-pointer flex justify-center items-center w-full h-full ">
                        <AiIcons.AiOutlineFileZip className=" text-5xl"></AiIcons.AiOutlineFileZip>
                        <input
                          type="file"
                          accept=".zip"
                          contentEditable="Upload Your File here"
                          className=" "
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-6 flex justify-center">
              <button
                type="button"
                className=" bg-gray-400 py-2 px-4 rounded-md text-slWhite w-32 mr-4 hover:bg-gray-600 hover:shadow-xl transition-all duration-500"
              >
                Clear
              </button>
              <button
                type="button"
                className=" bg-slBlue py-2 px-4 rounded-md text-slWhite w-32 hover:bg-slBlue-dark hover:shadow-xl transition-all duration-500"
              >
                Save
              </button>
            </div>
          </form>

          {/* Modal Add Category */}
          <Modal
            size="regular"
            active={showModalMd}
            toggler={() => setShowModalMd(false)}
          >
            <ModalHeader toggler={() => setShowModalMd(false)}>
              Add Category
            </ModalHeader>
            <ModalBody>
              <form action="" className=" md:w-497">
                <div className="flex justify-between items-start w-full">
                  <label class=" w-11/12">
                    <input
                      type="text"
                      placeholder="Enter New Category"
                      class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-none focus:border-slPurple w-full"
                    />
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      Invalid Category !
                    </span>
                  </label>
                  <button
                    type="button"
                    className=" bg-slBlue flex items-center justify-center h-12 w-20 rounded-md text-slWhite hover:bg-slPurple-dark hover:shadow-lg ml-1"
                  >
                    Save
                  </button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
}
