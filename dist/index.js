import * as React from 'react';
import { useState } from 'react';

const Button = ({ children, onClick, color, variant = "default", style, disabled }) => {
    const getBackgroundColor = () => {
        if (color)
            return color;
        switch (variant) {
            case "success":
                return "green";
            case "danger":
                return "red";
            default:
                return "blue";
        }
    };
    return (React.createElement("button", { onClick: onClick, style: {
            padding: "10px 20px",
            fontSize: "1em",
            borderRadius: "5px",
            cursor: disabled ? "not-allowed" : "pointer",
            backgroundColor: getBackgroundColor(),
            color: "white",
            border: "none",
            outline: "none",
            ...style,
        }, disabled: disabled }, children));
};

const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return { count, increment, decrement };
};

export { Button, useCounter };
