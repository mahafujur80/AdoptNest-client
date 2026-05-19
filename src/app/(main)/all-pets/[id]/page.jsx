import PetDetailsCard from '@/components/PetsDetailsCard';
import { getSinglePet } from '@/lib/data';

const DetailsPage = async({ params }) => {
    const { id } = await params;
    const pets = await getSinglePet(id)

    return (
        <div>
            {
                pets.map(pet => <PetDetailsCard pet={pet} key={pet._id} />)
            }
        </div>
    );
};

export default DetailsPage;