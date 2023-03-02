import clsx from "clsx";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

export type UiRatingProps = {
  /** starts with 1 */
  value?: number;
  onChange?: (value: number) => void;
};

export const UiRating: React.FC<UiRatingProps> = props => {
  const { value = 0, onChange } = props;

  function clickHandler(idx: number) {
    onChange?.(idx + 1);
  }

  return (
    <div className="flex flex-row items-center gap-0.5">
      {new Array(5).fill(0).map((_, idx) => (
        <StarIcon
          className={clsx("text-rad-400 cursor-pointer", {
            "text-yellow-400": value >= idx + 1,
            "text-yellow-300": value < idx + 1,
          })}
          onClick={() => clickHandler(idx)}
        />
      ))}
    </div>
  );
};
