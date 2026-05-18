import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const FeaturesPets = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="mb-12">
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Ready for <span className=" text-emerald-600">Adoption</span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Find your perfect companion with ease. Browse verified pet listings, view health details, and adopt safely to give a loving home to pets in need.
                            </p>
                        </div>

                       <div> <Link href='/all-pets' ><Button variant='outline'>View All Pets</Button></Link></div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default FeaturesPets;