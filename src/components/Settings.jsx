import React from "react";
import { IoSettings } from "react-icons/io5";

const Settings = () => {
  return (
    <div className="flex gap-2 items-center">
      <IoSettings className="h-7 w-7" />
      <span>Settings</span>
    </div>
  );
};

export default Settings;
