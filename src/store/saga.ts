import { all, spawn, call } from "redux-saga/effects";
import { watchHotelsRequest } from "./hotel/async";

export function* rootSaga() {
  const watchers = [watchHotelsRequest];

  const retrySagas = yield watchers.map(watcher =>
    spawn(function* () {
      while (true) {
        try {
          return yield call(watcher);
        } catch (e) {
          console.error(e);
        }
      }
    }),
  );

  yield all(retrySagas);
}
