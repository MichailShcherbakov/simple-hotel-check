import clsx from "clsx";
import React from "react";
import { ReactComponent as SelectIcon } from "../../assets/icons/select.svg";
import "./toggle-btn.scss";

export enum UiToggleButtonStateEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type UiToggleButtonProps = {
  id: string;
  name?: string;
  label: string;
  state?: "ASC" | "DESC";
  disabled?: boolean;
  className?: string;
  onChange?: (state: UiToggleButtonStateEnum, id: string) => void;
};

const NextToggleButtonState: Record<
  UiToggleButtonStateEnum,
  UiToggleButtonStateEnum
> = {
  [UiToggleButtonStateEnum.ASC]: UiToggleButtonStateEnum.DESC,
  [UiToggleButtonStateEnum.DESC]: UiToggleButtonStateEnum.ASC,
};

export function _UiToggleButton(props: UiToggleButtonProps) {
  const {
    id,
    label,
    state = UiToggleButtonStateEnum.ASC,
    className,
    disabled,
    onChange,
  } = props;

  function clickHandler() {
    onChange?.(NextToggleButtonState[state], id);
  }

  return (
    <button
      className={clsx(
        "flex flex-row items-center gap-1 px-2 py-1 border rounded w-min select-none",
        {
          "border-green-400": !disabled,
          "border-gray-300": disabled,
        },
        className,
      )}
      onClick={clickHandler}
    >
      <span
        className={clsx("text-sm font-base ", {
          "text-green-400": !disabled,
          "text-gray-400": disabled,
        })}
      >
        {label}
      </span>
      <SelectIcon
        className={clsx("text-green-400", {
          "text-gray-400": disabled,
          "text-green-400": !disabled,
          [`toggle-btn--${state}`]: !disabled,
        })}
      />
    </button>
  );
}

export const UiToggleButton = React.memo(_UiToggleButton);
