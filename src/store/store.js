import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { lottoNumberReducers } from "../reducers/lottoNumbers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  numbers: lottoNumberReducers,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: hardSet,
  },
  rootReducer
);

export const store = createStore(persistedReducer, applyMiddleware(logger));

export const persisor = persistStore(store);
