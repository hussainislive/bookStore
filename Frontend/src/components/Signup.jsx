import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || "/"; // Redirect to previous page on successful signup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfull");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.error(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <Link
        to="/"
        className="text-xl text-zinc-400 font-semibold float-end mr-[5%] mt-[2%]"
      >
        X
      </Link>
      <div className="h-screen flex items-center justify-center">
        <div id="my_modal_2" className="">
          <div className="modal-box w-full shadow-2xl">
            <h3 className="font-bold text-lg">Signup</h3>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="name"
                  className="w-80 px-3 py-2 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-red-500 text-sm">Name required*</span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-80 px-3 py-2 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Email is required*
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="password"
                  className="w-80 px-3 py-2 border rounded-md outline-none"
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
                  Signup
                </button>
                <div className="mt-2 text-sm ml-6">
                  Have an account?{" "}
                  <Link
                    to="/"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Login
                  </Link>
                  {/* Login Component */}
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
