import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Registration successful!");
      reset();
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-black py-10">
      <div className="flex flex-col md:flex-row max-w-6xl">
        {/* Left Hero Section */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-700 p-5 flex-col justify-center text-white rounded-tl-2xl rounded-bl-2xl">
          
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Join Our Builder X Club.
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Unlock a world of collaborative tools and custom platform building.
            Fast, secure, and intuitive.
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
              alt="Register image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-10 md:p-12 bg-black flex flex-col justify-center border border-white rounded-tr-2xl rounded-br-2xl border-l-0">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Create Your Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-white font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 border-white border rounded-lg  text-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border rounded-lg focus:outline-none text-white"
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full p-3 border rounded-lg focus:outline-none text-white"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
