"use client";
import { useSession, signOut } from "next-auth/react";
import React, { useState, useRef, useEffect } from "react";
import {
  FaRegUserCircle,
  FaUserCircle,
  FaSignOutAlt,
  FaCog,
  FaUser
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const AuthButton = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {status === "authenticated" ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 focus:outline-none hover:opacity-80 transition-opacity"
          >
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full w-8 h-8 object-cover border border-gray-200"
              />
            ) : (
              <FaUserCircle className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
            )}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2 z-50 overflow-hidden animation-fade-in">
              <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                <p className="text-sm font-bold text-gray-800">
                  {session?.user?.name || "Welcome!"}
                </p>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {session?.user?.email}
                </p>
              </div>

              <div className="py-2">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  <FaUser className="w-4 h-4" />
                  <span>My Profile</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  <FaCog className="w-4 h-4" />
                  <span>Settings</span>
                </Link>
              </div>

              <div className="border-t border-gray-100 mt-1 pt-1">
                <button
                  onClick={() => signOut()}
                  className="flex w-full items-center gap-3 px-5 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href="/login"
          className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
        >
          <FaRegUserCircle className="w-6 h-6 md:w-7 md:h-7" />
          <span className="hidden lg:block text-sm font-medium">Login</span>
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
