"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./FormIput";
// import { signIn } from "@/auth";

const initialData = {
  email: "",
  password: "",
};

function Login() {
  const [values, setValues] = useState(initialData);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   await signIn("credentials", { email, password })


    // } catch (error) {
    //   console.log(error);
    // }
  
  };

  // const inputs = [
  //   {
  //     id: 1,
  //     name: "email",
  //     type: "text",
  //     placeholder: "Enter the Email",
  //     required: true,
  //   },
  //   {
  //     id: 2,
  //     name: "password",
  //     type: "password",
  //     placeholder: "Enter the Password",
  //     required: true,
  //   },
  // ];
  // const onChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  
  function isFormValid() {
    return email &&
      email.trim() !== "" &&
      password &&
      password.trim() !== ""
      ? true
      : false;
  }

  console.log("Email", email);
  console.log("Password", password);

  

  const redirectToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="h-screen w-full relative font-heading text-xs sm:text-lg md:text-xl lg:text-2xl">
      <div className="flex flex-col justify-center items-center border-t border-green-500 border-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 rounded-md shadow-lg lg:w-[30%] max-w-lg">
        <div>
          <h1 className="text-green-500 font-bold text-3xl text-center uppercase py-4 underline font-heading">
            Login To Continue
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col">
            <input name="email" value={email} className="w-full p-2 outline-none border-b border-green-500 font-fontInput" type="email" placeholder="Enter the email" onChange={(e) => setEmail(e.target.value)} />
            <input name="password" value={password} className="w-full p-2 outline-none border-b border-green-500 font-fontInput" type="password" placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} />
          {/* {inputs.map((item) => (
              <FormInput
                key={item.id}
                {...item}
                value={values[item.name]}
                onChange={onChange}
              />
            ))} */}
            <button className="disabled:bg-gray-500 p-3 mt-4 rounded-md bg-green-500 text-white font-semibold font-fontInput" disabled={!isFormValid()}>
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            <p className="mt-2 font-fontInput">
              Not registered?{" "}
              <span
                className="cursor-pointer text-green-500 font-semibold"
                onClick={redirectToRegister}
              >
                Click Here
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
