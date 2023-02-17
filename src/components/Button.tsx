import React from "react";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

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
      }}
      disabled={disabled}
      color={color}
    >
      {children}
    </button>
  );
};

export default Button;
