import { useForm } from "react-hook-form";
import { useRegister } from "@/api/AuthApi";

export type RegisterFormData = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { registerUser, isPending } = useRegister();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    registerUser(data);
  });

  return (
    <form
      className="flex flex-col gap-4 px-10 py-20 container mx-auto max-w-[400px]"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl">Register account</h2>
      <div className="flex flex-col">
        <label className="flex flex-col">
          Name
          <input
            className="border-2"
            type="text"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </label>
        <label className="flex flex-col">
          Phone
          <input
            className="border-2"
            type="text"
            {...register("phoneNumber", { required: "This field is required" })}
          />
          {errors.phoneNumber && (
            <span className="text-red-600">{errors.phoneNumber.message}</span>
          )}
        </label>
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
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
