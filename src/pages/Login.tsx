import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../features/userSlice";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { DevTool } from "@hookform/devtools";

interface IFormInput {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state: RootState) => state.user.isLogged);

  if (isLogged) {
    navigate("/home");
  }
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    dispatch(login({ id: "123", name: data.username }));
  };
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  return (
    <div className="">
      <div>
        <img src="/images/LOGO-MAIN.png" className="w-[40%] mx-auto" alt="" />
      </div>
      <form
        className="max-w-[400px] w-[80%] mx-auto mt-32"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <input
            {...register("username", { required: true })}
            id="username"
            type="text"
            placeholder="Enter your username"
          />
          {errors.username && <p>Username is required.</p>}
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <input
            {...register("password", { required: "Password is required" })}
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="mt-3 ">
          <button type="submit">Login</button>
        </div>
      </form>{" "}
      <DevTool control={control} />
    </div>
  );
};

export default Login;
