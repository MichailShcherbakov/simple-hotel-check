import clsx from "clsx";
import "./loading.scss";

export type UiLoadingProps = {
  size: number;
  className?: string;
};

export function UiLoading(props: UiLoadingProps) {
  const { size, className } = props;

  return (
    <span
      className={clsx("ui-loading--root", className)}
      role="progressbar"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg className="ui-loading--svg " viewBox="22 22 44 44">
        <circle
          className="ui-loading--circle"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        ></circle>
      </svg>
    </span>
  );
}
