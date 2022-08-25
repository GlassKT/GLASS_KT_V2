import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "../reducers/user/UserReducers";

const rootReducer = combineReducers({
  userReducer,
});
const store = createStore(rootReducer);

const ConfigureStore = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ConfigureStore;
