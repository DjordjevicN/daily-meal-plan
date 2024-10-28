import { useForm, SubmitHandler } from "react-hook-form";
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
    reset();
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh]">
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
            className="mt-1 bg-salt text-light p-2 w-full rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
