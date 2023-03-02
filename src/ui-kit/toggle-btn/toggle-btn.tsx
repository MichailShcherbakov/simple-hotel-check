import clsx from "clsx";
import React from "react";
import { ReactComponent as SelectIcon } from "../../assets/icons/select.svg";
import "./toggle-btn.scss";

export enum UiToggleButtonStateEnum {
  ASC = "asc",
  DESC = "desc",
}

export type UiToggleButtonProps = {
  label: string;
  state?: UiToggleButtonStateEnum;
  disabled?: boolean;
  className?: string;
  onChange?: (state: UiToggleButtonStateEnum) => void;
};

const NextToggleButtonState: Record<
  UiToggleButtonStateEnum,
  UiToggleButtonStateEnum
> = {
  [UiToggleButtonStateEnum.ASC]: UiToggleButtonStateEnum.DESC,
  [UiToggleButtonStateEnum.DESC]: UiToggleButtonStateEnum.ASC,
};

export const UiToggleButton: React.FC<UiToggleButtonProps> = props => {
  const {
    label,
    state = UiToggleButtonStateEnum.DESC,
    className,
    disabled,
    onChange,
  } = props;

  function clickHandler() {
    onChange?.(NextToggleButtonState[state]);
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
      disabled={disabled}
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
};
