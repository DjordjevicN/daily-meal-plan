import React from "react";
import { GiOrangeSlice } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import "./TextAreaInput.scss";

interface IProps {
  placeholder?: string;
  type?: string;
  icon?: any;
  change?: any;
  autoFocus?: any;
  value?: string;
}

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
    opacity: 0,
    borderRadius: "25px",
    boxShadow: [
      "inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff",
      "inset 0px 0px 0px #d3d3d3, inset 0px -0px 0px rgb(240, 240, 240)",
    ],
  },
};

const TextAreaInput = (props: IProps) => {
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

          <textarea
            autoFocus={props.autoFocus ?? false}
            autoComplete="off"
            placeholder={props.placeholder ?? "SET PLACEHOLDER"}
            onChange={(e) => props.change(e.target.value)}
            value={props.value}
          ></textarea>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TextAreaInput;
