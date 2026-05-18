import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

// "_id": "6a0a86267c7b729a5a97ef80",
// "petName": "Max",
// "species": "Dog",
// "breed": "Golden Retriever",
// "age": 3,
// "gender": "Male",
// "imageUrl": "https://i.ibb.co/xyz/max-dog.jpg",
// "healthStatus": "Healthy",
// "vaccinationStatus": "Fully Vaccinated",
// "location": "Tanjong Pagar, Singapore",
// "adoptionFee": 120,
// "description": "Friendly and energetic dog, loves playing with kids and outdoor activities.",
// "ownerEmail": "owner1@gmail.com"

const PetCard = ({pet}) => {
    return (
        <div className="border group rounded-2xl">
            <div className="relative overflow-hidden aspect-16/10 rounded-t-2xl" >
              <Image src={pet?.imageUrl} alt='pet image' fill
              className="w-full object-cover  group-hover:scale-110 transition-transform duration-700"
              />
            </div>
           <div className="p-5" >
            <div className="flex items-center justify-between">
                <h2><span className="font-medium">Name:</span> {pet?.petName}</h2>
                 <h4><span className="font-medium">Gender:</span> {pet?.gender}</h4>
            </div>
            <p><span className="font-medium">Breed:</span> {pet?.breed}</p>
            <p><span className="font-medium">Age:</span> {pet?.age}  Years</p>
            <p className="flex items-center gap-2"><MdLocationOn  className="text-emerald-600 text-lg"/> {pet?.location} </p>
            <p className="flex items-center gap-2 text-xl font-semibold text-emerald-600"><BsCurrencyDollar  className="text-emerald-600 text-lg" /> {pet?.adoptionFee} <span className='text-sm text-black'>/adoption fee</span> </p>
           </div>
           <div className="py-5 items-center  px-4 border-t-1 border-gray-300">
            <Link href={`/all-pets/${pet?._id}`}><Button className='w-full  bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg text-center' variant="outline">View Details</Button></Link>
           </div>
        </div>
    );
};

export default PetCard;