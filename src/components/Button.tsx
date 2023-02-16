import React from "react";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width: string;
  height: string;
  borderRadius: string;
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
  disabled?: boolean;
  className: string;
};

const Button = ({
  className,
  onClick,
  width,
  height,
  borderRadius,
  children,
  backgroundColor,
  color,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
      }}
      disabled={disabled}
      color={color}
    >
      {children}
    </button>
  );
};

export default Button;
