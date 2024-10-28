import { SmallOptionMenu } from "./SmallOptionMenu";
import { CaloriesBlock } from "./CaloriesBlock";
import plus from "../assets/icons/plus.svg";
const nutrition = {
  calories: 72,
  carbs: 33,
  fat: 120,
  protein: 50,
};

export const MealDisplayItem = ({
  meal,
  openMealSearch = () => {},
  removeMeal = () => {},
  editMeal = () => {},
}: {
  meal: any;
  openMealSearch?: () => void;
  removeMeal?: () => void;
  editMeal?: () => void;
}) => {
  return (
    <div>
      {meal.name ? (
        <div className="flex">
          <div className="w-24 h-24 rounded-xl border border-textColor">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="ml-3">
            <h1>{meal.name}</h1>
            <div className="flex gap-1">
              <p>100</p>
              <p>gr</p>
            </div>
          </div>
          <CaloriesBlock nutrition={nutrition} />
          <div className="ml-4">
            <SmallOptionMenu
              options={[
                {
                  name: "Edit",
                  action: () => {
                    editMeal();
                  },
                },
                {
                  name: "Delete",
                  action: () => {
                    removeMeal();
                  },
                },
              ]}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div
            className="w-24 h-24 rounded-xl border border-textColor flex justify-center items-center cursor-pointer"
            onClick={openMealSearch}
          >
            <img src={plus} alt="" />
          </div>
          <SmallOptionMenu
            options={[
              {
                name: "Edit",
                action: () => {
                  editMeal();
                },
              },
              {
                name: "Delete",
                action: () => {
                  removeMeal();
                },
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};
