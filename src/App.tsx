import React, { lazy, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReducerInterface } from "./type/interface/redux/reducer";
import Home from "./pages/home/index";
import { QueryClient, QueryClientProvider } from "react-query";

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
  const [queryClient] = useState(new QueryClient());

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {login ? (
            <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/friends" element={<Friends />}></Route>
              <Route path="/recommend" element={<Recommend />}></Route>
              <Route path="/chat/:id" element={<ChatPage />}></Route>
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
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
