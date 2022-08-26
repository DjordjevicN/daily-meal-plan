import React, { useState, useEffect } from "react";

import "./Meal.scss";
import { baseUrl } from "../../constants/utilFunc";
import axios from "axios";
import { mealConst } from "../../constants/mealConst";
import { motion, AnimatePresence } from "framer-motion";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { GoCheck } from "react-icons/go";

interface IMeal {
  amount: number;
  day_id: number;
  id: number;
  meal_id: number;
  meal_type: number;
  unit: string;
}

type Props = {
  meal: IMeal;
};
const initState = {
  img: "",
  name: "",
  calories: "",
};

const getMeal = async (id: number) => {
  const value = id;
  if (value) {
    const response = await axios.post(`${baseUrl()}/get_meal_by_id`, {
      value,
    });
    return response.data[0];
  }
};
const mealAnimation = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};
const Meal: React.FC<Props> = ({ meal }) => {
  const [singleMeal, setSingleMeal] = useState(initState);
  const [iEatThis, setIEatThis] = useState(false);
  useEffect(() => {
    getMeal(meal.meal_id).then(setSingleMeal);
  }, [meal.meal_id]);
  console.log(meal);
  console.log(singleMeal);

  return (
    <AnimatePresence>
      <motion.div
        className="meal__wrapper"
        whileInView="open"
        variants={mealAnimation}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="meal_content">
          <div className="image">
            <img
              src={
                singleMeal.img
                  ? `${baseUrl()}/uploads/${singleMeal.img}`
                  : "images/noimage.png"
              }
              alt="meal"
            />
          </div>
          <div className="split">
            <div className="Information">
              <p className="mealType">{mealConst[meal.meal_type]}</p>
              <p className="mealName">{singleMeal.name}</p>
              <p className="mealServing">
                Serving <span>{`${meal.amount} ${meal.unit}`}</span>
              </p>
              <p className="mealCalories">
                Calories <span>{singleMeal.calories ?? "No data"}</span>
              </p>
            </div>
            <div className="action">
              <ButtonShell
                onClick={() => setIEatThis(!iEatThis)}
                type="mono"
                customStyle={{
                  width: "50px",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: `0px 0px 2px #a8a8a8, 0px 0px 0px 5px ${
                    iEatThis ? "#c0edc0" : "#fff"
                  },8px 8px 15px #a7aaaf, -8px -8px 15px #fff`,
                }}
                icon={<GoCheck />}
              ></ButtonShell>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Meal;
