import { UiLikeButton } from "../../ui-kit/like-btn";
import { UiRating } from "../../ui-kit/rating";
import { DateTime, Interval } from "luxon";
import React from "react";
import { ReactComponent as HouseIcon } from "../../assets/icons/house.svg";

export type HotelCardProps = {
  suggestionId: string;
  title: string;
  checkIn: string;
  checkOut: string;
  rating: number;
  price: number;
  pinned?: boolean;
  withLogo?: boolean;
  onPin?: (suggestionId: string) => void;
  onUnpin?: (suggestionId: string) => void;
};

function _HotelCard(props: HotelCardProps) {
  const {
    title,
    suggestionId,
    checkIn,
    checkOut,
    rating,
    price,
    pinned,
    withLogo,
    onPin,
    onUnpin,
  } = props;

  function pinnedChangedHandler(flag: boolean) {
    flag ? onPin?.(suggestionId) : onUnpin?.(suggestionId);
  }

  return (
    <div className="flex flex-row w-full pb-4 gap-6 border-b border-b-gray-50 last:border-b-0">
      {withLogo && (
        <div className="flex flex-col flex-shrink-0 items-center justify-center bg-green-400/5 rounded-full w-16 h-16">
          <HouseIcon className="text-green-400" />
        </div>
      )}
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between gap-4">
          <p className="text-gray-500 font-base font-light">{title}</p>
          <UiLikeButton value={pinned} onChange={pinnedChangedHandler} />
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="text-gray-400 font-normal text-sm">
            {DateTime.fromISO(checkIn).toFormat("dd LLLL, yyyy")}
          </p>
          <hr className="w-2.5" />
          <p className="text-gray-400 font-normal text-sm">
            {Interval.fromDateTimes(
              DateTime.fromISO(checkIn),
              DateTime.fromISO(checkOut),
            ).length("days")}{" "}
            дней
          </p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <UiRating value={rating} readOnly />
          <div className="flex flex-row items-center gap-2">
            <span className=" text-xs font-light text-gray-400">Price:</span>
            <p className="text-base font-normal text-gray-500">{price} ₽</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const HotelCard = React.memo(_HotelCard);
