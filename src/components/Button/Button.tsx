import React, { ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  variant?: string;
}

function getButtonStyles(variant) {
  return classes.base;
}

const Button = ({ children, variant }: ButtonProps) => {
  const className = getButtonStyles(variant);
  return <button className={className}>{children}</button>;
};

export default Button;
