import { useForm } from "react-hook-form";
import { BiCheckCircle } from "react-icons/bi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../../redux/features/userSlice";

const Login = () => {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form handler
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Submit handler
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await dispatch(
        loginUser({
          userEmail: data.email,
          userPassword: data.password,
        })
      ).unwrap();

      console.log("Login Success:", result);

      toast.success(`Welcome back, ${result.userName || "User"}!`);
      reset();
      navigate("/"); // redirect to home after login
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.message || "Login failed. Please check your credentials.");
      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-black py-5">
      <div className="flex flex-col md:flex-row max-w-7xl">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-10 md:p-12 bg-black flex flex-col justify-center border border-white rounded-tl-2xl rounded-bl-2xl border-r-0">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Login to Your Account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
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

            {/* Password */}
            <div>
              <label className="block text-white font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full p-3 border-white border rounded-lg text-white bg-transparent focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition cursor-pointer ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              Register
            </a>
          </p>
        </div>

        {/* Right Hero Section */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-700 p-5 flex-col justify-center text-white rounded-tr-2xl rounded-br-2xl">
          <h2 className="text-2xl font-extrabold mb-4 leading-tight">
            Welcome Back to Builder X Club.
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Access your projects, collaborate with your team, and deploy your
            creations faster.
          </p>
          <ul className="space-y-3 text-sm text-indigo-100">
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
          <div className="mt-10 w-full h-60 bg-indigo-700 rounded-xl shadow-lg flex items-center justify-center">
            <img
              src="https://i.pinimg.com/736x/f9/69/dc/f969dcbe2ad33218968e4dfded1c6bff.jpg"
              alt="Login illustration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
