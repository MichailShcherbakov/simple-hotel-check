import clsx from "clsx";
import React from "react";

export type UiTextFieldProps = {
  id: string;
  name?: string;
  type?: "text" | "number" | "date" | "password" | "type" | "email";
  label: string;
  error?: boolean;
  helperText?: string;
  labelClassName?: string;
  min?: number;
  max?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function _UiTextField(props: UiTextFieldProps) {
  const {
    id,
    name,
    label,
    value,
    error,
    helperText,
    type = "text",
    labelClassName,
    onChange,
    max = Infinity,
    min = -Infinity,
  } = props;

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (type === "number") {
      e.target.value = Math.max(min, Math.min(max, Number(value))).toString();
    }

    onChange?.(e);
  }

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={clsx(
          "text-gray-500 font-light",
          {
            "text-red-300": error,
          },
          labelClassName,
        )}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={clsx("p-3 border border-gray-100 rounded", {
          "text-red-300": error,
        })}
        value={value}
        onChange={changeHandler}
        min={min}
        max={max}
      />
      {error && <span className=" text-xs text-red-300">{helperText}</span>}
    </div>
  );
}

export const UiTextField = React.memo(_UiTextField);
