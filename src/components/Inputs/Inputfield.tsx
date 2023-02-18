import React from "react";

export type InputfieldProps = {
  className: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  type: string;
  autoComplete?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputfield = ({
  className,
  label,
  type,
  required,
  placeholder,
  value,
  onChange,
  autoComplete,
}: InputfieldProps) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor="label" className=" text-title font-medium text-lg">
        {label}
        {required ? <span className="ml-2 text-lg text-primary">*</span> : null}
      </label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default Inputfield;
