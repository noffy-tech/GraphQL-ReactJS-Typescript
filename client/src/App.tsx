import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Account/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Layout/Navbar";
import NonLogged from "./components/Layout/Navbar/NonLogged";

function App() {
  const token = localStorage.getItem("token");
  let Navigation;
  if (token) {
    Navigation = Navbar;
  } else {
    Navigation = NonLogged;
  }
  return (
    <>
      <Navigation>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
