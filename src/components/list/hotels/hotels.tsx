import React from "react";
import { useHotels, usePinHotel } from "../../../store/hotel/hooks";
import { UiLoading } from "../../../ui-kit/loading";
import { HotelCard } from "../../hotel-card";

export function HotelList() {
  const { hotels, isLoading, isError } = useHotels();
  const { isPinned, pinHotel, unpinHotel } = usePinHotel();

  const onPin = React.useCallback((suggestionId: string) => {
    pinHotel(suggestionId);
  }, []);

  const onUnpin = React.useCallback((suggestionId: string) => {
    unpinHotel(suggestionId);
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-auto pr-3 gap-4 scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded scrollbar-thumb-green-400 scrollbar-track-gray-50">
      {isLoading && (
        <div className="flex flex-row w-full h-full pt-4 justify-center">
          <UiLoading size={32} className="text-green-400" />
        </div>
      )}
      {!isLoading &&
        Object.values(hotels).map(hotel => (
          <HotelCard
            withLogo
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
      {!isLoading && !Object.values(hotels).length && (
        <p className="text-sm w-full text-center">
          По вашему запросу ничего не найдено
        </p>
      )}
      {isError && (
        <p className="text-sm w-full text-center">
          Что-то пошло не так. Повторите запрос позже
        </p>
      )}
    </div>
  );
}
