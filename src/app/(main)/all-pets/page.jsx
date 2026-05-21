import AllPetsCard from '@/components/AllPetsCard';
import AllPetsHeader from '@/components/AllPetsHeaders';
import NoPetsFound from '@/components/Empty/NoPetsFound';
import { getAllPets } from '@/lib/data';
import React from 'react';

const AllPetsPage = async ({ searchParams }) => {
    const { search, species, sort } = await searchParams;


    const petsData = await getAllPets(search, species, sort)

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            {
                petsData?.length === 0 ? <NoPetsFound /> :

                    <div className="container mx-auto px-6">
                        <div className="mb-12">
                            <div className='flex items-center justify-start'>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Explore <span className=" text-emerald-600">All Pets</span>
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        Available Pet Now: {petsData.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <AllPetsHeader />
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                            {
                                petsData.map(pet => <AllPetsCard key={pet._id} pet={pet} />)
                            }
                        </div>
                    </div>
            }
        </section>
    );
};

export default AllPetsPage;