import { useHotels } from "../../../store/hotel/hooks";
import { HotelCard } from "../../hotel-card";

export function HotelList() {
  const { hotels } = useHotels();

  return (
    <div className="flex flex-col w-full h-full overflow-auto gap-4">
      {Object.values(hotels).map(hotel => (
        <HotelCard
          // pinned
          key={hotel.hotelId}
          title={hotel.hotelName}
          checkIn={hotel.checkIn}
          checkOut={hotel.checkOut}
          rating={hotel.stars}
          price={hotel.priceFrom}
        />
      ))}
    </div>
  );
}
