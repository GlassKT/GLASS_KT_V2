import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/Main";
import Register from "./pages/register";
import { ReducerInterface } from "./type/interface/redux/reducer";

const App = () => {
  const { login } = useSelector((state: ReducerInterface) => state.userReducer);

  return (
    <BrowserRouter>
      <Routes>
        {login ? (
          <>
            <Route path="/" element={<Main />}></Route>
            <Route path="/profile" element={<div>profile</div>}></Route>
            <Route path="*" element={<div>error page</div>}></Route>
          </>
        ) : (
          <>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<Login />}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
