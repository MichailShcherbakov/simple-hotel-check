import clsx from "clsx";
import React from "react";
import "./btn.scss";

export type UiButtonProps = {
  type?: "button" | "submit";
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

export function UiButton({ className, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "ui-btn-bg text-white font-medium rounded py-3 border-2 border-transparent px-9 enabled:hover:cursor-pointer enabled:active:cursor-pointer disabled:opacity-60",
        className,
      )}
    />
  );
}
