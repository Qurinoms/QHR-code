import React, { useEffect } from "react";
import { Layout } from "../components";
import LeaveTable from "../components/LeaveTable";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const AdminLeave = () => {
  const navigate = useNavigate();
  const { user } = useGlobalContext();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <Layout>
      <div className="px-9">
        <h1 className="text-2xl font-roboto font-semibold my-8">
          Employees Leave Applications
        </h1>
        <div className="my-5">
          <LeaveTable />
        </div>
      </div>
    </Layout>
  );
};

export default AdminLeave;
