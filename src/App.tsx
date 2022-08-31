import React, { lazy, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReducerInterface } from "./type/interface/redux/reducer";

import Login from "./pages/login";
import MainPage from "./pages/Main";
import Register from "./pages/register";
import AuthApi from "./core/api/Auth/Auth.api";
import { LOGIN } from "./core/reducers/user/UserAction";

const App = () => {
  const dispatch = useDispatch();

  const LoginCheck = useCallback(async () => {
    const value = await AuthApi.loginCheck();
    if (value) {
      dispatch({
        type: LOGIN,
      });
    }
  }, []);

  useEffect(() => {
    LoginCheck();
  }, []);

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
