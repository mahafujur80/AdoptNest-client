'use client'

import { useState } from "react";
import {  Button } from "@heroui/react";
import { FaPaw } from "react-icons/fa";
import Link from 'next/link'
import ProfileDropdown from "./DropDownProlile";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
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
          <Link href="/login"><Button>Login</Button></Link>
          <Link href="/signup"><Button>Create Profile</Button></Link>
          
         {/* dropdown  */}
         <ProfileDropdown/>
        </div>


        {/* menue btn */}
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
      </header>

      {/* moblie menu  */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
             <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-pets" className="font-medium " >
              All Pets
            </Link>
          </li>

            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="/login" > <Button className="w-full">Login</Button></Link>
              <Link href="/signup" > <Button className="w-full">Sign Up</Button></Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}