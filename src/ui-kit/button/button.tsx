import React from "react";
import "./button.scss";

export type UiButtonProps = {
  children: React.ReactNode;
};

export const UiButton: React.FC<UiButtonProps> = props => {
  const { children } = props;

  return (
    <button
      className="ui-btn-bg text-white font-medium rounded py-1.5 px-9 hover:cursor-pointer active:cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};
