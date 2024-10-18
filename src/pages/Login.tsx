import { useForm, SubmitHandler } from "react-hook-form";

import { DevTool } from "@hookform/devtools";
import {
  useAddUser,
  useDeleteUser,
  useUserData,
} from "../queryHooks/useUsersData";
interface IFormInput {
  username: string;
  password: string;
}

const Login = () => {
  const { mutate: addUser } = useAddUser();
  const { mutate: deleteUser } = useDeleteUser();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const { data: users } = useUserData();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    addUser(data);
    reset();
  };

  const handleDeleteUser = (id: string) => () => {
    const user = users?.data.find((user: any) => user.id === id);
    if (user.position === "admin") return;
    deleteUser(id);
  };

  return (
    <div className="">
      <form
        className="max-w-[400px] w-[80%] mx-auto mt-32"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <input
            {...register("username")}
            id="username"
            type="text"
            placeholder="Enter your username"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="mt-3 ">
          <button type="submit">Login</button>
        </div>
      </form>

      <div>
        <p>user list</p>
        {users?.data.map((user: any) => {
          return (
            <div
              className="bg-slate-500 flex gap-3 mb-3 p-3"
              key={user.id}
              onClick={handleDeleteUser(user.id)}
            >
              <p>{user.username}</p>
              <p>{user.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Login;
