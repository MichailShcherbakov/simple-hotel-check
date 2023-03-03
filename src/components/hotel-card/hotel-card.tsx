import { UiLikeButton } from "../../ui-kit/like-btn";
import { UiRating } from "../../ui-kit/rating";
import { DateTime } from "luxon";

export type HotelCardProps = {
  title: string;
  checkInDate: Date;
  numDays: number;
  rating: number;
  price: number;
  pinned?: boolean;
};

export function HotelCard(props: HotelCardProps) {
  const { title, checkInDate, numDays, rating, price, pinned } = props;
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex flex-row items-center justify-between">
        <p className="text-gray-500 font-base font-light">{title}</p>
        <UiLikeButton value={pinned} />
      </div>
      <div className="flex flex-row items-center gap-4">
        <p className="text-gray-400 font-normal text-sm">
          {DateTime.fromJSDate(checkInDate).toFormat("dd LLLL, yyyy")}
        </p>
        <hr className="w-2.5" />
        <p className="text-gray-400 font-normal text-sm">{numDays} дней</p>
      </div>
      <div className="flex flex-row  items-center justify-between">
        <UiRating value={rating} />
        <div className="flex flex-row items-center gap-2">
          <span className=" text-xs font-light text-gray-400">Price:</span>
          <p className="text-base font-normal text-gray-500">{price} ₽</p>
        </div>
      </div>
    </div>
  );
}
