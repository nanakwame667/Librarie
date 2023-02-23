import React from "react";

export type InputfieldProps = {
  className: string;
  label?: string;
  requested?: boolean;
  placeholder?: string;
  value: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputfield = ({
  className,
  label,
  type,
  requested,
  placeholder,
  value,
  onChange,
  autoComplete,
  required,
}: InputfieldProps) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor="label" className=" text-title font-medium text-lg">
        {label}
        {requested ? (
          <span className="ml-2 text-lg text-primary">*</span>
        ) : null}
      </label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  );
};

export default Inputfield;
