import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { hotelReducer } from "./hotel/state";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
