export const  getFeturePets = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feature`)
    const data = await res.json();
    return data;
};
// get all pet
export const  getAllPets = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`)
    const data = await res.json();
    return data;
};
// get single pet by id
export const getSinglePet = async(id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`)
    const data = await res.json()
    return data;
}
// get my adopt request by user id
export const getMyAdoptRequest = async(userId)=>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopted/user/${userId}`)
    const data = await res.json()
    return data;
}
// get pet request for pet owern
export const getAdoptRequest = async(petId)=>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopted/${petId}`)
    const data = await res.json()
    return data;
}

//get all pet by pet owner
export const getMyOwnPet = async(userId)=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/user/${userId}`)
const data = await res.json();
return data;
}