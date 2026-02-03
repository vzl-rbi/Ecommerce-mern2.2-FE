// src/pages/Auth/Register.tsx
import React, { useState } from "react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-indigo-950/30"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 via-red-600 to-indigo-700 bg-clip-text text-transparent">
            Murim
          </h1>
          <p className="mt-3 text-gray-400 text-lg">Join the realm</p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
                placeholder="Sect Leader Chen"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-600 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
            >
              Create Account
            </button>
          </form>
        </div>

        {/* Switch to Login */}
        <p className="text-center mt-8 text-gray-500 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-amber-400 hover:underline font-semibold"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
