import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "cancel";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  children,
  className,
  disabled,
  ...props
}) => {
  const colorClasses = {
    primary: "bg-salt text-white",
    secondary: "text-dark hover:text-primary",
    cancel: "bg-textPrimary text-white",
  };

  const dynamicClasses = `${colorClasses[color]} ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  }`;

  return (
    <button
      className={`${dynamicClasses} px-4 py-2 rounded w-full ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
