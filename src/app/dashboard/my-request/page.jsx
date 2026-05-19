import React from 'react';

const MyRequestPage = () => {
    return (
        <div className='h-screen lg:px-10 py-5'>
            <div>
                <h1 className='text-4xl font-bold text-emerald-400'>Adoption Applications</h1>
                <p className='text-sm'>Check the current status of your adoption applications.</p>
            </div>

            <div>
                <div className=" mx-auto">
                    <div className="bg-white border border-default-200 rounded-xl p-3 shadow-sm">

                        {/* Top */}
                        <div className="flex items-center justify-between gap-3">

                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.ibb.co.com/fd7J6K7/dog.jpg"
                                    alt="pet"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />

                                <div>
                                    <h2 className="text-base font-bold leading-none">
                                        Buddy
                                    </h2>

                                    <p className="text-xs text-default-500 mt-1">
                                        Golden Retriever Mix
                                    </p>
                                </div>
                            </div>

                            {/* Status */}
                            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-warning-100 text-warning-700 border border-warning-300">
                                PENDING
                            </span>
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
                                    Oct 12, 2023
                                </h4>
                            </div>

                            <div className="text-right">
                                <p className="text-[10px] uppercase text-default-400">
                                    Pickup Date
                                </p>

                                <h4 className="text-sm font-semibold mt-1 text-warning-600">
                                    Oct 20, 2023
                                </h4>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-2">

                            <button className="h-9 rounded-lg bg-[#314d2f] text-white text-sm font-medium hover:opacity-90 transition">
                                View Details
                            </button>

                            <button className="h-9 rounded-lg border border-default-300 text-sm font-medium hover:bg-default-100 transition">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto">
                    <div className="bg-white border border-default-200 rounded-xl p-3 shadow-sm">

                        {/* Top */}
                        <div className="flex items-center justify-between gap-3">

                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.ibb.co.com/fd7J6K7/dog.jpg"
                                    alt="pet"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />

                                <div>
                                    <h2 className="text-base font-bold leading-none">
                                        Buddy
                                    </h2>

                                    <p className="text-xs text-default-500 mt-1">
                                        Golden Retriever Mix
                                    </p>
                                </div>
                            </div>

                            {/* Status */}
                            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-warning-100 text-warning-700 border border-warning-300">
                                PENDING
                            </span>
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
                                    Oct 12, 2023
                                </h4>
                            </div>

                            <div className="text-right">
                                <p className="text-[10px] uppercase text-default-400">
                                    Pickup Date
                                </p>

                                <h4 className="text-sm font-semibold mt-1 text-warning-600">
                                    Oct 20, 2023
                                </h4>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-2">

                            <button className="h-9 rounded-lg bg-[#314d2f] text-white text-sm font-medium hover:opacity-90 transition">
                                View Details
                            </button>

                            <button className="h-9 rounded-lg border border-default-300 text-sm font-medium hover:bg-default-100 transition">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto">
                    <div className="bg-white border border-default-200 rounded-xl p-3 shadow-sm">

                        {/* Top */}
                        <div className="flex items-center justify-between gap-3">

                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.ibb.co.com/fd7J6K7/dog.jpg"
                                    alt="pet"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />

                                <div>
                                    <h2 className="text-base font-bold leading-none">
                                        Buddy
                                    </h2>

                                    <p className="text-xs text-default-500 mt-1">
                                        Golden Retriever Mix
                                    </p>
                                </div>
                            </div>

                            {/* Status */}
                            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-warning-100 text-warning-700 border border-warning-300">
                                PENDING
                            </span>
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
                                    Oct 12, 2023
                                </h4>
                            </div>

                            <div className="text-right">
                                <p className="text-[10px] uppercase text-default-400">
                                    Pickup Date
                                </p>

                                <h4 className="text-sm font-semibold mt-1 text-warning-600">
                                    Oct 20, 2023
                                </h4>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-2">

                            <button className="h-9 rounded-lg bg-[#314d2f] text-white text-sm font-medium hover:opacity-90 transition">
                                View Details
                            </button>

                            <button className="h-9 rounded-lg border border-default-300 text-sm font-medium hover:bg-default-100 transition">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto">
                    <div className="bg-white border border-default-200 rounded-xl p-3 shadow-sm">

                        {/* Top */}
                        <div className="flex items-center justify-between gap-3">

                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.ibb.co.com/fd7J6K7/dog.jpg"
                                    alt="pet"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />

                                <div>
                                    <h2 className="text-base font-bold leading-none">
                                        Buddy
                                    </h2>

                                    <p className="text-xs text-default-500 mt-1">
                                        Golden Retriever Mix
                                    </p>
                                </div>
                            </div>

                            {/* Status */}
                            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-warning-100 text-warning-700 border border-warning-300">
                                PENDING
                            </span>
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
                                    Oct 12, 2023
                                </h4>
                            </div>

                            <div className="text-right">
                                <p className="text-[10px] uppercase text-default-400">
                                    Pickup Date
                                </p>

                                <h4 className="text-sm font-semibold mt-1 text-warning-600">
                                    Oct 20, 2023
                                </h4>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-2">

                            <button className="h-9 rounded-lg bg-[#314d2f] text-white text-sm font-medium hover:opacity-90 transition">
                                View Details
                            </button>

                            <button className="h-9 rounded-lg border border-default-300 text-sm font-medium hover:bg-default-100 transition">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto">
                    <div className="bg-white border border-default-200 rounded-xl p-3 shadow-sm">

                        {/* Top */}
                        <div className="flex items-center justify-between gap-3">

                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.ibb.co.com/fd7J6K7/dog.jpg"
                                    alt="pet"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />

                                <div>
                                    <h2 className="text-base font-bold leading-none">
                                        Buddy
                                    </h2>

                                    <p className="text-xs text-default-500 mt-1">
                                        Golden Retriever Mix
                                    </p>
                                </div>
                            </div>

                            {/* Status */}
                            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-warning-100 text-warning-700 border border-warning-300">
                                PENDING
                            </span>
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
                                    Oct 12, 2023
                                </h4>
                            </div>

                            <div className="text-right">
                                <p className="text-[10px] uppercase text-default-400">
                                    Pickup Date
                                </p>

                                <h4 className="text-sm font-semibold mt-1 text-warning-600">
                                    Oct 20, 2023
                                </h4>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-2">

                            <button className="h-9 rounded-lg bg-[#314d2f] text-white text-sm font-medium hover:opacity-90 transition">
                                View Details
                            </button>

                            <button className="h-9 rounded-lg border border-default-300 text-sm font-medium hover:bg-default-100 transition">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto">
                    <div className="bg-white border border-default-200 rounded-xl p-3 shadow-sm">

                        {/* Top */}
                        <div className="flex items-center justify-between gap-3">

                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.ibb.co.com/fd7J6K7/dog.jpg"
                                    alt="pet"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />

                                <div>
                                    <h2 className="text-base font-bold leading-none">
                                        Buddy
                                    </h2>

                                    <p className="text-xs text-default-500 mt-1">
                                        Golden Retriever Mix
                                    </p>
                                </div>
                            </div>

                            {/* Status */}
                            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-warning-100 text-warning-700 border border-warning-300">
                                PENDING
                            </span>
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
                                    Oct 12, 2023
                                </h4>
                            </div>

                            <div className="text-right">
                                <p className="text-[10px] uppercase text-default-400">
                                    Pickup Date
                                </p>

                                <h4 className="text-sm font-semibold mt-1 text-warning-600">
                                    Oct 20, 2023
                                </h4>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-2">

                            <button className="h-9 rounded-lg bg-[#314d2f] text-white text-sm font-medium hover:opacity-90 transition">
                                View Details
                            </button>

                            <button className="h-9 rounded-lg border border-default-300 text-sm font-medium hover:bg-default-100 transition">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyRequestPage;