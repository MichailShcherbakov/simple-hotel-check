import clsx from "clsx";

export type UiTextFieldProps = {
  id: string;
  label: string;
  error?: boolean;
  helperText?: string;
};

export const UiTextField: React.FC<UiTextFieldProps> = props => {
  const { id, label, error, helperText } = props;

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
        type="text"
        className={clsx("p-4 border border-gray-100 rounded", {
          "text-red-300": error,
        })}
      />
      {error && <span className=" text-xs text-red-300">{helperText}</span>}
    </div>
  );
};
