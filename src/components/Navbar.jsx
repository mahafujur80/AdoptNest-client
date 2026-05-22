'use client'

import { useState } from "react";
import { Button } from "@heroui/react";
import { FaPaw } from "react-icons/fa";
import Link from 'next/link'
import ProfileDropdown from "./DropDownProlile";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const pathName = usePathname()
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className=" mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-3">
            <FaPaw  className=" bg-emerald-100 text-emerald-600 text-sm w-10 h-10 p-2 rounded-full" />
            <p className="font-bold text-2xl md:text-3xl">Adopt<span className="text-emerald-500">Nest</span></p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/" className={`${pathName === "/" ? "text-emerald-500 font-medium" : ""}  transition` } >Home</Link>
          </li>
          <li>
            <Link href="/all-pets" className={`${pathName === "/all-pets" ? "text-emerald-500 font-medium" : ""}  transition`} >
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
          
            {
              (!isPending && !user) ? <></>: <ProfileDropdown user={user}/>
            }
        
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
          <div className="absolute top-16 bg-gray-200 w-full  border-t border-b-rounded-lg border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4 text-center">
              <li>
                <Link href="/" className={`font-medium block ${pathName === "/" ? "text-white bg-emerald-500 rounded-lg p-2" : ""}`}>Home</Link>
              </li>
              <li>
                <Link href="/all-pets" className={`font-medium block ${pathName === "/all-pets" ? "text-white bg-emerald-500 rounded-lg p-2" : ""}`} >
                  All Pets
                </Link>
              </li>

             {
              (!isPending && !user)?  <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                <Link href="/login" > <Button className="w-full bg-emerald-500 text-white rounded-lg  font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg">Login</Button></Link>
                <Link href="/signup" > <Button className="w-full bg-emerald-500 text-white rounded-lg  font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg">Sign Up</Button></Link>
              </li> : <></>
             }
            </ul>
          </div>
        )
      }
    </nav >
  );
}