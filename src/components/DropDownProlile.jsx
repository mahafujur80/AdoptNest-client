"use client";

import { Avatar } from "@heroui/react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function ProfileDropdown() {
    return (
        <div className="relative group inline-block">

            {/* profile icon */}
            <button className="flex items-center">
                <Avatar>
                    <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
            </button>

            {/* dropdown */}
            <div className="absolute right-0 mt-3 w-52 rounded-xl border bg-white p-2 shadow-lg 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200">

                <div className="border-b pb-2 mb-2">
                    <p className="font-semibold">User Name Munna</p>
                    <p className="text-sm text-gray-500">munna@gmail.com</p>
                </div>

                <Link
                    href="/dashboard"
                    className="block rounded-lg px-3 py-2 hover:bg-gray-100"
                >
                    Dashboard
                </Link>

                <button className="w-full rounded-lg px-3 py-2 text-left text-red-500 hover:bg-red-50">
                    Logout
                </button>

            </div>
        </div>
    );
}