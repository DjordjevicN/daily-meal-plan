import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the form's input types
interface IFormInput {
  username: string;
  password: string;
}

const LoginForm = () => {
  // Initialize the hook with form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  // Function to handle form submission
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          {...register("username", { required: true })}
          id="username"
          type="text"
          placeholder="Enter your username"
        />
        {errors.username && <p>Username is required.</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          {...register("password", { required: "Password is required" })}
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Logindd</button>
    </form>
  );
};

export default LoginForm;
