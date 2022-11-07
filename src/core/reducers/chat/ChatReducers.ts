import { CustomAction } from "../../../type/interface/redux/action";
import { CHANGE_ROOM } from "./ChatAction";
import { chatState } from "./ChatState";

interface ChatReducerType {
  user: string;
  me: string;
  roomNum: number;
}

const ChatReducer = (
  state: ChatReducerType = chatState,
  action: CustomAction
) => {
  switch (action.type) {
    case CHANGE_ROOM:
      return {
        ...state,
        user: action.data.user,
        me: action.data.me,
        roomNum: action.data.roomNum,
      };
    default:
      return state;
  }
};

export default ChatReducer;
