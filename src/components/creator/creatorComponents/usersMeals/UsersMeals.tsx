import React, { useEffect, useState } from "react";
import "./UsersMeals.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../../state";
import { bindActionCreators } from "redux";
import SingleMealDisplay from "../singleMealDisplay/SingleMealDisplay";

const UsersMeals = () => {
  const dispatch = useDispatch();

  const usersMeals = useSelector((state: State) => state.usersMeals);
  const user = useSelector((state: State) => state.user);
  const { getUsersMeals } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    getUsersMeals(+user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="usersMeals">
      <div className="usersMeals__content">
        {usersMeals.map((item) => {
          return <SingleMealDisplay key={item.id} details={item} />;
        })}
      </div>
    </div>
  );
};

export default UsersMeals;
