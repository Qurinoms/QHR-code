import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Progresstable from "../components/Todos/Progresstable";

import Completedtable from "../components/Todos/Completedtable";
import Select from "react-select";
import { Layout } from "../components";
import { useGlobalContext } from "../context/context";

const Todos = () => {
  const navigate = useNavigate();
  const { user } = useGlobalContext();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const [selectedOption, setSelectedOption] = useState({
    value: 1,
    label: "In Progress",
  });
  const data = [
    {
      value: 1,
      label: "In Progress",
    },
    {
      value: 2,
      label: "Completed",
    },
  ];
  const handleChange = (e) => {
    setSelectedOption(e);
  };
  // position: absolute;
  // top: 0;
  // right: 0;
  // width: 87%;
  // height: 91%;
  // border: none;
  // background: none;
  // font-size: 18px;

  // height: 100%;
  // width: 31%;
  // display: block;
  // border: none;
  // border-radius: 25px;

  return (
    <Layout>
      <div className="flex mt-5 gap-5">
        <Select
          placeholder="Select Option"
          value={selectedOption}
          options={data}
          onChange={handleChange}
        />
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-96"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[400px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search Here..." /> */}
      </div>
      {selectedOption && selectedOption.value === 1 ? (
        <div>
          <Progresstable />
        </div>
      ) : (
        <div>
          <Completedtable />
        </div>
      )}
    </Layout>
  );
};

export default Todos;
