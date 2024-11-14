import React from "react";

interface RadioProps {
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
}

export const Radio = ({
  name,
  value,
  checked,
  onChange,
  label,
  disabled,
}: RadioProps) => {
  return (
    <label
      className={`flex items-center space-x-2 cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-blue-600 h-5 w-5"
        disabled={disabled}
      />
      {label && <span className="ml-1 text-gray-700">{label}</span>}
    </label>
  );
};
