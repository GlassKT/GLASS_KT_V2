import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<div>profile</div>}></Route>
        <Route path="*" element={<div>error page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
