import { DateTime } from "luxon";
import { AppBar } from "../components/app-bar";
import { Carousel } from "../components/carousel";
import { HotelSearchForm } from "../components/forms/hotel-search";
import { HotelList } from "../components/list/hotels";
import { PinnedHotelList } from "../components/list/pinned-hotels";
import { LogOutButton } from "../components/log-out-btn";
import { useHotelCriteria, usePinnedHotels } from "../store/hotel/hooks";
import { UiPaper } from "../ui-kit/paper";
import { UiToggleButton } from "../ui-kit/toggle-btn";

export function HomePage() {
  const { criteria } = useHotelCriteria();
  const { hotels } = usePinnedHotels();

  return (
    <div className="relative w-screen h-screen flex flex-col bg-gray-10">
      <AppBar title="Simple Hotel Check" LeftSlot={<LogOutButton />} />
      <div className="flex flex-row w-full h-full items-center justify-center overflow-hidden">
        <div className="container flex flex-row h-full gap-6 pb-6">
          <div className="flex flex-col gap-6 w-min h-full">
            <UiPaper className="w-90">
              <HotelSearchForm />
            </UiPaper>
            <UiPaper className="flex flex-col gap-8 w-full h-full overflow-hidden">
              <p className="text-2xl text-gray-500 font-medium">Избранное</p>
              <div className="flex flex-row items-center gap-2">
                <UiToggleButton label="Рейтинг" />
                <UiToggleButton label="Цена" disabled />
              </div>
              <PinnedHotelList />
            </UiPaper>
          </div>
          <UiPaper className="flex flex-col w-full px-8 py-12 gap-7 overflow-hidden">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center gap-5">
                <p className="text-3xl text-gray-500 font-medium">Отели</p>
                <span>{">"}</span>
                <p className="text-3xl text-gray-500 font-medium">
                  {criteria.location}
                </p>
              </div>
              <div>
                <p className="text-2xl text-green-400 font-normal">
                  {DateTime.fromISO(criteria.checkIn).toFormat("dd LLLL, yyyy")}
                </p>
              </div>
            </div>
            <div className="w-full">
              <Carousel />
            </div>
            <div className="flex flex-row item-center">
              <p className="font-light text-gray-500 text-base">
                Добавлено в Избранное: {Object.values(hotels).length} отеля
              </p>
            </div>
            <HotelList />
          </UiPaper>
        </div>
      </div>
    </div>
  );
}
