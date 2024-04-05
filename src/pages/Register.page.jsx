import React, { useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validate from "../validation/validate";
import Image from "../components/A-Componenets/Image";
// import loginImg from "../assets/login.png";
import "./Login.css";

import { IoMdLogIn } from "react-icons/io";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dob: "",
    name: "",
    phone: "",
    address: "",
    role: "isUser",
    errors: {},
  });

  const handleNavigate = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFormData({ ...formData, errors });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/register", {
        email: formData.email,
        password: formData.password,
        symbol: formData.symbol,
        dob: formData.dob,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        faculty: formData.faculty,
        semester: formData.semester,
        role: "isUsers",
      });

      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.error("Registration error:", err);
    }
  };
  // console.log(formData);

  const memoizedInputs = useMemo(
    () => (
      <>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`w-full px-4 py-2 mb-4 border rounded ${
            formData.errors.email ? "border-red-500" : ""
          }`}
          required
        />
        {formData.errors.email && (
          <div className="text-red-500 mb-2">{formData.errors.email}</div>
        )}
        <input
          type="number"
          name="symbol"
          value={formData.symbol}
          onChange={handleChange}
          placeholder="Symbol"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={`w-full px-4 py-2 mb-4 border rounded ${
            formData.errors.password ? "border-red-500" : ""
          }`}
          required
        />
        {formData.errors.password && (
          <div className="text-red-500 mb-2">{formData.errors.password}</div>
        )}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 mb-4 border rounded"
          required
        />
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded"
          required
        />
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <label htmlFor="faculty">Choose a Faculty:</label>
        <select
          name="faculty"
          className="w-full px-4 py-2 mb-4 border rounded"
          value={formData.faculty}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Semester
          </option>
          <option value="engineering">Engineering</option>
          <option value="medicine">Medicine</option>
          <option value="science">Science</option>
          <option value="arts">Arts</option>
          <option value="business">Business</option>
          <option value="law">Law</option>
          <option value="humanities">Humanities</option>
        </select>
        <label htmlFor="sem">Choose a Semester:</label>
        <select
          name="semester"
          className="w-full px-4 py-2 mb-4 border rounded"
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
      </>
    ),
    [formData, handleChange]
  );

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Image />
      <div className="bg-white rounded shadow-md">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent h-screen w-[50vh] md:w-[500px] px-10 py-1 rounded-lg shadow-xl shadow-slate-800"
        >
          {/* <img src={loginImg} alt="login/image" className="px-6 w-10 h-10" /> */}
          <h2 className="text-2xl text-slate-900 font-jet-mono text-center  py-10">
            Register Page
          </h2>
          {memoizedInputs}
          <div className={`flex justify-center items-center`}>
            <button
              className={`border rounded-xl bg-afno-300 m-[10px] md:m-3 py-1 px-3 flex border-slate-800 hover:bg-amber-300 hover:text-white font-black font-epic text-lg`}
              type="submit"
            >
              Register
              <IoMdLogIn className="w-6 h-6" />
            </button>
            <button
              onClick={handleNavigate}
              className={`rounded-xl bg-afno-300 m-[10px] md:m-3 py-1 px-3 flex border-slate-800  hover:text-white font-black font-epic text-lg`}
            >
              Login
              <IoMdLogIn className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
