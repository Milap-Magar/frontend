import React, { useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validate from "../validation/validate";
import Image from "../components/A-Componenets/Image";
import loginImg from "../assets/login.png";
import "./Login.css";

import { IoMdLogIn } from "react-icons/io";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
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
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
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
          type="text"
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
      </>
    ),
    [formData, handleChange]
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Image />
      <div className="bg-white rounded shadow-md">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent w-[50vh] md:w-[500px] px-10 py-1 rounded-lg shadow-xl shadow-slate-800"
        >
          <img src={loginImg} alt="login/image" className="px-6" />
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
