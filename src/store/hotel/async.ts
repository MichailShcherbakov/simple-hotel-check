import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest, all, fork, select } from "redux-saga/effects";
import { RootState } from "..";
import { GetHotelsOptions, HotelApi } from "../../api/hotels";
import {
  requestHotelsAction,
  setHotelsAction,
  setHotelsRequestStatusAction,
} from "./actions";
import { HotelRequestStatusEnum } from "./state";
import { Hotel } from "./type";

export function* getHotels(action: PayloadAction<GetHotelsOptions>) {
  try {
    const hotels: Hotel[] = yield call(HotelApi.getHotels, action.payload);

    yield put({ type: setHotelsAction.type, payload: { hotels } });
    yield put({
      type: setHotelsRequestStatusAction.type,
      payload: { status: HotelRequestStatusEnum.HOTELS_RECEIVED },
    });
  } catch (error) {
    yield put({
      type: setHotelsRequestStatusAction.type,
      payload: { status: HotelRequestStatusEnum.HOTELS_REQUEST_FAILED },
    });
  }
}

export function* loadInitialHotels() {
  const criteria = yield select((state: RootState) => state.hotels.criteria);

  yield put({
    type: requestHotelsAction.type,
    payload: criteria,
  });
}

export function* watchHotelsRequest() {
  yield all([
    yield fork(loadInitialHotels),
    yield takeLatest(requestHotelsAction.type, getHotels),
  ]);
}
