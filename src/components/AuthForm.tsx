"use client";
import React from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/src/helpers/formValidation";
import "@/app/globals.css"
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

type AuthFormProps = {
  formType: string;
  buttonText: string;
};

const formInputs = [
  { label: "Username", name: "username", type: "text", id: "username" },
  { label: "Email", name: "email", type: "email", id: "email" },
  { label: "Password", name: "password", type: "password", id: "password" },
];

const AuthForm: React.FC<AuthFormProps> = ({ formType, buttonText }) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  
  const handleNavigate = () => {
    formType == "Login" ? router.push("/register") : router.push("/login")
  }
  return (
    <section className="flex items-center justify-center w-dvw h-dvh">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2 m-10"
      >
        {formInputs.map((input) => (
          <section
            key={input.id}
            className="flex flex-col items-center gap-2 mt-2"
          >
            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor={input.id}
                  className="block font-medium text-gray-900 text-sm/6"
                >
                  {input.label}
                </label>
                <div className="mt-2">
                  <input
                    type={input.type}
                    id={input.id}
                    {...register(input.name as keyof Inputs)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            {errors[input.name as keyof FieldErrors<Inputs>] && (
              <span className="text-red-600">
                {errors[input.name as keyof Inputs]?.message as string}
              </span>
            )}
          </section>
        ))}
        <button
          type="submit"
          // className="w-20 p-2 mt-4 text-white bg-teal-500 rounded-lg"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
        >
          {buttonText}
        </button>
      </form>
      <div>
         {formType === "Login"
              ? "Don't have an account?"
              : "Already have an account"}
        <button onClick={handleNavigate}  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2">{formType == "Login" ? "Register" : "Login"}</button>
      </div>
    </section>
  );
};

export default AuthForm;
