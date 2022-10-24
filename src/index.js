import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Navbar } from "./Navbar/Navbar";
import "semantic-ui-css/semantic.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/experience" element={<Experience></Experience>}></Route>
      <Route path="/project" element={<Project></Project>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
