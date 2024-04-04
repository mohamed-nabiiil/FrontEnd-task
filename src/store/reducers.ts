import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers as needed
});

export default rootReducer;
