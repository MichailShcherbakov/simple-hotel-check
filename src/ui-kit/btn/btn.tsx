import React from "react";
import "./btn.scss";

export type UiButtonProps = {
  children: React.ReactNode;
};

export function UiButton(props: UiButtonProps) {
  const { children } = props;

  return (
    <button
      className="ui-btn-bg text-white font-medium rounded py-1.5 px-9 w-min hover:cursor-pointer active:cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}
