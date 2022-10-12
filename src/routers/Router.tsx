import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../layouts/Main";

const Router = () => {
   return (
      <div className="router">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Main />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
};

export default Router;
