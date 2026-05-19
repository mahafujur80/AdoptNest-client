'use client'

import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import { FaPaw } from "react-icons/fa";
import Link from 'next/link'
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";
import { DashboardDrawer } from "./MenuDrawer";

export default function DashboardNavbar() {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathName = usePathname()
    console.log(pathName)

    return (
        <nav className="relative sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className=" mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-4">

                    <Link href='/'>
                        <div className="flex items-center gap-3">
                            <FaPaw />
                            <p className="font-bold text-2xl">Adopt<span className='text-emerald-500'>Nest</span></p>
                        </div>
                    </Link>
                </div>



                {/* menue btn */}
                <div className="flex items-center gap-5 ">

                    <Avatar>
                        <Avatar.Image alt="John Doe" src={user?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s'} />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>

                    {
                        user &&
                        <div className="w-50 max-md:hidden">
                            <h2 className="text-lg font-medium truncate" >{user?.name}</h2>
                            <p className="truncate text-xs">{user?.email}</p>
                        </div>
                    }

                    {/* <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button> */}
                    <div className="md:hidden">
                        <DashboardDrawer />
                    </div>
                </div>
            </header>

            {/* moblie menu  */}
            {
                isMenuOpen && (
                    <div className="absolute top-16   bg-blue-100 w-1/2 h-screen border-t border-separator md:hidden">
                        <div className="border h-full justify-between gap-2 p-4 text-center">
                            <Link href="/" className={`${'/' === pathName ? 'bg-emerald-500 text-white' : ''} font-medium block`}>Home</Link>
                            <Link href="/dashboard/my-request" className={`${'/dashboard/my-request' === pathName ? 'bg-emerald-500 text-white' : ''} font-medium block`} >
                                My Request
                            </Link>
                            <Link href="/dashboard/add-pets" className={`${'/dashboard/add-pets' === pathName ? 'bg-emerald-500 text-white' : ''} font-medium block`} >
                                Add Pets
                            </Link>
                            <Link href="/dashboard/my-listing" className={`${'/dashboard/my-listing' === pathName ? 'bg-emerald-500 text-white' : ''} font-medium block`} >
                                My Listing
                            </Link>
                        </div>
                    </div>
                )
            }
        </nav >
    );
}