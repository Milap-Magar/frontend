import React from "react";
import { BiSolidLogOut } from "react-icons/bi";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="flex gap-2 items-center" onClick={handleLogout}>
      <BiSolidLogOut className="h-7 w-7" />
      <span>Logout</span>
    </div>
  );
};

export default Logout;
