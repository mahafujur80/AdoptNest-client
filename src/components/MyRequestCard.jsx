import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyRequestCard = ({ adopt }) => {
    return (
        <div>
            <div className=" mx-auto">
                <div className="bg-white border border-default-200 rounded-xl p-3 shadow-sm">

                    {/* Top */}
                    <div className="flex items-center justify-between gap-3">

                        {/* Left */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={adopt?.imageUrl}
                                alt="pet"
                                width={100}
                                height={100}
                                className="w-12 h-12 rounded-full object-cover border"
                            />

                            <div>
                                <h2 className="text-base font-bold leading-none">
                                    {adopt?.petName}
                                </h2>
                            </div>
                        </div>

                        {/* Status */}
                        <Chip color={`${adopt?.status === 'pending' ? 'warning' : adopt?.status === 'rejected' ? 'danger' : 'success'}`}>
                            {adopt?.status}
                        </Chip>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed my-3"></div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-3 mb-4">

                        <div>
                            <p className="text-[10px] uppercase text-default-400">
                                Request Date
                            </p>

                            <h4 className="text-sm font-semibold mt-1">
                                {new Date(adopt?.createdAt).toDateString()}
                            </h4>
                        </div>

                        <div className="text-right">
                            <p className="text-[10px] uppercase text-default-400">
                                Pickup Date
                            </p>

                            <h4 className="text-sm font-semibold mt-1 text-warning-600">
                                {adopt?.adoptingDate}
                            </h4>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-2">

                        <Link href={`/all-pets/${adopt?.petId}`} className="text-center block w-full">
                            <Button variant='outline' className="w-full rounded-lg bg-emerald-400 text-white text-sm font-medium hover:bg-emerald-500 transition">
                                View Details
                            </Button>
                        </Link>

                        <Button variant='outline' className="w-full text-sm  rounded-lg text-danger border-danger font-medium">
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRequestCard;