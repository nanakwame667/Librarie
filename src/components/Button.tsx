import React from "react";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  borderRadius: string;
  children: React.ReactNode;
  backgroundColor: string;
  border?: string;
  color: string;
  disabled?: boolean;
  className: string;
};

const Button = ({
  className,
  onClick,
  border,
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
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        border: border,
      }}
      disabled={disabled}
      color={color}
    >
      {children}
    </button>
  );
};

export default Button;
