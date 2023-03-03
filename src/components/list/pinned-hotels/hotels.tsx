import React from "react";
import { usePinHotel, usePinnedHotels } from "../../../store/hotel/hooks";
import { HotelCard } from "../../hotel-card";

export function PinnedHotelList() {
  const { hotels } = usePinnedHotels();
  const { isPinned, pinHotel, unpinHotel } = usePinHotel();

  const onPin = React.useCallback((suggestionId: string) => {
    pinHotel(suggestionId);
  }, []);

  const onUnpin = React.useCallback((suggestionId: string) => {
    unpinHotel(suggestionId);
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-auto gap-4">
      {Object.values(hotels).map(hotel => (
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
