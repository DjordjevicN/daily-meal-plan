import React, { useRef, useEffect } from "react";
import moreOptionsIcon from "../assets/icons/options.svg";

export interface Options {
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <img src={moreOptionsIcon} alt="menu" />
      </div>
      {options && open && (
        <div className="rounded-lg py-3 px-6 bg-dark flex flex-col gap-2 absolute right-5 top-0">
          {options.map((option: Options) => {
            return (
              <div
                onClick={() => option.action()}
                className="cursor-pointer hover:text-light text-white"
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
