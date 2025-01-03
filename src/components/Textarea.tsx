import React, { ChangeEvent } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="mb-2 w-full">
      {label && (
        <label className="block text-sm font-medium text-textPrimary mb-1">
          {label}
        </label>
      )}
      <textarea
        value={value}
        className="bg-transparent border min-w-[100px] min-h-10 w-full py-2 px-4 rounded-lg text-textColor"
        style={{
          backgroundColor: "transparent",
          borderColor: "#E5E7EB",
          borderWidth: "1px",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
        }}
        onChange={onChange}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
