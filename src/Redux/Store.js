import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Slice/ChatSlice";

export const chatstore = configureStore({
  reducer: {
    pocketchat: chatReducer
  },
});
