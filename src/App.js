import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Attendance,
  EmployeeAttendance,
  GeneralSettings,
  Location,
  Main,
  QrCode,
  TeamAttendance,
} from "./components";
import { useNavigate } from "react-router-dom";
import Checklist from "./components/Checklist/Checklist";
import Todos from "./components/Todos/Todos";
import Navbar from "./components/Navbar";
import ManageEmployee from "./components/ManageEmployee/empprofile";
import Onboarding from "./components/Checklist/Onboarding/Onboarding";
import Offboarding from "./components/Checklist/Offboarding/Offboarding";
import Settings from "./components/Checklist/Settings/Settings";
import Empprofile from "./components/ManageEmployee/empprofile";
import Changepswd from "./components/Change password/Changepswd";
import Signin from "./components/SignIn/Signin";
import Signup from "./components/Register/Register";
import Forgot from "./components/Forgot/Forgot";
import "./App.css";
import Checklists from "./pages/Checklist";
// import Settings from './components/Settings';
import { useGlobalContext } from "./context/context";
const App = () => {
  const { loading } = useGlobalContext();
  console.log(loading);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("something went wrong");
  const { user } = useGlobalContext();
  const Navigate = useNavigate();
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/checklist" element={<Checklists />} />
        <Route path="/timeoff" element={<Main />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/employee" element={<ManageEmployee />} />
        <Route path="/attendance">
          <Route path="self" element={<Attendance />} />
          <Route
            path="team"
            element={
              <TeamAttendance
                open={open}
                setOpen={setOpen}
                message={message}
                setMessage={setMessage}
              />
            }
          />
          <Route
            path="employee"
            element={
              <EmployeeAttendance
                open={open}
                setOpen={setOpen}
                message={message}
                setMessage={setMessage}
              />
            }
            open={open}
            setOpen={setOpen}
            message={message}
            setMessage={setMessage}
          />
          <Route path="settings/general" element={<GeneralSettings />} />
          <Route path="settings/location" element={<Location />} />
          <Route path="settings/qrcode" element={<QrCode />} />
        </Route>

        {user ? <Navbar /> : null}

        {!user ? (
          <>
            <Route path="/login" element={<Signin />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
          </>
        ) : (
          <>
            <Route path="/" exact element={<Main />} />
            <Route path="/timeoff" element={<Main />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/employee/:tabname" element={<ManageEmployee />} />
            <Route path="/employee" element={<ManageEmployee />} />
            <Route path="/profile" element={<Empprofile />} />
            <Route path="/changepassword" element={<Changepswd />} />

            <Route path="/checklist" element={<Checklist />}>
              <Route index element={<Todos />} />
              <Route path="onboarding" element={<Onboarding />} />
              <Route path="offboarding" element={<Offboarding />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
