import React from "react";
import { GetHotelsOptions } from "../../api/hotels";
import { useAppDispatch, useAppSelector } from "../hooks";
import { requestHotelsAction, setHotelCriteriaAction } from "./actions";

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
  };
}
