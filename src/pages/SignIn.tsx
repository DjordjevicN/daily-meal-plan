import { DevTool } from "@hookform/devtools";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useAddUser } from "../queryHooks/useUsersData";

interface IUser {
  id: string;
  username: string;
  password: string;
  role?: string;
  avatar?: string;
  email?: string;
  subscriptionLevel?: number;
  subscriptionEndDate?: string;
  createdAt: string;
  updatedAt?: string;
  mealPlanIds?: string[];
}

export const SignIn = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const { mutate: addUser } = useAddUser();
  console.log(errors);

  const onSubmit = (data: any) => {
    const newUser: IUser = {
      ...data,
      role: "user",
      avatar: "https://i.pravatar.cc/300",
      subscriptionLevel: data.subscriptionLevel || 0,
      subscriptionEndDate: data.subscriptionEndDate || "",
      createdAt: moment().toISOString(),
      updatedAt: moment().toISOString(),
      mealPlanIds: data.mealPlanIds || ["1"],
    };
    addUser(newUser);
  };
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <div
        className="bg-slate-500"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1432457990754-c8b5f21448de?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      <div className="bg-slate-300 flex justify-center items-center">
        <div className="max-w-56 mx-auto">
          <p>Sign in</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            <div className="flex flex-col">
              <input
                {...register("username", {
                  required: { value: true, message: "Username is required" },
                })}
                className="mb-1"
                type="text"
                placeholder="User name"
              />
              {errors.username && <p>{errors.username.message}</p>}
              <input
                {...register("email", {
                  validate: (value) => {
                    if (!value?.includes("@")) {
                      return "Invalid email";
                    }
                  },
                })}
                className="mb-1"
                type="text"
                placeholder="example@gmail.com"
              />
              {errors.email && <p>{errors.email.message}</p>}
              <input
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
                className="mb-1"
                type="password"
                placeholder="Password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button className="mt-3 bg-slate-800 text-white p-3" type="submit">
              Sign in
            </button>
          </form>{" "}
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};
