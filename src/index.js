import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.scss";

const weekNo = Array.from(Array(12), (_, i) => i + 1); // [1, 2, ..., 12]

const routs = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App week={0} />} />
      {weekNo.map(no => <Route path={"/week/" + no} element={<App week={no} />} key={no} />)}
      <Route path="*" element={<App week={-1} />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(routs, document.getElementById("root"));
