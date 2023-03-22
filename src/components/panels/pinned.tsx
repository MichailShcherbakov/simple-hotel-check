import React from "react";
import { PinnedHotelListOrderBy } from "~/store/hotel/hooks";
import { UiPaper } from "../../ui-kit/paper";
import {
  UiToggleButton,
  UiToggleButtonStateEnum,
} from "../../ui-kit/toggle-btn";
import { PinnedHotelList } from "../list/pinned-hotels";

const RATING_TOGGLE_BTN_ID = "RATING_TOGGLE_BTN_ID";
const PRICE_TOGGLE_BTN_ID = "PRICE_TOGGLE_BTN_ID";

export function PinnedHotelPanel() {
  const [orderBy, setOrderBy] = React.useState<PinnedHotelListOrderBy>({
    rating: "DESC",
  });

  const changeToggleBtnStateHandler = React.useCallback(
    (state: UiToggleButtonStateEnum, id: string) => {
      const newOrder: PinnedHotelListOrderBy = {};

      switch (id) {
        case RATING_TOGGLE_BTN_ID: {
          newOrder.rating = state;
          break;
        }
        case PRICE_TOGGLE_BTN_ID: {
          newOrder.price = state;
          break;
        }
      }

      setOrderBy(newOrder);
    },
    [],
  );

  return (
    <UiPaper className="flex flex-col gap-8 w-full h-full overflow-hidden">
      <p className="text-2xl text-gray-500 font-medium">Избранное</p>
      <div className="flex flex-row items-center gap-2">
        <UiToggleButton
          id={RATING_TOGGLE_BTN_ID}
          label="Рейтинг"
          state={orderBy.rating}
          onChange={changeToggleBtnStateHandler}
          disabled={!orderBy.rating}
        />
        <UiToggleButton
          id={PRICE_TOGGLE_BTN_ID}
          label="Цена"
          state={orderBy.price}
          onChange={changeToggleBtnStateHandler}
          disabled={!orderBy.price}
          className="cursor-pointer"
        />
      </div>
      <PinnedHotelList orderBy={orderBy} />
    </UiPaper>
  );
}
