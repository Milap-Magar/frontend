import React from "react";
import logo from "../assets/logo.jpg";
import "./style.css";
import Analytics from "./Analysis";
import Settings from "./Settings";
import Logout from "./Logout";

const Admin = () => {
  return (
    <>
      <div className="flex bg-slate-200 h-screen w-full body">
        <div className="flex flex-col h-screen p-3 bg-amber-400 shadow-red-700 shadow-2xl w-60">
          <figure>
            <img
              src={logo}
              alt="logo/image"
              className={`logo w-full h-[10vh]`}
            />
          </figure>

          <div className="space-y-6">
            <div className="py-10 px-4 flex justify-center items-center">
              <h2 className="text-lg font-bold">
                <a href="/dashboard">Admin Dashboard</a>
              </h2>
            </div>
            <div className="flex-1">
              <ul className="gap-5 space-y-5 text-sm flex flex-col justify-start items-center">
                <li>
                  <a href="/analytics">
                    <Analytics />
                  </a>
                </li>
                <li>
                  <a href="/settings">
                    <Settings />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <Logout />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col justify-center items-center py-8">
            <h6>Patan Multiple Campus</h6>
            <h2 className="text-3xl text-slate-700">Complain Management System</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="w-full px-4 py-5 bg-amber-200 rounded-lg shadow-lg shadow-orange-400">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Complaints
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">120+</div>
            </div>
            <div className="w-full px-4 py-5 bg-amber-200 rounded-lg shadow-lg shadow-orange-400">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Users
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">90+</div>
            </div>
            <div className="w-full px-4 py-5 bg-amber-200 rounded-lg shadow-lg shadow-orange-400">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Resolved
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">20</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
