import { useGetUserByEmail } from "../queryHooks/useUsersData";
import {
  useAddNewPlan,
  useDeletePlan,
  useMealPlanByOwnerId,
} from "../queryHooks/useMealPlanData";
import plus from "../assets/icons/plus.svg";
import { freshPlan } from "../utils/initialData";

export const PlanList = () => {
  const { data: users } = useGetUserByEmail("nikola@gmail.com");
  const user = users?.data[0];
  const { data: plans } = useMealPlanByOwnerId(user?.id);
  const usersPlans = plans?.data || [];
  const deletePlan = useDeletePlan();
  const addNewPlan = useAddNewPlan();

  const createNewPlan = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    const newPlan = { ...freshPlan, id: newId };
    addNewPlan.mutate(newPlan);
  };
  const removePlan = (id: string) => {
    deletePlan.mutate(id);
  };
  return (
    <div className="max-w-[500px] mx-auto pb-20">
      <h1>Plan List</h1>
      <h2>{user?.username}</h2>
      <ul>
        {usersPlans?.length > 0 &&
          usersPlans?.map((plan: any) => (
            <li key={plan.id}>
              <div className="w-full h-32 bg-slate-200 mb-4 p-2 rounded-lg">
                <h3>
                  Plan {plan.name}-{plan.id}
                </h3>
                <p>Plan description</p>
                <input type="radio" name="planSelection" value={plan} />
                <button onClick={() => removePlan(plan.id)}>Remove</button>
              </div>
            </li>
          ))}
      </ul>
      <button onClick={createNewPlan} className="flex items-center gap-1">
        <img src={plus} alt="plus" />
        <p>Create new plan</p>
      </button>
    </div>
  );
};
