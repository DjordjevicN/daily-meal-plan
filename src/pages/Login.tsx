import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Input from "../components/Input";
interface IFormInput {
  username: string;
  password: string;
}

const Login = () => {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // addUser(data);
    console.log(data);
    reset();
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <img
          src="/images/LOGO-MAIN.png"
          alt="logo"
          className="w-52 mx-auto mb-5"
        />
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("username", {
              required: { value: true, message: "Username is required" },
            })}
            error={errors.username?.message}
            type="text"
            placeholder="User name"
            onChange={async ({ target }) => {
              setValue("username", (target as HTMLInputElement).value);
            }}
          />
          <Input
            {...register("password", {
              required: { value: true, message: "Password is required" },
            })}
            error={errors.password?.message}
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
            Login
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default Login;
