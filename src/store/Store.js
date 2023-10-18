import { configureStore } from "@reduxjs/toolkit"; // replace create store in redux
import cakeSlice from "../featchers/cake/CakeSlice";
import icecreamSlice from "../featchers/icecream/icecram";
// import logger from "redux-logger";
import userSlice from "../featchers/users/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    icecream: icecreamSlice,
    users: userSlice,
  },
  // middleware: (getDefault) => getDefault().concat(logger),
});

export default store;
