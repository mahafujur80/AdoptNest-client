import Image from "next/image";
import PetAdoptForm from "./PetAdoptForm";
import AlreadyAdoptedNotice from "./AdoptionClose";
import { FaBookReader } from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";

const PetDetailsPage = async ({ pet }) => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Content */}
          <div>
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-96 w-full rounded-2xl overflow-hidden shadow-xl mb-8">
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow">
                <span
                  className={`text-sm font-semibold ${
                    pet?.status === "Adopted"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {pet?.status}
                </span>
              </div>
            </div>

            {/* Title & Price */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {pet.petName}
                </h1>

                <p className="text-gray-500 text-sm md:text-base">
                  {pet.breed} • {pet.species}
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur px-5 py-3 rounded-full shadow-lg w-fit">
                <span className="text-2xl font-bold text-emerald-600">
                  ${pet.adoptionFee}
                </span>

                <span className="text-gray-500 text-sm ml-1">
                  Adoption Fee
                </span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Species</div>
                <div className="font-semibold text-gray-900">
                  {pet.species}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Gender</div>
                <div className="font-semibold text-gray-900">
                  {pet.gender}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Age</div>
                <div className="font-semibold text-gray-900">
                  {pet.age} years
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Location</div>

                <div className="font-semibold text-gray-900 truncate">
                  {pet.location}
                </div>
              </div>
            </div>

            {/* Health Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg">
                    <MdHealthAndSafety />
                  </div>

                  <div>
                    <div className="text-xs text-gray-500">
                      Health Status
                    </div>

                    <div className="font-semibold text-green-700">
                      {pet.healthStatus}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                    <BiSolidInjection />
                  </div>

                  <div>
                    <div className="text-xs text-gray-500">Vaccination</div>

                    <div className="font-semibold text-blue-700">
                      {pet.vaccinationStatus}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 md:p-6 shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-500">
                  <FaBookReader />
                </span>

                About {pet.petName}
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {pet.description}
              </p>
            </div>

            {/* Owner Card */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {pet?.ownerEmail?.[0]?.toUpperCase()}
                </div>

                <div className="min-w-0">
                  <div className="text-xs text-gray-500">Pet Owner</div>

                  <div className="font-semibold text-gray-900 break-all">
                    {pet?.ownerEmail}
                  </div>

                  <div className="text-xs text-emerald-600 mt-1">
                    ✓ Verified Member
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:sticky lg:top-5 h-fit">
            {pet?.status === "Adopted" ? (
              <AlreadyAdoptedNotice />
            ) : (
              <PetAdoptForm pet={pet} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetDetailsPage;