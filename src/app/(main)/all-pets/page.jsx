import AllPetsCard from '@/components/AllPetsCard';
import { getAllPets } from '@/lib/data';
import React from 'react';
import { AiFillSnippets } from 'react-icons/ai';

const AllPetsPage = async() => {
    const petsData = await getAllPets()
    return (
        <section  className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">

                

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    petsData.map(pet =><AllPetsCard key={pet._id} pet={pet}/>)
                }
            </div>
            </div>


        </section>
    );
};

export default AllPetsPage;