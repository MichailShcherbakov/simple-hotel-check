import clsx from "clsx";
import React from "react";
import "./btn.scss";

export type UiButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export function UiButton({ className, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "ui-btn-bg text-white font-medium rounded py-3.5 px-9 hover:cursor-pointer active:cursor-pointer",
        className,
      )}
    />
  );
}
