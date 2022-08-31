import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReducerInterface } from "./type/interface/redux/reducer";

const Login = lazy(() => import("./pages/login"));
const MainPage = lazy(() => import("./pages/Main"));
const Register = lazy(() => import("./pages/register"));

const App = () => {
  const { login } = useSelector((state: ReducerInterface) => state.userReducer);

  return (
    <BrowserRouter>
      <Routes>
        {login ? (
          <>
            <Route path="/" element={<MainPage />}></Route>
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
