import React, { useEffect } from "react";
import Day from "../day/Day";
import "./plan.scss";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../../../../state";

const Plan = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const usersPlan = useSelector((state: State) => state.usersPlan);
  const { getPlanById, getPlanDays } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getPlanById(user.plan_id);
    getPlanDays(user.plan_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="plan">
      <div className="plan__content">
        {usersPlan && (
          <div className="days">
            {usersPlan.days.length > 5 &&
              usersPlan.days.map((item: any) => {
                return <Day key={item.id} dayInfo={item} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plan;
