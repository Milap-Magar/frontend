import React from "react";
import { TbReportAnalytics } from "react-icons/tb";

const Report = ({ title }) => {
  return (
    <div className="flex gap-2 items-center">
      <TbReportAnalytics className="w-7 h-7" />
      {title}
    </div>
  );
};

export default Report;
