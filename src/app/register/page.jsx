import RegisterForm from "@/Components/auth/RegisterForm";
import SocialButton from "@/Components/Buttons/SocialButton";
import Redirect from "@/Components/Redirect";
import Link from "next/link";
import React from "react";


const page = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Redirect />
        <div className="max-w-md w-full bg-white p-8 rounded-sm shadow-sm border border-gray-100">
          <div className="border-b border-gray-100 pb-6 mb-6">
            <h2 className="text-2xl font-serif text-gray-800">
              Register your Account
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-4 font-light">
                Login with social account
              </p>
              <div className="flex gap-4">
                <SocialButton />
              </div>
            </div>

            <RegisterForm />
            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary text-center hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
