import { all } from "redux-saga/effects";
import { watchHotelsRequest } from "./hotel/async";

export function* rootSaga() {
  yield all([watchHotelsRequest()]);
}
