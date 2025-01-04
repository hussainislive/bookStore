import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          toast.success("Login Successfull");
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          // console.error(err);
          // alert("Error: " + err.response.data.message);
          toast.error("email or password is incorrect ");
          setTimeout(() => {}, 1000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box shadow-2xl">
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="email@example.com"
                className="w-80 px-3 py-2 border rounded-md outline-none "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required*</span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="password"
                className="w-80 px-3 py-2 border rounded-md outline-none "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password is required*
                </span>
              )}
            </div>
            <div className="flex justify-between mt-6 px-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700">
                Login
              </button>
              <p className="mt-2">
                Not registered?{" "}
                <Link
                  to={"/signup"}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Login;
