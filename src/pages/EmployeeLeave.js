import axios from "axios";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { Layout } from "../components";
import EmployeeLeaveTable from "../components/EmloyeeLeaveTable";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const initialData = {
  subject: "",
  leaveDate: "",
  rejoinDate: "",
  desc: "",
};
const EmployeeLeave = () => {
  const [formData, setFormData] = useState(initialData);
  const { user, url } = useGlobalContext();
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/leave/apply`, {
        userId: user._id,
        ...formData,
      });
      console.log(res);
      toast.success("You have Successfully apply for leave");
      setFormData(initialData);
      setIsClick(true);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <Layout>
      <Toaster />
      <div className="flex flex-col px-8 py-6">
        <h1 className="text-2xl font-roboto text-gray-600 font-semibold">
          See your Leave Applicatios
        </h1>

        <div className="relative flex justify-start w-full items-center gap-8 mt-10">
          <h1 className="text-md font-normal font-roboto ">
            You can apply for leave
          </h1>
          {/* The button to open modal */}

          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-info text-white"
          >
            Apply
          </label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ???
              </label>
              <h3 className="text-lg font-bold">Apply For leave</h3>
              <form
                className="flex flex-col my-4 justify-center gap-3 w-full items-center"
                onSubmit={handleSubmit}
              >
                <div className="form-control w-full max-w-xs">
                  <label className="label text-sm font-roboto">
                    Enter Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    placeholder="Enter Subject"
                    className="input input-bordered input-md w-full max-w-xs"
                    value={formData.subject}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label text-sm font-roboto">
                    Choose Leave date
                  </label>
                  <input
                    required
                    type="date"
                    id="leaveDate"
                    value={formData.leaveDate}
                    className="input input-bordered input-md w-full max-w-xs"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label text-sm font-roboto">
                    Choose Re Join date
                  </label>
                  <input
                    required
                    type="date"
                    id="rejoinDate"
                    value={formData.rejoinDate}
                    onChange={onChangeHandler}
                    className="input input-bordered input-md w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label text-sm font-roboto">
                    Describe your Reason
                  </label>
                  <textarea
                    required
                    type="text"
                    id="desc"
                    value={formData.desc}
                    onChange={onChangeHandler}
                    placeholder="Enter your reason"
                    className="input input-bordered input-md w-full max-w-xs"
                  />
                </div>
                <button className="btn btn-sm ">Submit</button>
              </form>
            </div>
          </div>
        </div>
        {}
        <div className="">
          <EmployeeLeaveTable isClick={isClick} />
        </div>
      </div>
    </Layout>
  );
};

export default EmployeeLeave;
