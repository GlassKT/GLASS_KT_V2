import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>main</div>}></Route>
        <Route path="/profile" element={<div>profile</div>}></Route>
        <Route path="*" element={<div>error page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
