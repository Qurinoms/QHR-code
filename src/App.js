import React from "react";
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
import "./App.css";
import Checklists from "./pages/Checklist";
import Todos from "./components/Todos/Todos";
import Navbar from "./components/Navbar";
import ManageEmployee from "./components/ManageEmployee/empprofile";
import Onboarding from "./components/Onboarding/Onboarding";
import Offboarding from "./components/Offboarding/Offboarding";
// import Settings from './components/Settings';

const App = () => {
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
          <Route path="team" element={<TeamAttendance />} />
          <Route path="employee" element={<EmployeeAttendance />} />
          <Route path="settings/general" element={<GeneralSettings />} />
          <Route path="settings/location" element={<Location />} />
          <Route path="settings/qrcode" element={<QrCode />} />
        </Route>
        {/* <Route path="dashboard" element={<Checklists />} >
          <Route index path='todos' element={<Todos />} />
          <Route path='onboarding' element={<Onboarding />} />
        </Route>

        <Route path="/businessProfile">
          <Route path="offboarding" element={<Offboarding />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
