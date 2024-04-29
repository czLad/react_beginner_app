import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  //do this^
  //v to prevent color to being set as any string and catach errors early on,
  //   color?: string;
  //^this syntax lets typescript compiler know color is optional
  //here color is not optional(by default would be pointless)-> color: string;
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick = () => {} }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
