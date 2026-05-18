'use client'

import { useState } from "react";
import { Button } from "@heroui/react";
import { FaPaw } from "react-icons/fa";
import Link from 'next/link'
import ProfileDropdown from "./DropDownProlile";
import { authClient } from "@/lib/auth-client";

export default function NavBar() {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className=" mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-3">
            <FaPaw />
            <p className="font-bold">AdoptNest</p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-pets" className="font-medium" >
              All Pets
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          {
            (!isPending && !user) ?
              <>
                <Link href="/login"><Button variant='outline'>Login</Button></Link>
                <Link href="/signup"><Button className=" bg-emerald-500 text-white rounded-lg  font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg">Create Profile</Button></Link>
              </>
              :
              <>
                <ProfileDropdown user={user} />
              </>
          }
        </div>

        {/* menue btn */}
        <div className="flex items-center gap-5 md:hidden">
          
            <ProfileDropdown user={user}/>
        
          <button
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
          </button>
        </div>
      </header>

      {/* moblie menu  */}
      {
        isMenuOpen && (
          <div className="absolute top-16   bg-white w-full border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4 text-center">
              <li>
                <Link href="/" className="font-medium block">Home</Link>
              </li>
              <li>
                <Link href="/all-pets" className="font-medium block " >
                  All Pets
                </Link>
              </li>

             {
              (!isPending && !user)?  <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                <Link href="/login" > <Button className="w-full">Login</Button></Link>
                <Link href="/signup" > <Button className="w-full">Sign Up</Button></Link>
              </li> : <></>
             }
            </ul>
          </div>
        )
      }
    </nav >
  );
}