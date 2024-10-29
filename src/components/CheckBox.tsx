import React, { useEffect } from "react";
import check from "../assets/icons/check.svg";

interface CheckBoxProps {
  onChange?: (value: boolean) => void;
  className?: string;
  label?: string;
  value?: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  onChange,
  className,
  label,
  value,
}) => {
  const [checked, setChecked] = React.useState(value || false);

  useEffect(() => {
    if (!onChange) return;
    onChange(checked);
  }, [checked, onChange]);
  return (
    <div
      className={`${className} cursor-pointer flex items-center`}
      onClick={() => setChecked(!checked)}
    >
      {!checked ? (
        <div className="w-4 h-4 rounded-sm border border-textColor"></div>
      ) : (
        <div className="w-4 h-4 rounded-sm border border-dark">
          <img src={check} alt="" className="" />
        </div>
      )}
      {label && <p className="text-textColor ml-2">{label}</p>}
    </div>
  );
};
