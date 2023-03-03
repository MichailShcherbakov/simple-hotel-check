import { Hotel } from "../store/hotel/type";

const API_URL = "http://engine.hotellook.com/api/v2/cache.json";

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
      `${API_URL}?location=${location}&currency=${currency}&checkIn=${checkIn}&checkOut=${checkOut}&limit=${limit}`,
    );

    const data: Hotel[] = await req.json();

    const hotels = data.map(hotel => ({
      ...hotel,
      checkIn: options.checkIn,
      checkOut: options.checkOut,
    }));

    return hotels;
  },
};
