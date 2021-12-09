import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
// import * as MdIcons from "react-icons/md";

import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

export default function UserManagement() {
  const [showModal, setShowModal] = useState(false);

  const setShowModalCode = () => setShowModal(!showModal);

  const buttonRefDelete = useRef();
  const buttonRefEdit = useRef();
  const buttonRefAdd = useRef();

  return (
    <div className="mt-28 lg:ml-90 ml-4 mr-4 mb-6 overflow-hidden">
      <div className="container mx-auto">
        <div data-aos="fade-right" className="md:flex md:justify-between">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">User Management</h1>
            <Link
              ref={buttonRefAdd}
              to="/user-management/add-data"
              className=" md:ml-6 lg:ml-10 bg-slGreen py-2  px-4 rounded-md text-slWhite hover:bg-slGreen-dark transition-all duration-500 hover:shadow-md"
            >
              <FaIcons.FaPlus />
            </Link>
            <Tooltips placement="right" ref={buttonRefAdd}>
              <TooltipsContent>Add User</TooltipsContent>
            </Tooltips>
          </div>
          <div className="flex justify-between items-center md:w-1/3 sm:w-4/12 relative">
            <input
              type="text"
              placeholder="Search"
              className="block text-gray-400 border border-gray-300 py-2 px-2 focus:shadow focus:border-slPurple rounded-md w-full"
            />
            <span className=" absolute top-3 right-3 text-gray-400">
              <FaIcons.FaSearch />
            </span>
          </div>
        </div>

        <div class="flex flex-col text-left mt-10">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                "
              >
                <table class="min-w-full divide-y divide-gray-200">
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
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-md font-bold text-slWhite uppercase tracking-wider "
                      >
                        Level
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
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1620037624682-f9c156d0286f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4Mzc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-lg font-medium text-gray-900">
                              Nardika Kurniawan
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-lg text-gray-900">
                          nardikakurniawan@gmail.com
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-lg text-gray-900">willofd</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="text-lg text-gray-900">member</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex w-full">
                          <Link
                            ref={buttonRefEdit}
                            to="/source-code/edit-data"
                            className="text-black  hover:text-slBlue text-2xl mr-4"
                          >
                            <FaIcons.FaEdit />
                          </Link>
                          <Tooltips placement="left" ref={buttonRefEdit}>
                            <TooltipsContent>Edit User</TooltipsContent>
                          </Tooltips>

                          <button
                            type="button"
                            ref={buttonRefDelete}
                            onClick={(e) => setShowModalCode(true)}
                            className="text-black  hover:text-slRed text-2xl "
                          >
                            <FaIcons.FaTrashAlt />
                          </button>
                          <Tooltips placement="right" ref={buttonRefDelete}>
                            <TooltipsContent>Hapus User</TooltipsContent>
                          </Tooltips>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
          <ModalBody>
            <p className=" leading-relaxed text-gray-600 font-bold px-4">
              Are you sure want to delete this User?
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
