import { FiUser } from "react-icons/fi";

const LoginCard = () => {
  return (
    <div
      className="
        w-full max-w-[380px]
        rounded-xl
        border border-gray-200
        bg-white
        px-6 py-8
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
      "
    >
      {/* Icon space */}
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
        <FiUser className="h-5 w-5 text-gray-500" />
      </div>

      {/* Card heading */}
      <div className="text-center">
        <h1 className="text-[15px] font-semibold text-gray-900">
          Login to your account
        </h1>

        <p className="mt-1 text-[11px] text-gray-500">
          Enter your details to login.
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 h-px w-full bg-gray-200" />

      {/* Space reserved for the rest of the login form */}
      <div className="min-h-[250px]" />
    </div>
  );
};

export default LoginCard;