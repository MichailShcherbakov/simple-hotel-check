import clsx from "clsx";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

export type UiRatingProps = {
  /** starts with 1 */
  value?: number;
  readOnly?: boolean;
  onChange?: (value: number) => void;
};

export function UiRating(props: UiRatingProps) {
  const { value = 0, readOnly, onChange } = props;

  function clickHandler(idx: number) {
    if (value === idx + 1) {
      return onChange?.(0);
    }

    onChange?.(idx + 1);
  }

  return (
    <div className="flex flex-row items-center gap-0.5 select-none">
      {new Array(5).fill(0).map((_, idx) => (
        <StarIcon
          key={idx}
          className={clsx("text-rad-400", {
            "text-yellow-400": value >= idx + 1,
            "text-yellow-300": value < idx + 1,
            "cursor-pointer": !readOnly,
          })}
          onClick={() => clickHandler(idx)}
        />
      ))}
    </div>
  );
}
