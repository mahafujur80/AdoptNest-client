// app/not-found.js


import Link from "next/link";
import { FaPaw, FaHome } from "react-icons/fa";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Main Container */}
      <div className="text-center px-4">
        
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-emerald-400 w-32 h-32 mx-auto"></div>
          <div className="absolute inset-0 rounded-full animate-pulse opacity-30 bg-emerald-300 w-32 h-32 mx-auto"></div>
          
          <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 w-32 h-32 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <FaPaw className="text-white text-5xl" />
          </div>
        </div>

        {/* Error Content */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-emerald-600">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Page Not Found
          </h2>
          
          <p className="text-gray-500 max-w-md mx-auto">
            Oops! It seems like this page has wandered off like a curious puppy. 
            get you back home.
          </p>
          
          <div className="pt-4">
            <Link href="/">
              <Button
                size="lg"
                color="success"
                startContent={<FaHome />}
                className="font-semibold"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Paw Prints */}
        <div className="absolute bottom-10 left-10 opacity-20 animate-pulse">
          <FaPaw className="text-emerald-500 text-4xl" />
        </div>
        <div className="absolute top-20 right-20 opacity-20 animate-bounce">
          <FaPaw className="text-emerald-500 text-3xl" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-10 animate-pulse">
          <FaPaw className="text-emerald-500 text-5xl" />
        </div>
        <div className="absolute top-1/3 left-16 opacity-10 animate-bounce">
          <FaPaw className="text-emerald-500 text-2xl" />
        </div>
      </div>
    </div>
  );
}