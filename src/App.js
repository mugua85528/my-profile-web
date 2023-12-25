import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Layout from "./components/Layout";
import OpenWeather from "./components/OpenWeather";
import "./styles/style.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currentPage={currentPage} />}>
          <Route index element={<Home setCurrentPage={setCurrentPage} />} />
          <Route
            path="weather"
            element={<OpenWeather setCurrentPage={setCurrentPage} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
