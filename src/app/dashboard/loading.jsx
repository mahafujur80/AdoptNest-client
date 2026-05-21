// app/loading.js (Root loading page)
"use client";

import { Spinner } from "@heroui/react";
import { FaPaw } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Main Container */}
      <div className="text-center">
        
        
        <div className="relative mb-8">
          
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-red-400 w-24 h-24 mx-auto"></div>
          <div className="absolute inset-0 rounded-full animate-pulse opacity-30 bg-red-300 w-24 h-24 mx-auto"></div>
          
          
          <div className="relative bg-gradient-to-br from-red-500 to-pink-500 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <FaPaw className="text-white text-4xl animate-pulse" />
          </div>
        </div>

     
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Loading<span className="animate-pulse">...</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3">
            <Spinner 
              size="lg" 
              color="danger" 
              labelColor="danger"
            />
            <span className="text-gray-500 text-sm">
              Please wait while we fetch your furry friends
            </span>
          </div>
        </div>

        
        <div className="absolute bottom-10 left-10 opacity-20 animate-pulse">
          <FaPaw className="text-red-500 text-4xl" />
        </div>
        <div className="absolute top-20 right-20 opacity-20 animate-bounce">
          <FaPaw className="text-red-500 text-3xl" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-10 animate-pulse">
          <FaPaw className="text-red-500 text-5xl" />
        </div>
        <div className="absolute top-1/3 left-16 opacity-10 animate-bounce">
          <FaPaw className="text-red-500 text-2xl" />
        </div>
      </div>
    </div>
  );
}