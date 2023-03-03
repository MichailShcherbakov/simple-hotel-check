import clsx from "clsx";

export type TextFieldValue = string | number | readonly string[] | undefined;

export type UiTextFieldProps<TValue extends TextFieldValue> = {
  id: string;
  type?: "text" | "number";
  label: string;
  error?: boolean;
  helperText?: string;
  labelClassName?: string;
  min?: number;
  max?: number;
  value?: TValue;
  onChange?: (value: TValue) => void;
};

export function UiTextField<TValue extends TextFieldValue>(
  props: UiTextFieldProps<TValue>,
) {
  const {
    id,
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
    const value = e.target.value as TValue;

    if (type === "number") {
      return onChange?.(
        Math.max(min, Math.min(max, value as number)) as TValue,
      );
    }

    onChange?.(value);
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
