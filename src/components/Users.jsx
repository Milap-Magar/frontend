import React from "react";
import { FaUserSecret } from "react-icons/fa";

const Users = () => {
  return (
    <div className="flex gap-2 items-center">
      <FaUserSecret className="h-8 w-8" />
      Total Users
    </div>
  );
};

export default Users;
