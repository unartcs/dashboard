import React from "react";
import Main from "./Main";
import Login from "./Login"
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <div className="pages-wrapper">
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>

    </div>
  );
};

export default Pages;
