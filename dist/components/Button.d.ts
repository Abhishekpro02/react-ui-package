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
declare const Button: ({ children, onClick, color, variant, style, disabled }: PropsType) => React.JSX.Element;
export { Button };
