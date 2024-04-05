import React, { useState, useMemo } from "react";
import axios from "axios";
import validate from "../../validation/validate";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [selectedFaculty, setSelectedFaculty] = useState("");

  const handleChange = (e) => {
    setSelectedFaculty(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    message: "",
    faculty: "",
    semester: "",
    // errors: {},
  });
  // console.log(formData);
  const handleSubmit = async (e) => {
    console.log(e)
    e.preventDefault();

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFormData({ ...formData, errors });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/complain", {
        title: formData.title,
        email: formData.email,
        message: formData.message,
        faculty: formData.faculty,
        semester: formData.semester,
      });
console.log(response)
      if (response.status === 200) {
        navigate("/user/dashboard");
        // response.json({ message: "loggedin" });
      }
    } catch (err) {
      console.error("Registration error:", err);
    }
  };
  console.log(formData);

  const memoizedInputs = useMemo(
    () => (
      <>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-title"
            >
              Complain Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
          }`}
          required
        />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
        ></textarea>

        <div className="flex justify-between px-10">
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-faculty"
              >
                Select Faculty
              </label>
              <select
                id="faculty"
                name="faculty"
                className="border-[2px] p-1 border-slate-500 rounded focus:border-slate-900"
                value={formData.faculty}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Faculty
                </option>
                <option value="engineering">Engineering</option>
                <option value="medicine">Medicine</option>
                <option value="science">Science</option>
                <option value="arts">Arts</option>
                <option value="business">Business</option>
                <option value="law">Law</option>
                <option value="humanities">Humanities</option>
              </select>
            </div>
          </div>

          {selectedFaculty && (
            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-semester"
                >
                  Select Semsester
                </label>
                <select
                  id="semester"
                  name="semester"
                  className="border-[2px] p-1 border-slate-500 rounded focus:border-slate-900"
                  required
                  value={formData.semester}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Semester
                  </option>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                  <option value="7">Semester 7</option>
                  <option value="8">Semester 8</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </>
    ),
    [formData, handleChange]
  );

  return (
    <div>
      <form
        className="w-full max-w-lg flex flex-col justify-center m-8"
        onSubmit={(e)=>handleSubmit(e)}
      >
        {memoizedInputs}

        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-file"
            >
              Complain related data (if any)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="file"
              type="file"
              placeholder="Enter your title"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
            <button
              className=" shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          {/* <div className="md:w-2/3"></div> */}
        </div>
      </form>
    </div>
  );
};

export default Form;
