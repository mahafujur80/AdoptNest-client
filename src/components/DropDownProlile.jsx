"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfileDropdown({ user }) {
    const router = useRouter()

    const handleLogOut = async () => {
        authClient.signOut()
        toast.success('Hope You Will Be Back')
        router.push('/')

    }
    const [open, setOpen] = useState(false);
    return (
        <div className="relative inline-block">

            <button
                onClick={() => setOpen(!open)}
                className="flex items-center"
            >
                <Avatar>
                    <Avatar.Image alt="John Doe" src={user?.image} />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
            </button>

            {open && (
                <div className="absolute z-100 right-0 mt-3 w-52 rounded-xl border bg-white p-2 shadow-lg">

                    <div className="border-b pb-2 mb-2">
                        <p className="font-semibold truncate">{user?.name}</p>
                        <p className="text-sm text-gray-500 truncate">
                            {user?.email}
                        </p>
                    </div>

                    <Link
                        href="/dashboard"
                        className="block rounded-lg px-3 py-2 hover:bg-gray-100"
                    >
                        Dashboard
                    </Link>

                    <button
                        onClick={handleLogOut}
                        className="w-full rounded-lg px-3 py-2 text-left text-red-500 hover:bg-red-50"
                    >
                        Logout
                    </button>

                </div>
            )}
        </div>
        // <div className="relative group inline-block">

        //     {/* profile icon */}
        //     <button className="flex items-center">
        //         <Avatar>
        //             <Avatar.Image alt="John Doe" src={user?.image} />
        //             <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        //         </Avatar>
        //     </button>

        //     {/* dropdown */}
        //     <div className="absolute right-0 mt-3 w-52 rounded-xl border bg-white p-2 shadow-lg 
        //               opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        //               transition-all duration-200">

        //         <div className="border-b pb-2 mb-2">
        //             <p className="font-semibold truncate">{user?.name}</p>
        //             <p className="text-sm text-gray-500 truncate">{user?.email}</p>
        //         </div>

        //         <Link
        //             href="/dashboard"
        //             className="block rounded-lg px-3 py-2 hover:bg-gray-100"
        //         >
        //             Dashboard
        //         </Link>

        //         <button onClick={handleLogOut} className="w-full rounded-lg px-3 py-2 text-left text-red-500 hover:bg-red-50">
        //             Logout
        //         </button>

        //     </div>
        // </div>
    );
}