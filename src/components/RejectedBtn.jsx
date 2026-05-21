'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';



const RejectedBtn = ({ pets }) => {
    const router = useRouter()
    const handleRejectedBtn = async () => {
        // jwt token data
        const {data:tokenData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopted/rejected/${pets?.userId}/${pets?.petId}`, {
            method: 'PATCH',
            headers: {authorization: `Bearer ${tokenData?.token}`}
        })
        const data = await res.json()
        if (data) {
            router.refresh()
        }
        console.log(data)
    }
    return (
        <button onClick={handleRejectedBtn} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-semibold transition">
            Reject
        </button>
    );
};
export default RejectedBtn ;