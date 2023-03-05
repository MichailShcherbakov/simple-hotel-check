import { Hotel } from "../store/hotel/type";

export type GetHotelsOptions = {
  location: string;
  checkIn: string;
  checkOut: string;
  currency?: string;
  limit?: number;
};

export const HotelApi = {
  async getHotels(options: GetHotelsOptions): Promise<Hotel[]> {
    const {
      location,
      checkIn,
      checkOut,
      currency = "rub",
      limit = 10,
    } = options;

    const req = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }?location=${location}&currency=${currency}&checkIn=${checkIn}&checkOut=${checkOut}&limit=${limit}`,
    );

    const data: Hotel[] = await req.json();

    const hotels = data.map(hotel => ({
      ...hotel,
      suggestionId: `${hotel.hotelId}-${hotel.locationId}-${hotel.priceFrom}-${checkIn}-${checkOut}`,
      checkIn,
      checkOut,
    }));

    return hotels;
  },
};
