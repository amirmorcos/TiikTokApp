import { configureStore } from "@reduxjs/toolkit";
import { authenticationApi } from "./authenticationApi";
import appSlice from "./appSlice";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    app: appSlice.reducer,
    userState: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authenticationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
