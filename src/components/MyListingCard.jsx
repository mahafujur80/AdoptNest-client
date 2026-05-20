import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { BsCurrencyDollar } from 'react-icons/bs';
import { DeleteMyListingDialog } from './DeleteMyListing';
import { UpdateModal } from './UpdateModal';
import { getAdoptRequest } from '@/lib/data';
import { MyRequestModal } from './MyRequestModal';

const MyListingCard = async({pet}) => {
 const petId = pet?._id?.toString()
    const dataIs = await getAdoptRequest(petId)




    return (
        <div className="border group rounded-2xl">
            <div className="relative overflow-hidden aspect-16/10 rounded-t-2xl" >
                <Image src={pet?.imageUrl} alt='pet image' fill
                    className="w-full object-cover  group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="p-5" >
                <div className="flex items-center justify-between">
                <h2 className="font-semibold">{pet?.petName}</h2>
                <p className="flex items-center gap-2 text-xl font-semibold text-emerald-600"><BsCurrencyDollar className="text-emerald-600 text-lg" /> {pet?.adoptionFee} </p>
                </div>
               
              
            </div>
            <div className="grid grid-cols-2 gap-1 py-5 items-center  px-4 border-t-1 border-gray-300">
                <Link href={`/all-pets/${pet?._id}`}><Button className='w-full  rounded-lg text-sm font-semibold  text-center' variant="outline"> View </Button></Link>
                <MyRequestModal adoptRequest={dataIs}/>
                <UpdateModal pet={pet} />
                <DeleteMyListingDialog pet={pet}/>
            </div>
        </div>
    );
};

export default MyListingCard;