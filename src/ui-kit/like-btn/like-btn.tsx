import clsx from "clsx";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

export type UiLikeButtonProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
};

export function UiLikeButton(props: UiLikeButtonProps) {
  const { value, onChange } = props;

  return (
    <button
      title="like-btn"
      className="flex flex-row items-center justify-center w-6 h-6"
      onClick={() => onChange?.(!value)}
    >
      <HeartIcon
        className={clsx({
          "text-red-400": value,
          "text-white stroke-gray-200 stroke-1 hover:text-gray-50": !value,
        })}
      />
    </button>
  );
}
