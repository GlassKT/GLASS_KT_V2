import { useDispatch } from "react-redux";
import AuthApi from "../api/Auth/Auth.api";
import { LOGIN } from "../reducers/user/UserAction";

const useLogin = () => {
  const dispatch = useDispatch();

  const LoginCheck = async () => {
    const value = await AuthApi.loginCheck();
    console.log(value);
    if (value) {
      dispatch({
        type: LOGIN,
      });
    }
  };

  return LoginCheck;
};

export default useLogin;
