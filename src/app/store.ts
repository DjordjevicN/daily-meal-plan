import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // uses localStorage under the hood
import { combineReducers } from "redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import userReducer from "../features/userSlice";
import { appControlSlice } from "../features/appControlSlice";

// Define the root reducer manually combining all reducers
const rootReducer = combineReducers({
  user: userReducer,
  appControl: appControlSlice.reducer,
});

// Configuration object for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // specifies which reducers should be persisted
};

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Handling the persistence actions
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
