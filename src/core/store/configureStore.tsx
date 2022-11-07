import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "../reducers/user/UserReducers";
import chatReducer from "../reducers/chat/ChatReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  userReducer,
  chatReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

const ConfigureStore = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ConfigureStore;
