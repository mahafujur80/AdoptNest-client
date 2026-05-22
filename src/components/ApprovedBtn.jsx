'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ApprovedBtn = ({pets}) => {
    const router = useRouter()

    const handleApproveBtn = async()=>{
      //jwt token
      const {data:tokenData} = await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopted/approved/${pets?.userId}/${pets?.petId}`,{
      method: 'PATCH',
      headers: {authorization: `Bearer ${tokenData?.token}`}
    })
    const data = await res.json()
    if(data.success){
     router.refresh()
     toast.success('Approved')
    }
  }

    return (
        <button onClick={handleApproveBtn} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl text-sm font-semibold transition">
            Approve
        </button>
    );
};

export default ApprovedBtn;