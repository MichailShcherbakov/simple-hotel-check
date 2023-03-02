import clsx from "clsx";

export type TextFieldValue = string | number | readonly string[] | undefined;

export type UiTextFieldProps<TValue extends TextFieldValue> = {
  id: string;
  label: string;
  error?: boolean;
  helperText?: string;
  type?: "text" | "number";
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
    onChange,
  } = props;

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value as TValue);
  }

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={clsx("text-gray-500 font-light", {
          "text-red-300": error,
        })}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={clsx("p-3.5 border border-gray-100 rounded", {
          "text-red-300": error,
        })}
        value={value}
        onChange={changeHandler}
      />
      {error && <span className=" text-xs text-red-300">{helperText}</span>}
    </div>
  );
}
