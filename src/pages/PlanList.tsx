import {
  useGetUserByEmail,
  useUpdateUserById,
} from "../queryHooks/useUsersData";
import {
  useAddNewPlan,
  useDeletePlan,
  useMealPlanByOwnerId,
} from "../queryHooks/useMealPlanData";
import plus from "../assets/icons/plus.svg";
import { freshPlan } from "../utils/initialData";
import noPlanImage from "../assets/newPlaneIBg.webp";
import { User } from "../utils/types";

export const PlanList = () => {
  const { data: users } = useGetUserByEmail("nikola@gmail.com");
  const user = users?.data[0];
  const { data: plans } = useMealPlanByOwnerId(user?.id);
  const usersPlans = plans?.data || [];
  const { mutate: deletePlan } = useDeletePlan();
  const { mutate: addNewPlan } = useAddNewPlan();
  const { mutate: updateUser } = useUpdateUserById();

  const createNewPlan = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    const newPlan = { ...freshPlan, id: newId };
    addNewPlan(newPlan);
  };
  const removePlan = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    deletePlan(id);
  };

  const activatePlan = async (id: string) => {
    const userData: User = {
      ...user,
      activeMealPlanId: id,
    };
    updateUser(userData);
    window.location.href = "/creator";
  };

  return (
    <div className="max-w-[500px] mx-auto pb-20">
      <h1>Plan List</h1>
      <h2>
        {user?.username}-{user?.id}
      </h2>
      <ul>
        {usersPlans?.length > 0 &&
          usersPlans?.map((plan: any) => (
            <li
              className="relative"
              key={plan.id}
              onClick={() => activatePlan(plan.id)}
            >
              <div className="bg-black w-full h-full absolute rounded-lg opacity-[0.3]"></div>

              <div
                className="w-full h-32 mb-4 p-2 rounded-lg"
                style={{
                  backgroundImage: `url(${noPlanImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-20 text-light">
                  <h3 className="text-lg font-bold">
                    Plan {plan.name}-{plan.id}
                  </h3>
                  <button
                    className="absolute top-3 right-3 text-brand font-extrabold"
                    onClick={(event) => removePlan(plan.id, event)}
                  >
                    Remove
                  </button>
                </div>
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
