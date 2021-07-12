import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch } from "react-redux";
import rootReducer from "./combineReducers";
// eslint-disable-next-line import/imports-first
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["organizations"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const persistor = persistStore(store);
