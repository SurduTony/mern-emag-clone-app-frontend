import { useForm } from "react-hook-form";
import { useLogin } from "@/api/AuthApi";

export type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { loginUser, isPending } = useLogin();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    loginUser(data);
  });

  return (
    <form
      className="flex flex-col gap-4 px-10 py-20 container mx-auto max-w-[400px]"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl">Login</h2>
      <div className="flex flex-col">
        <label className="flex flex-col">
          Email
          <input
            className="border-2"
            type="email"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </label>
        <label className="flex flex-col">
          Password
          <input
            className="border-2"
            type="password"
            {...register("password", { required: "This field is required" })}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
