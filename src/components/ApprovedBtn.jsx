'use client'
const ApprovedBtn = ({pets}) => {

    const handleApproveBtn = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopted/approved/${pets?.userId}/${pets?.petId}`,{
      method: 'PATCH',
    })
    const data = await res.json()
    console.log(data)
  }

    return (
        <button onClick={handleApproveBtn} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl text-sm font-semibold transition">
            Approve
        </button>
    );
};

export default ApprovedBtn;