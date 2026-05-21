import MyListingCard from '@/components/MyListingCard';
import { auth } from '@/lib/auth';
import { getMyOwnPet } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId = session?.user?.id;
 const {token} = await auth.api.getToken({
    headers: await headers()
 })
    const myPet = await getMyOwnPet(userId, token)

    const adoptedPets = myPet.filter(
        pet => pet.status === "Adopted"
    ).length

    const availablePets = myPet.filter(
        pet => pet.status === "Available"
    ).length

    return (
        <div className=''>
            <div className="pb-10">
                <h1 className="text-4xl font-bold text-emerald-400">
                    Pet Management
                </h1>
                <p className="text-sm text-gray-600">
                    Manage all your posted pets in one place. Update pet information, track adoption status, edit listings, or remove pets whenever needed.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center mb-5">

                {/* Total Listings */}
                <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
                    <p className="text-sm text-gray-500">Total</p>
                    <h2 className="text-2xl font-bold text-blue-600 mt-2">
                        {myPet.length}
                    </h2>
                </div>

                {/* Available */}
                <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
                    <p className="text-sm text-gray-500">Available</p>
                    <h2 className="text-2xl font-bold text-emerald-600 mt-2">
                        {availablePets}
                    </h2>
                </div>

                {/* Adopted */}
                <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
                    <p className="text-sm text-gray-500">Adopted</p>
                    <h2 className="text-2xl font-bold text-red-500 mt-2">
                        {adoptedPets}
                    </h2>
                </div>

            </div>


            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    myPet.map(pet => <MyListingCard key={pet._id} pet={pet} />)
                }
            </div>
        </div>
    );
};

export default page;