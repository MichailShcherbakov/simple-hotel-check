import { DateTime } from "luxon";
import { AppBar } from "../components/app-bar";
import { Carousel } from "../components/carousel";
import { HotelCard } from "../components/hotel-card";
import { LogOutButton } from "../components/log-out-btn";
import { UiButton } from "../ui-kit/btn";
import { UiPaper } from "../ui-kit/paper";
import { UiTextField } from "../ui-kit/text-field";
import { UiToggleButton } from "../ui-kit/toggle-btn";

export function HomePage() {
  return (
    <div className="relative w-screen h-screen flex flex-col bg-gray-10">
      <AppBar title="Simple Hotel Check" LeftSlot={<LogOutButton />} />
      <div className="flex flex-row w-full h-full items-center justify-center overflow-hidden">
        <div className="container flex flex-row h-full gap-6 pb-6">
          <div className="flex flex-col gap-6 w-min h-full">
            <UiPaper className="w-90">
              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <UiTextField
                    id="location"
                    label="Локация"
                    labelClassName="text-medium"
                  />
                  <UiTextField
                    id="check-in-date"
                    label="Дата заселения"
                    labelClassName="text-medium"
                  />
                  <UiTextField
                    id="num-of-days"
                    type="number"
                    min={0}
                    max={999}
                    label="Количество дней"
                    labelClassName="text-medium"
                  />
                </div>
                <UiButton>Найти</UiButton>
              </form>
            </UiPaper>
            <UiPaper className="flex flex-col gap-8 w-full h-full overflow-hidden">
              <p className="text-2xl text-gray-500 font-medium">Избранное</p>
              <div className="flex flex-row items-center gap-2">
                <UiToggleButton label="Рейтинг" />
                <UiToggleButton label="Цена" disabled />
              </div>
              <div className="flex flex-col gap-4 w-full h-full overflow-auto">
                <HotelCard
                  pinned
                  title="Moscow Marriott Grand Hotel"
                  checkInDate={new Date()}
                  numDays={1}
                  rating={3}
                  price={23924}
                />
                <hr className="w-full h-0 border-t border-t-gray-400/20" />
                <HotelCard
                  pinned
                  title="Moscow Marriott Grand Hotel"
                  checkInDate={new Date()}
                  numDays={1}
                  rating={3}
                  price={23924}
                />
                <hr className="w-full h-0 border-t border-t-gray-400/20" />
                <HotelCard
                  pinned
                  title="Moscow Marriott Grand Hotel"
                  checkInDate={new Date()}
                  numDays={1}
                  rating={3}
                  price={23924}
                />
                <hr className="w-full h-0 border-t border-t-gray-400/20" />
                <HotelCard
                  pinned
                  title="Moscow Marriott Grand Hotel"
                  checkInDate={new Date()}
                  numDays={1}
                  rating={3}
                  price={23924}
                />
                <hr className="w-full h-0 border-t border-t-gray-400/20" />
                <HotelCard
                  pinned
                  title="Moscow Marriott Grand Hotel"
                  checkInDate={new Date()}
                  numDays={1}
                  rating={3}
                  price={23924}
                />
                <hr className="w-full h-0 border-t border-t-gray-400/20" />
                <HotelCard
                  pinned
                  title="Moscow Marriott Grand Hotel"
                  checkInDate={new Date()}
                  numDays={1}
                  rating={3}
                  price={23924}
                />
              </div>
            </UiPaper>
          </div>
          <UiPaper className="flex flex-col w-full px-8 py-12 gap-7 overflow-hidden">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center gap-5">
                <p className="text-3xl text-gray-500 font-medium">Отели</p>
                <span>{">"}</span>
                <p className="text-3xl text-gray-500 font-medium">Москва</p>
              </div>
              <div>
                <p className="text-2xl text-green-400 font-normal">
                  {DateTime.fromJSDate(new Date()).toFormat("dd LLLL, yyyy")}
                </p>
              </div>
            </div>
            <div className="w-full">
              <Carousel />
            </div>
            <div className="flex flex-row item-center">
              <p className="font-light text-gray-500 text-base">
                Добавлено в Избранное: {3} отеля
              </p>
            </div>
            <div className="flex flex-col w-full h-full overflow-auto gap-4">
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
              <hr className="w-full h-0 border-t border-t-gray-400/20" />
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
              <hr className="w-full h-0 border-t border-t-gray-400/20" />
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
              <hr className="w-full h-0 border-t border-t-gray-400/20" />
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
              <hr className="w-full h-0 border-t border-t-gray-400/20" />
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
              <hr className="w-full h-0 border-t border-t-gray-400/20" />
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
              <hr className="w-full h-0 border-t border-t-gray-400/20" />
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
              <hr className="w-full h-0 border-t border-t-gray-400/20" />
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
              <hr className="w-full h-0 border-t border-t-gray-400/20" />
              <HotelCard
                pinned
                title="Moscow Marriott Grand Hotel"
                checkInDate={new Date()}
                numDays={1}
                rating={3}
                price={23924}
              />
            </div>
          </UiPaper>
        </div>
      </div>
    </div>
  );
}
