import React, { ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, value, onChange, ...props }) => {
  return (
    <div className="mb-2 border rounded-lg">
      {props.label && <label className="text-textColor">{props.label}</label>}
      <input
        value={value}
        className="bg-fgCard min-w-[300px] w-full py-2 px-4 rounded-lg text-textColor"
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? "error-message" : undefined}
        {...props}
      />
      {error && <p className="text-brand text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
