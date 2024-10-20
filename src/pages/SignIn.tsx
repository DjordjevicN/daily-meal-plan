import { DevTool } from "@hookform/devtools";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useAddUser } from "../queryHooks/useUsersData";
import Input from "../components/Input";

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
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IUser>();

  const { mutate: addUser } = useAddUser();

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
    reset();
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-bgCard">
      <div className="">
        <div>
          <img
            src="/images/LOGO-MAIN.png"
            alt="logo"
            className="w-52 mx-auto mb-5"
          />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            <Input
              {...register("username", {
                required: { value: true, message: "Username is required" },
              })}
              type="text"
              placeholder="User name"
              onChange={async ({ target }) => {
                setValue("username", (target as HTMLInputElement).value);
              }}
            />
            <Input
              {...register("email", {
                validate: (value) => {
                  if (!value?.includes("@")) {
                    return "Invalid email";
                  }
                },
              })}
              type="text"
              placeholder="Example@gmail.com"
              onChange={async ({ target }) => {
                setValue("email", (target as HTMLInputElement).value);
              }}
            />
            <Input
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
              type="password"
              placeholder="Password"
              onChange={async ({ target }) => {
                setValue("password", (target as HTMLInputElement).value);
              }}
            />
            <button
              className="mt-1 bg-brand text-white p-2 w-full rounded-lg"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
