import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";

export default function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
