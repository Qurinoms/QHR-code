import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
const AttendanceLayout = ({ select, children }) => {
  return (
    <div>
      <div className=" bg-white shadow-lg flex justify-between items-center px-5 py-3">
        <div className="text-lg flex items-center gap-1 justify-center">
          <BiTimeFive />
          <h1 className="font-semibold">Attendance</h1>
        </div>
        {/* Links */}
        <div className="flex justify-center gap-4 items-center">
          <Link to="/attendance/self">
            <p
              className={`uppercase text-sm font-semibold   ${
                select === "self" ? "text-green-600" : "text-gray-600"
              }  `}
            >
              My attendance
            </p>
          </Link>
          <Link to="/attendance/team">
            <p
              className={`uppercase text-sm font-semibold   ${
                select === "team" ? "text-green-600" : "text-gray-600"
              }  `}
            >
              team attendance
            </p>
          </Link>
          <Link to="/attendance/employee">
            <p
              className={`uppercase text-sm font-semibold   ${
                select === "employee" ? "text-green-600" : "text-gray-600"
              }  `}
            >
              employee attendance
            </p>
          </Link>
          <Link to="/attendance/settings/general">
            <p
              className={`uppercase text-sm font-semibold   ${
                select === "settings" ? "text-green-600" : "text-gray-600"
              }  `}
            >
              settings
            </p>
          </Link>
        </div>
        {/* Upgrade */}
        <button className="btn bg-pink-600 font-semibold rounded-lg px-6 btn-sm text-white">
          upgrade plan
        </button>
      </div>

      <div className="h-auto">{children}</div>
    </div>
  );
};

export default AttendanceLayout;
