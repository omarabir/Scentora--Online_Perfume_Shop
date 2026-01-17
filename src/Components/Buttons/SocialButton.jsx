"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SocialButton = () => {
  const searchParams = useSearchParams();
  const handleSignIn = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: searchParams.get("callbackUrl") || "/",
    });
    if (result.ok) {
      toast.success("Login successful!");
    } else {
      toast.error("Login failed. Please try again.");
    }
  };
  return (
    <div>
      <button
        onClick={handleSignIn}
        className="flex items-center gap-2 px-4 py-2 border border-transparent text-xs font-bold rounded-sm text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <FaGoogle className="h-4 w-4" />
        <span>GOOGLE</span>
      </button>
    </div>
  );
};

export default SocialButton;
