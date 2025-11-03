import { useForm } from "react-hook-form";
import { BiCheckCircle, BiHide, BiShow } from "react-icons/bi";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../../redux/features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await dispatch(
        loginUser({
          userEmail: data.email,
          userPassword: data.password,
        })
      ).unwrap();

      toast.success(`Welcome back, ${result.userName || "User"}!`);
      reset();
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.message || "Login failed. Check your credentials.");
      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-black py-5 px-2 md:px-0 xl:px-4">
      <div className="flex flex-col md:flex-row w-11/12 bg-black rounded-2xl shadow-lg">
        {/* left section */}
        <div className="w-full md:w-1/2 p-4 md:p-6 bg-black flex flex-col justify-center border border-white rounded-xl md:border-r-0 md:rounded-r-none">
          <h1 className="text-2xl lg:text-3xl font-bold text-indigo-700 mb-6 text-center">
            Login to Your Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border-white border rounded-lg text-white bg-transparent focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="block text-white font-medium mb-1">
                Password
              </label>
              <div className="flex items-center sm:justify-between border border-white rounded-xl overflow-hidden">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&#_]+$/,
                      message:
                        "must include uppercase, lowercase, number, and special character",
                    },
                  })}
                  className="flex p-3 text-white bg-black focus:outline-none w-4/5 sm:flex-1"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-3 text-white transition cursor-pointer w-1/12 sm:w-10"
                >
                  {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-500 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>

        {/* right Section */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-700 p-8 flex-col justify-center rounded-l-none rounded-xl text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
            Welcome Back to Builder X Club
          </h2>
          <p className="text-indigo-200 mb-6 text-lg md:text-base">
            Access your projects, collaborate with your team, and deploy your
            creations faster.
          </p>
          <ul className="space-y-3 text-sm md:text-base text-indigo-100 mb-6">
            <li className="flex items-center space-x-2">
              <BiCheckCircle className="w-5 h-5 text-white" />
              <span>Real-time collaboration</span>
            </li>
            <li className="flex items-center space-x-2">
              <BiCheckCircle className="w-5 h-5 text-white" />
              <span>Secure data storage</span>
            </li>
            <li className="flex items-center space-x-2">
              <BiCheckCircle className="w-5 h-5 text-white" />
              <span>One-click deployment</span>
            </li>
          </ul>
          <div className="w-full h-48 md:h-60 bg-indigo-600 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
            <img
              src="https://i.pinimg.com/736x/f9/69/dc/f969dcbe2ad33218968e4dfded1c6bff.jpg"
              alt="Login illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
