import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import AplicationPage from "./Pages/appPage/Apps";
import Edit from "./Pages/Edit/Edit";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/app" element={<AplicationPage />} />
      </Routes>
    </div>
  );
}

export default App;
