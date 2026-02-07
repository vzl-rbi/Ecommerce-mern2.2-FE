import React from "react";
import { Link } from "react-router-dom";
interface Props {
  type: string;
}
const Form: React.FC<Props> = ({ type }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-indigo-950/30"></div>

        <div className="relative z-10 w-full max-w-md">
          {/* Logo & Title */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 via-red-600 to-indigo-700 bg-clip-text text-transparent">
              Murim
            </h1>
            <p className="mt-3 text-gray-400 text-lg">
              {type === "register" ? "Join The Realm" : "Welcome back, warrior"}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {type === "register" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
                    placeholder="Sect Leader Chen"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
                  placeholder="••••••••"
                  required
                />
              </div>
              {type === "register" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
                    placeholder="••••••••"
                    required
                  />
                </div>
              )}
              {type === "login" && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-amber-400 bg-gray-800 border-gray-700 rounded focus:ring-amber-400"
                    />
                    <span className="text-sm text-gray-400">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-amber-400 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-600 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
              >
                {type === "register" ? "Sign up" : "Sign in"}
              </button>
            </form>
          </div>

          {/* Switch to Register or Login */}
          {type === "register" ? (
            <p className="text-center mt-8 text-gray-500 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-amber-400 hover:underline font-semibold"
              >
                Sign in
              </Link>
            </p>
          ) : (
            <p className="text-center mt-8 text-gray-500 text-sm">
              New to Murim?{" "}
              <Link
                to="/register"
                className="text-amber-400 hover:underline font-semibold"
              >
                Create an account
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
