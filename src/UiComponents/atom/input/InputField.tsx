import React from "react";
import "./inputField.scss";
import { GiOrangeSlice } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const inputAnimation = {
  open: {
    borderRadius: "25px",
    boxShadow: [
      "inset 0px 0px 0px #d3d3d3, inset 0px -0px 0px rgb(240, 240, 240)",
      "inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff",
    ],
  },
  closed: {
    borderRadius: "25px",
    boxShadow: [
      "inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff",
      "inset 0px 0px 0px #d3d3d3, inset 0px -0px 0px rgb(240, 240, 240)",
    ],
  },
};

interface IProps {
  placeholder?: string;
  type?: string;
  icon?: any;
  change?: any;
}

const InputField = (props: IProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="input"
        whileInView="open"
        variants={inputAnimation}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="input__content">
          {props.icon ?? <GiOrangeSlice />}

          <input
            type={props.type ?? "text"}
            placeholder={props.placeholder ?? "SET PLACEHOLDER"}
            onChange={(e) => props.change(e.target.value)}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InputField;
