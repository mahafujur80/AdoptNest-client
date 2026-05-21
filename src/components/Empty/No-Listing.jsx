// components/NoAdoptionRequests.jsx
import { FaPaw } from "react-icons/fa";

export default function NoListing() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full p-4 mb-4">
        <FaPaw className="text-emerald-500 text-4xl" />
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        You Don't Have Any List Data Please Add First
      </h3>
      <p className="text-gray-500 text-sm text-center">
        You haven't  any listing pet for adoption yet.
      </p>
    </div>
  );
}