import NoAdoptionRequests from '@/components/Empty/NoRequest';
import MyRequestCard from '@/components/MyRequestCard';
import { auth } from '@/lib/auth';
import { getMyAdoptRequest } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const MyRequestPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const userId = user?.id;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const myAdoptReq = await getMyAdoptRequest(userId, token)


    return (
        <div className='lg:px-10 py-5'>
            <div className='pb-10'>
                <h1 className='text-4xl font-bold text-emerald-400'>Adoption Applications</h1>
                <p className='text-sm'>Check the current status of your adoption applications.</p>
            </div>

            {
                (myAdoptReq?.length === 0) ?
                 <NoAdoptionRequests /> 
                 :
                    <div className='space-y-2'>
                        {
                            myAdoptReq.map(adopt => <MyRequestCard key={adopt._id} adopt={adopt} />)
                        }
                    </div>
            }

        </div>
    );
};

export default MyRequestPage;