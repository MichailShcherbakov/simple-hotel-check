import React from "react";
import { usePinHotel, usePinnedHotels } from "../../../store/hotel/hooks";
import { Hotel } from "../../../store/hotel/type";
import { HotelCard } from "../../hotel-card";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";

export type PinnedHotelListOrderBy = {
  price?: "ASC" | "DESC";
  rating?: "ASC" | "DESC";
};

export type PinnedHotelListProps = {
  orderBy?: PinnedHotelListOrderBy;
};

function orderByFn(
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

export function PinnedHotelList(props: PinnedHotelListProps) {
  const { orderBy } = props;

  const { hotels } = usePinnedHotels();
  const { isPinned, pinHotel, unpinHotel } = usePinHotel();

  const onPin = React.useCallback((suggestionId: string) => {
    pinHotel(suggestionId);
  }, []);

  const onUnpin = React.useCallback((suggestionId: string) => {
    unpinHotel(suggestionId);
  }, []);

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
      {Object.values(hotels)
        .sort((a, b) => orderByFn(a, b, orderBy))
        .map(hotel => (
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
