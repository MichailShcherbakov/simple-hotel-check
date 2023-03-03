import { createAction } from "@reduxjs/toolkit";
import { GetHotelsOptions } from "../../api/hotels";
import { HotelRequestStatusEnum } from "./state";
import { Hotel } from "./type";

export const setHotelsRequestStatusAction = createAction<{
  status: HotelRequestStatusEnum;
}>("setHotelsRequestStatusAction");

export const requestHotelsAction = createAction<GetHotelsOptions>(
  "requestHotelsAction",
);

export const setHotelsAction = createAction<{ hotels: Hotel[] }>(
  "setHotelsAction",
);

export const setHotelCriteriaAction = createAction<GetHotelsOptions>(
  "setHotelCriteriaAction",
);

export const pinHotelAction = createAction<{ suggestionId: string }>(
  "pinHotelAction",
);

export const unpinHotelAction = createAction<{ suggestionId: string }>(
  "unpinHotelAction",
);
