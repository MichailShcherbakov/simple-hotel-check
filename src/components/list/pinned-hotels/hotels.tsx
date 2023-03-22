import React from "react";
import {
  PinnedHotelListOrderBy,
  usePinHotel,
  usePinnedHotels,
} from "../../../store/hotel/hooks";
import { HotelCard } from "../../hotel-card";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";

export type PinnedHotelListProps = {
  orderBy?: PinnedHotelListOrderBy;
};

export function PinnedHotelList(props: PinnedHotelListProps) {
  const { orderBy } = props;

  const { hotels } = usePinnedHotels(orderBy);
  const { isPinned, pinHotel, unpinHotel } = usePinHotel();

  const onPin = React.useCallback(
    (suggestionId: string) => {
      pinHotel(suggestionId);
    },
    [pinHotel],
  );

  const onUnpin = React.useCallback(
    (suggestionId: string) => {
      unpinHotel(suggestionId);
    },
    [unpinHotel],
  );

  return (
    <div className="flex flex-col w-full h-full overflow-auto pr-3 gap-4 scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded scrollbar-thumb-green-400 scrollbar-track-gray-50">
      {!Object.values(hotels).length && (
        <div className="flex flex-col items-center text-sm">
          <p>Чтобы добавить отель в изранное </p>
          <p className="flex flex-row items-center">
            <span>нажмите на</span>
            <HeartIcon className="text-gray-100 w-4 h-4 mx-1" />
            <span>сердечко</span>
          </p>
        </div>
      )}
      {hotels.map(hotel => (
        <HotelCard
          pinned={isPinned(hotel.suggestionId)}
          key={hotel.suggestionId}
          suggestionId={hotel.suggestionId}
          title={hotel.hotelName}
          checkIn={hotel.checkIn}
          checkOut={hotel.checkOut}
          rating={hotel.stars}
          price={hotel.priceFrom}
          onPin={onPin}
          onUnpin={onUnpin}
        />
      ))}
    </div>
  );
}
