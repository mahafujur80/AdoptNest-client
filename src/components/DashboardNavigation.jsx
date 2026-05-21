'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPlusCircle, FaClipboardList, FaHome } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

const DashboardNavigation = () => {

    const pathname = usePathname();

    const navLinks = [
        {
            title: 'Home',
            href: '/',
            icon: <FaHome size={20} />
        },
        {
            title: 'Add Pet',
            href: '/dashboard/add-pets',
            icon: <FaPlusCircle size={20} />
        },
        {
            title: 'My Requests',
            href: '/dashboard/my-request',
            icon: <FaClipboardList size={20} />
        },
        {
            title: 'My Listings',
            href: '/dashboard/my-listing',
            icon: <MdPets size={20} />
        }
    ];

    return (
        <div className="space-y-3 mt-10 mx-5">

            {
                navLinks.map((link) => {

                    const isActive = pathname === link.href;

                    return (
                        <Link
                        slot="close"
                            key={link.href}
                            href={link.href}
                            className={`
                             flex items-center gap-3 rounded-xl px-4 py-3 transition-all
                                ${isActive
                                    ? 'bg-emerald-400 text-white'
                                    : ' hover:bg-gray-200 text-black'
                                }
                            `}
                        >
                            {link.icon}

                            <span className="font-medium">
                                {link.title}
                            </span>
                        </Link>
                    )
                })
            }

        </div>
    );
};

export default DashboardNavigation;