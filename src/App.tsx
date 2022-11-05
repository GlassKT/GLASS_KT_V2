import React, { lazy, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReducerInterface } from "./type/interface/redux/reducer";
import Home from "./pages/home/index";

import Login from "./pages/login";
import MainPage from "./pages/Main";
import Register from "./pages/register";
import AuthApi from "./core/api/Auth/Auth.api";
import { LOGIN } from "./core/reducers/user/UserAction";
import Friends from "./pages/friend";
import Profile from "./pages/profile";
import Recommend from "./pages/recommend";
import ChatPage from "./pages/chat";

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
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/recommend" element={<Recommend />}></Route>
<<<<<<< HEAD

            <Route path="*" element={<div>error page</div>}></Route>
=======
            <Route path="/chat" element={<ChatPage />}></Route>
>>>>>>> a2251f37e842cb7c8f285b57211bf4e634063b32
            <Route path="/home" element={<Home />}></Route>
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
