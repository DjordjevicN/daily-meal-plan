import React, { useEffect } from "react";
import check from "../assets/icons/check.svg";

interface CheckBoxProps {
  onChange?: (value: boolean) => void;
  className?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ onChange, className }) => {
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    if (!onChange) return;
    onChange(checked);
  }, [checked, onChange]);
  return (
    <div
      className={`${className} cursor-pointer`}
      onClick={() => setChecked(!checked)}
    >
      {!checked ? (
        <div className="w-4 h-4 rounded-sm border border-textColor"></div>
      ) : (
        <div className="w-4 h-4 rounded-sm border border-brand">
          <img src={check} alt="" className="" />
        </div>
      )}
    </div>
  );
};
