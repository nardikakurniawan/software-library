import React, { useState } from "react";

export default function Account() {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="mt-28 lg:ml-90 ml-4 mr-4 mb-6">
      <div className="container mx-auto">
        <div className="flex items-center" data-aos="fade-right">
          <h1 className="text-3xl font-bold">My Account</h1>
        </div>

        <div className=" md:mt-6 ">
          <form action="">
            <div class="md:grid md:grid-cols-2 gap-8 p-6 rounded-lg shadow-lg bg-white">
              <div className="form-input">
                <label class="block " data-aos="fade-up">
                  <span class="text-black font-semibold text-xl">Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-purple focus:border-slPurple  w-full"
                  />
                  <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Invalid project name field !
                  </span>
                </label>

                <label
                  class="block mt-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span class="text-black font-semibold text-xl">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-purple focus:border-slPurple  w-full"
                  />
                  <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Invalid your email field !
                  </span>
                </label>

                <label class="block " data-aos="fade-up">
                  <span class="text-black font-semibold text-xl">Username</span>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-purple focus:border-slPurple  w-full"
                  />
                  <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Invalid usernamee field !
                  </span>
                </label>

                <label
                  class="block mt-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span class="text-black font-semibold text-xl">Password</span>
                  <input
                    type="password"
                    placeholder="Enter your email"
                    class="px-3 py-3 text-gray-600 bg-white rounded border border-gray-300 outline-none focus:outline-purple focus:border-slPurple  w-full"
                  />
                  <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Invalid your password field !
                  </span>
                </label>
              </div>

              <div className="upload-image flex justify-center items-center mt-6 md:mt-0 ">
                <div
                  className="border border-gray-300  w-full h-40 md:h-1/2 lg:h-5/6 rounded-xl overflow-hidden p-2 flex justify-center items-center shadow-md relative"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <div className=" border-2 border-gray-300 border-dashed w-3/4 md:h-3/4 bg-slWhite rounded-xl p-2 flex justify-center items-center">
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
            </div>

            <div className="my-6 flex justify-center">
              <button
                type="button"
                className=" bg-slBlue py-2 px-4 rounded-md text-slWhite w-32 hover:bg-slBlue-dark hover:shadow-xl transition-all duration-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
