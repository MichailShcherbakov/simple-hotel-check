import React from "react";
import { UiButton } from "./ui-kit/btn";
import { UiRating } from "./ui-kit/rating";
import { UiTextField } from "./ui-kit/text-field";
import { UiToggleButton, UiToggleButtonStateEnum } from "./ui-kit/toggle-btn";

export default function App() {
  const [toggleBtnState, setToggleBtnState] = React.useState(
    UiToggleButtonStateEnum.ASC,
  );

  const [ratingState, setRatingState] = React.useState(0);

  return (
    <div className="flex flex-col p-6 gap-6">
      <UiButton>Войти</UiButton>
      <UiTextField id="sing-in" label="Логин" />
      <UiTextField
        id="sing-in-error"
        error
        label="Логин"
        helperText="Неверный пароль"
      />
      <UiToggleButton
        label="Рейтинг"
        state={toggleBtnState}
        onChange={state => setToggleBtnState(state)}
      />
      <UiToggleButton label="Цена" disabled />
      <UiRating value={ratingState} onChange={val => setRatingState(val)} />
    </div>
  );
}
