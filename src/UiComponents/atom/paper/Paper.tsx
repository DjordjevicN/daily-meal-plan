import React from "react";
import "./Paper.scss";
import { motion, AnimatePresence } from "framer-motion";

const paperAnimation = {
  open: {
    boxShadow: [
      "0px 0px 0px #d3d3d3, 0px -0px 0px rgb(240, 240, 240)",
      "13px 13px 20px #cbced1, -13px -13px 20px #fff",
    ],
  },
  closed: {
    boxShadow: [
      "13px 13px 20px #cbced1, -13px -13px 20px #fff",
      "0px 0px 0px #d3d3d3, 0px -0px 0px rgb(240, 240, 240)",
    ],
  },
};
const childAnimation = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const Paper = (props: any) => {
  return (
    <AnimatePresence>
      <motion.div
        whileInView="open"
        variants={paperAnimation}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="paper"
        style={props.style}
      >
        <motion.div
          className="paper__content"
          whileInView="open"
          variants={childAnimation}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {props.children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Paper;
