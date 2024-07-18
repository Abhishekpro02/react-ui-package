import * as React from "react";
import { ReactNode } from "react";

type ButtonVariant = "default" | "success" | "danger";

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  color?: string;
  variant?: ButtonVariant;
  style?: React.CSSProperties;
  disabled?: boolean;
};

const Button = ({ children, onClick, color, variant = "default", style, disabled }: PropsType) => {
  const getBackgroundColor = () => {
    if (color) return color;
    switch (variant) {
      case "success":
        return "green";
      case "danger":
        return "red";
      default:
        return "blue";
    }
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "1em",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: getBackgroundColor(),
        color: "white",
        border: "none",
        outline: "none",
        ...style,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
