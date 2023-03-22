import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { GetHotelsOptions } from "../../api/hotels";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  pinHotelAction,
  requestHotelsAction,
  setHotelCriteriaAction,
  unpinHotelAction,
} from "./actions";
import { HotelRequestStatusEnum } from "./state";
import { Hotel } from "./type";

export function useHotelCriteria() {
  const criteria = useAppSelector(state => state.hotels.criteria);
  const dispatch = useAppDispatch();

  function setHotelCriteria(options: GetHotelsOptions) {
    dispatch(setHotelCriteriaAction(options));
  }

  return {
    setHotelCriteria,
    criteria,
  };
}

export function useHotels() {
  const hotels = useAppSelector(state => state.hotels.all);
  const isLoading = useAppSelector(
    state => state.hotels.status === HotelRequestStatusEnum.HOTELS_REQUESTED,
  );
  const isError = useAppSelector(
    state =>
      state.hotels.status === HotelRequestStatusEnum.HOTELS_REQUEST_FAILED,
  );

  const dispatch = useAppDispatch();

  function loadHotels(options: GetHotelsOptions) {
    dispatch(requestHotelsAction(options));
  }

  return {
    loadHotels,
    hotels,
    isLoading,
    isError,
  };
}

export function usePinHotel() {
  const pinned = useAppSelector(state => state.hotels.pinned);

  const dispatch = useAppDispatch();

  function isPinned(suggestionId: string) {
    return !!pinned[suggestionId];
  }

  function pinHotel(suggestionId: string) {
    dispatch(pinHotelAction({ suggestionId }));
  }

  function unpinHotel(suggestionId: string) {
    dispatch(unpinHotelAction({ suggestionId }));
  }

  return {
    isPinned,
    pinHotel,
    unpinHotel,
  };
}

export type PinnedHotelListOrderBy = {
  price?: "ASC" | "DESC";
  rating?: "ASC" | "DESC";
};

export function orderHotelsBy(
  a: Hotel,
  b: Hotel,
  orderBy: PinnedHotelListOrderBy = { price: "ASC" },
) {
  if (orderBy.rating === "ASC") {
    return a.stars === b.stars ? 0 : a.stars < b.stars ? -1 : 1;
  } else if (orderBy.rating === "DESC") {
    return a.stars === b.stars ? 0 : a.stars > b.stars ? -1 : 1;
  } else if (orderBy.price === "ASC") {
    return a.priceFrom === b.priceFrom ? 0 : a.priceFrom < b.priceFrom ? -1 : 1;
  }

  return a.priceFrom === b.priceFrom ? 0 : a.priceFrom > b.priceFrom ? -1 : 1;
}

const selectPinnedHotels = createSelector(
  (state: RootState) => state.hotels.pinned,
  (_: RootState, orderBy: PinnedHotelListOrderBy) => orderBy,
  (pinnedHotels, orderBy) =>
    Object.values(pinnedHotels).sort((a, b) => orderHotelsBy(a, b, orderBy)),
);

export function usePinnedHotels(
  orderBy: PinnedHotelListOrderBy = { price: "ASC" },
) {
  const hotels = useAppSelector(state => selectPinnedHotels(state, orderBy));

  return {
    hotels,
  };
}
