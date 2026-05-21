export const  getFeturePets = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feature`)
    const data = await res.json();
    return data;
};
// get all pet
export const  getAllPets = async(search="", species="", sort="" )=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets?search=${search}&species=${species}&sort=${sort}`)
    const data = await res.json();
    return data;
};
// get single pet by id
export const getSinglePet = async(id, token)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`,{
        headers: {authorization: `Bearer ${token}`}
    })
    const data = await res.json()
    return data;
}
// get my adopt request by user id
export const getMyAdoptRequest = async(userId, token)=>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopted/user/${userId}`,{
        headers: {authorization: `Bearer ${token}`}
     })
    const data = await res.json()
    return data;
}
// get pet request for pet owern
export const getAdoptRequest = async(petId, token)=>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopted/${petId}`,{
        headers: {authorization: `Bearer ${token}`}
     })
    const data = await res.json()
    return data;
}

//get all pet by pet owner
export const getMyOwnPet = async(userId, token)=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/user/${userId}`,{
    headers: {authorization: `Bearer ${token}`}
})
const data = await res.json();
return data;
}