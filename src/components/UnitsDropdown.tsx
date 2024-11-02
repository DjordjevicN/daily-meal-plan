import React from "react";

interface UnitsDropdownProps {
  label?: string;
  value: string | undefined;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

const UnitsDropdown: React.FC<UnitsDropdownProps> = ({
  label,
  value,
  onChange,
  error,
  className,
}) => {
  return (
    <div className={`${className} border rounded-lg mb-2`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="py-2 px-4 rounded-lg text-textPrimary bg-transparent"
        aria-invalid={!!error}
        aria-describedby={error ? "error-message" : undefined}
      >
        <option value="gr">gr</option>
        <option value="serving">serving</option>
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1" id="error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default UnitsDropdown;
