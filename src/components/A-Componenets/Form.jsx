import React, { useState } from "react";

const Form = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("");
  return (
    <div>
      <form className="w-full max-w-lg flex flex-col justify-center m-8">
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Complain Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="name"
              placeholder="Enter your title"
            />
          </div>
        </div>

        <div className="flex justify-between px-10">
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Select Faculty
              </label>
              <select
                id="category_id"
                name="Category"
                className="border-[2px] p-1 border-slate-500 rounded focus:border-slate-900"
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
                <option disabled selected value="">
                  Choose an option
                </option>
                <option value="BCA">BCA</option>
                <option value="BSCSIT">BSCSIT</option>
                <option value="BSW">BSW</option>
                <option value="BBA">BBA</option>
              </select>
            </div>
          </div>
          {selectedFaculty && (
            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Select Semsester
                </label>
                <select
                  id="category_id"
                  name="Category"
                  className="border-[2px] p-1 border-slate-500 rounded focus:border-slate-900"
                >
                  <option disabled selected value="">
                    Choose an option
                  </option>
                  <option value="Value1">1st </option>
                  <option value="Value2">2nd</option>
                  <option value="Value3">3rd</option>
                  <option value="Value4">4th</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Complain related data (if any)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="file"
              placeholder="Enter your title"
            />
          </div>
        </div>

        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Submit
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Form;
