import React, { useEffect, useState } from "react";
import Day from "../day/Day";
import "./plan.scss";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../../../../state";
import ButtonShell from "../../../../../UiComponents/atom/ButtonShell/ButtonShell";
import InputField from "../../../../../UiComponents/atom/input/InputField";

interface IProps {
  click: React.Dispatch<React.SetStateAction<boolean>>;
}

const Plan = (props: IProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const usersPlan = useSelector((state: State) => state.usersPlan);
  const { getPlanById, getPlanDays, deletePlan, changePlaneName } =
    bindActionCreators(actionCreators, dispatch);
  const [planName, setPlanName] = useState("");
  const [unlockEdit, setUnlockEdit] = useState(false);
  useEffect(() => {
    getPlanById(user.plan_id);
    getPlanDays(user.plan_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleNameChange = () => {
    const value = {
      name: planName,
      planId: usersPlan.id,
    };
    changePlaneName(value);
    props.click(false);
  };
  const isCreator = () => {
    return usersPlan.creator_id === user.id;
  };
  return (
    <div className="plan">
      <div className="plan__content">
        {isCreator() && (
          <div className="lock">
            <ButtonShell
              type="monoCube"
              onClick={() => {
                setUnlockEdit(!unlockEdit);
              }}
            >
              +
            </ButtonShell>
          </div>
        )}

        {unlockEdit && (
          <div className="planTools">
            <div className="planInformation">
              <InputField
                change={(inputValue: any) => setPlanName(inputValue)}
                placeholder="Plan name"
                type="text"
              />
              <ButtonShell type="mono" onClick={() => handleNameChange()}>
                Change
              </ButtonShell>
              <ButtonShell
                type="mono"
                onClick={() => {
                  deletePlan(usersPlan.id);
                  props.click(false);
                }}
              >
                Delete plan
              </ButtonShell>
            </div>
          </div>
        )}

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
