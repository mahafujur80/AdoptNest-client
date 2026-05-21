import PetDetailsCard from '@/components/PetsDetailsCard';
import { auth } from '@/lib/auth';
import { getSinglePet } from '@/lib/data';
import { headers } from 'next/headers';

const DetailsPage = async({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const pets = await getSinglePet(id, token)

    return (
        <div>
            {
                pets.map(pet => <PetDetailsCard pet={pet} key={pet._id} />)
            }
        </div>
    );
};

export default DetailsPage;