import React from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxProps {
  name: string;
  label: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, className }) => {
  const { register } = useFormContext();

  return (
    <label className={className}>
      {label}
      <input type="checkbox" {...register(name)} />
    </label>
  );
};

export default Checkbox;
