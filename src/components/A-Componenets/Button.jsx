import React, { useState , Fragment } from "react";
import Modal from "./Modal";
import Form from "./Form";

const Button = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Fragment>
        <button
          className="relative shadow-lg shadow-red-7 00 hover:border-sky-600 duration-500 group cursor-pointer text-slate-900 font-jet-mono text-md hover:text-lg overflow-hidden h-14 w-52 rounded-3xl bg-orange-800 p-2 flex justify-center items-center font-extrabold"
          onClick={() => setShowModal(true)}
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
          <p className="z-10">Complain Form</p>
        </button>

        {/* form model */}
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <Form />
        </Modal>
      </Fragment>
    </>
  );
};

export default Button;
