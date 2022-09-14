import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Account/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
