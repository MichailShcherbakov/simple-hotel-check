import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import {
  pinHotelAction,
  unpinHotelAction,
  requestHotelsAction,
  setHotelCriteriaAction,
  setHotelsAction,
  setHotelsRequestStatusAction,
} from "./actions";
import { Hotel } from "./type";

export enum HotelRequestStatusEnum {
  IDLE = "IDLE",
  HOTELS_REQUESTED = "HOTELS_REQUESTED",
  HOTELS_RECEIVED = "HOTELS_RECEIVED",
  HOTELS_REQUEST_FAILED = "HOTELS_REQUEST_FAILED",
}

export type HotelState = {
  all: Record<number, Hotel>;
  pinned: Record<string, Hotel>;
  criteria: {
    location: string;
    checkIn: string;
    checkOut: string;
  };
  status: HotelRequestStatusEnum;
};

function getInitialHotelCriteria() {
  const checkIn = DateTime.now();
  const checkOut = checkIn.plus({ days: 1 });

  return {
    location: "Москва",
    checkIn: checkIn.toISODate(),
    checkOut: checkOut.toISODate(),
  };
}

const initialState: HotelState = {
  all: {},
  pinned: {},
  criteria: getInitialHotelCriteria(),
  status: HotelRequestStatusEnum.IDLE,
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setHotelsRequestStatusAction, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(requestHotelsAction, state => {
        state.status = HotelRequestStatusEnum.HOTELS_REQUESTED;
      })
      .addCase(setHotelCriteriaAction, (state, action) => {
        state.criteria = action.payload;
      })
      .addCase(setHotelsAction, (state, action) => {
        state.all = action.payload.hotels.reduce<Record<number, Hotel>>(
          (all, hotel) => {
            all[hotel.hotelId] = hotel;
            return all;
          },
          {},
        );
      })
      .addCase(pinHotelAction, (state, action) => {
        const suggestion = Object.values(state.all).find(
          hotel => hotel.suggestionId === action.payload.suggestionId,
        );

        if (!suggestion) return;

        state.pinned[action.payload.suggestionId] = suggestion;
      })
      .addCase(unpinHotelAction, (state, action) => {
        delete state.pinned[action.payload.suggestionId];
      });
  },
});

export const hotelReducer = hotelSlice.reducer;
