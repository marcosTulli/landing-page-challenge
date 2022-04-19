import React, { ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  variant?: "base" | "primary" | "outlined" | "outlinedNav";
  onClick?: () => void;
}

function getButtonStyles(variant: string) {
  return classes[variant];
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  const className = getButtonStyles(variant);
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
};

export default Button;
