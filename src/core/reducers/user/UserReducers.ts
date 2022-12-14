import { CustomAction } from "../../../type/interface/redux/action";
import { UserState } from "../../../type/interface/redux/user/user.interface";
import { LOGIN, LOGOUT } from "./UserAction";
import { userState } from "./UserState";

const UserReducer = (state: UserState = userState, action: CustomAction) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        password: false,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
