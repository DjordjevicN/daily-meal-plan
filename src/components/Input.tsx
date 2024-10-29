import React, { ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <div className={`${className} border rounded-lg mb-2`}>
      {props.label && <label className="text-textColor">{props.label}</label>}
      <input
        value={value}
        className="min-w-[300px] w-full py-2 px-4 rounded-lg text-textPrimary bg-transparent"
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
