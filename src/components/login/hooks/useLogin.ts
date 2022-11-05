import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import AuthApi from "../../../core/api/Auth/Auth.api";
import { LOGIN } from "../../../core/reducers/user/UserAction";

const useLogin = () => {
  const idRef = useRef<HTMLInputElement>(null); // id
  const pwRef = useRef<HTMLInputElement>(null); // pw

  const dispatch = useDispatch();

  const loginRequest = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault(); // 새로고침 막기

      const value = await AuthApi.login({
        id: idRef.current.value,
        pw: pwRef.current.value,
      });

      if (value) {
        dispatch({
          type: LOGIN,
        });
      }
    },
    []
  );

  return { idRef, pwRef, loginRequest };
};

export default useLogin;
