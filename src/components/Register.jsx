"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { registerNewUser } from "@/services/register";
import FormInput from "./FormIput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const router = useRouter();
  const [values, setValues] = useState(initialData);
  const [error, setError] = useState("");

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter your Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Enter your Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Create New Password",
      errorMessage:
        "Password should contain 7-10 characters including at least 1 special character, 1 Number and 1 Letter",
      pattern:
        "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{7,10}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords didn't matched ",
      pattern: values.password,
      required: true,
    },
  ];

  async function handleRegisteronSubmit() {
    const response = await registerNewUser(values);
    console.log(response);
    if (response.success) {
      setValues(initialData);
      setError("");
      router.push("/");
    }
    else {
      toast.error(response.message, {
        position: "top-right",
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const redirectToSignIn = () => {
    router.push("/");
  };

  function isFormValid() {
    return values &&
      values.email &&
      values.email.trim() !== "" &&
      values &&
      values.name &&
      values.name.trim() !== "" &&
      values &&
      values.password &&
      values.password.trim() !== "" &&
      values.confirmPassword &&
      values.confirmPassword.trim() !== ""
      ? true
      : false;
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  console.log(values);

  return (
    <div className="h-screen w-full relative font-heading text-xs sm:text-lg md:text-xl lg:text-2xl">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center border-t border-green-500 border-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 rounded-md shadow-lg lg:w-[30%] max-w-lg">
        <div className="">
          <h1 className="text-green-500 font-bold text-3xl text-center uppercase py-4 underline font-heading">
            Register Here
          </h1>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="w-full flex flex-col">
            {inputs.map((item) => (
              <FormInput
                key={item.id}
                {...item}
                value={values[item.name]}
                onChange={onChange}
              />
            ))}
            <button onClick={handleRegisteronSubmit}
              className="disabled:bg-gray-500 p-3 mt-4 rounded-md bg-green-500 text-white font-semibold font-fontInput"
              disabled={!isFormValid()}
            >
              Register
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            <p className="mt-2 font-fontInput">
              Already have an account ?{" "}
              <span
                onClick={redirectToSignIn}
                className="cursor-pointer text-green-500 font-semibold"
              >
                Login Here
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
