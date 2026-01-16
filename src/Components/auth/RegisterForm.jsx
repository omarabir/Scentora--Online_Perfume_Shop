"use client";
import { postUser } from "@/app/actions/server/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const result = await postUser(form);
      if (result?.acknowledged) {
        toast.success("Registration successful! Please login.");
        router.push("/login");
      } else {
        toast.error("Registration failed. User may already exist.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            disabled={loading}
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className={`appearance-none relative block w-full px-4 py-3 border placeholder-gray-300 text-gray-900 rounded-full focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-white transition-colors ${
              errors.name ? "border-red-500" : "border-gray-200"
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 ml-2">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            disabled={loading}
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className={`appearance-none relative block w-full px-4 py-3 border placeholder-gray-300 text-gray-900 rounded-full focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-white transition-colors ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 ml-2">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              disabled={loading}
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
              className={`appearance-none relative block w-full px-4 py-3 border placeholder-gray-300 text-gray-900 rounded-full focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-white transition-colors ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center z-20 cursor-pointer text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                <FaEyeSlash className="h-5 w-5" />
              ) : (
                <FaEye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500 ml-2">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-400 font-light cursor-pointer"
            >
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`group relative w-full sm:w-auto flex justify-center py-3 px-8 border border-transparent text-sm font-bold rounded-full text-white transition-all uppercase tracking-wide shadow-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
