import React from "react";
import moreOptionsIcon from "../assets/icons/options.svg";

interface Options {
  name: string;
  action: () => void;
}
interface SmallOptionMenuProps {
  options?: Options[];
}

export const SmallOptionMenu: React.FC<SmallOptionMenuProps> = ({
  options,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <img src={moreOptionsIcon} alt="menu" />
      </div>
      {options && open && (
        <div className="rounded-lg py-3 px-6 bg-fgCard flex flex-col gap-2 absolute right-5 top-0">
          {options.map((option: Options) => {
            return (
              <div
                onClick={() => option.action()}
                className="cursor-pointer hover:text-paragraph"
              >
                {option.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
