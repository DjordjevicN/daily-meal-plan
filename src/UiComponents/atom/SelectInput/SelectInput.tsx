import React from "react";
import "./SelectInput.scss";
import { GiOrangeSlice } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const inputAnimation = {
  open: {
    borderRadius: "25px",
    opacity: 1,
    boxShadow: [
      "inset 0px 0px 0px #d3d3d3, inset 0px -0px 0px rgb(240, 240, 240)",
      "inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff",
    ],
  },
  closed: {
    borderRadius: "25px",
    opacity: 0,
    boxShadow: [
      "inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff",
      "inset 0px 0px 0px #d3d3d3, inset 0px -0px 0px rgb(240, 240, 240)",
    ],
  },
};
interface IProps {
  placeholder: string;
  icon?: any;
  change?: any;
  options: any;
}
const SelectInput = (props: IProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="select-wrapper"
        whileInView="open"
        variants={inputAnimation}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="select-wrapper__content">
          {props.icon ?? <GiOrangeSlice />}

          <select
            name="activity"
            onChange={(e) => props.change(e.target.value)}
          >
            <option disabled selected>
              {props.placeholder}
            </option>
            {props.options.map((item: any) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.option}
                </option>
              );
            })}
          </select>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SelectInput;