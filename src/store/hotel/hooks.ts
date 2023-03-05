import React from "react";
import { GetHotelsOptions } from "../../api/hotels";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  pinHotelAction,
  requestHotelsAction,
  setHotelCriteriaAction,
  unpinHotelAction,
} from "./actions";
import { HotelRequestStatusEnum } from "./state";

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
  const criteria = useAppSelector(state => state.hotels.criteria);

  const dispatch = useAppDispatch();

  function loadHotels(options: GetHotelsOptions) {
    dispatch(requestHotelsAction(options));
  }

  React.useEffect(() => {
    loadHotels(criteria);
  }, [criteria]);

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

export function usePinnedHotels() {
  const hotels = useAppSelector(state => state.hotels.pinned);

  return {
    hotels,
  };
}
