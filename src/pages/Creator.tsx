import { IngredientsForm } from "../components/IngredientsForm";
import MealForm from "../components/MealForm";
import PlanForm from "../components/PlanForm";

export const Creator = () => {
  return (
    <div className="px-3 pt-3 pb-60">
      <h1 className="text-brand text-xl mb-6">Creator</h1>
      {/* <IngredientsForm />
      <MealForm /> */}
      <PlanForm />
    </div>
  );
};
