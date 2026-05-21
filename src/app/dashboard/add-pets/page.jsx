'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, ListBox, TextField, Select, TextArea } from '@heroui/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const AddPetPage = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;
    
    const handleAddPet = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const petObj = Object.fromEntries(formData.entries())
        
        const petData = {
            petName: petObj?.petName,
            species: petObj?.species,
            breed: petObj?.breed,
            age: petObj?.petAge,
            gender: petObj?.gender,
            imageUrl: petObj?.imageUrl,
            healthStatus: petObj?.healthStatus,
            vaccinationStatus: petObj?.vaccinationStatus,
            location: petObj?.location,
            description: petObj?.description,
            ownerEmail: petObj?.email,
            userId: user?.id,
            adoptionFee: petObj?.adoptionFee,
            status: 'Available',
            createAt: new Date(),
        }

        const {data:tokenData} = await authClient.token();
        console.log(tokenData)
        

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`, {
            method: 'POST',
            headers: { 'content-type': 'application/json',
               authorization: `Bearer ${tokenData?.token}`
             },
            body: JSON.stringify(petData)
        })

        const data = await res.json()

        if (!data || !data.insertedId) {
            toast.error('Something is wrong !')
        }
        if (data.insertedId) {
            toast.success('New Pet Added Successfully')
            router.push('/dashboard/my-listing')
        }
    }
    return (
        <div className='lg:px-10 '>
            <div className="pb-10">
                <h1 className="text-4xl font-bold text-emerald-400">
                    Add New Pet
                </h1>
                <p className="text-sm text-gray-600">
                    Fill up the form below to list a new pet for adoption.
                </p>
            </div>

            <div className='md:w-[80%] mx-auto bg-white p-5 mb-10 rounded-xl border  shadow-[0_0_25px_rgba(16,185,129,0.3)]'>
                <Form onSubmit={handleAddPet} className="flex flex-col gap-2" >
                    <TextField
                        isRequired
                        name="petName"
                        type="text"
                    >
                        <Label>Pet Name</Label>
                        <Input placeholder="Enter  Your Pet Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="breed"
                        type="text"
                    >
                        <Label>Breed</Label>
                        <Input placeholder="Pet Breed" />
                        <FieldError />
                    </TextField>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Select isRequired name='species' placeholder="Select your pet">
                            <Label>Species</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="dog" textValue="Dog">
                                        Dog
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="cat" textValue="Cat">
                                        Cat
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="bird" textValue="Bird">
                                        Bird
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="fish" textValue="Fish">
                                        Fish
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="rabbit" textValue="Rabbit">
                                        Rabbit
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="turtle" textValue="Turtle">
                                        Turtle
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="hamster" textValue="Hamstere">
                                        Hamster
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <Select isRequired name='gender' placeholder="Select Gender">
                            <Label>Gender</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="male" textValue="Male">
                                        Male
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="female" textValue="Female">
                                        Female
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                    </div>
                    <TextField
                        isRequired
                        name="imageUrl"
                        type="text"
                    >
                        <Label>Pet Image Url</Label>
                        <Input placeholder="Enter  Your Pet Image Url" />
                        <FieldError />
                    </TextField>

                    {/* heald and vacation */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Select isRequired name='healthStatus' placeholder="Health Status">
                            <Label>Health Status</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Healthy" textValue="Healthy">
                                        Healthy
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Needs Care" textValue="Needs Care">
                                        Needs Care
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Under Treatment" textValue="Under Treatment">
                                        Under Treatment
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Critical" textValue="Critical">
                                        Critical
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                        {/* Vaccination Status */}
                        <Select isRequired name='vaccinationStatus' placeholder="Vaccination Status">
                            <Label>Vaccination Status</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                                        Vaccinated
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated">
                                        Not Vaccinated
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Partially Vaccinated" textValue="Partially Vaccinated">
                                        Partially Vaccinated
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <TextField
                        key={user?.email}
                        isRequired
                        isReadOnly
                        defaultValue={user?.email}
                        name="email"
                        type="email"

                    >
                        <Label>Owner Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <TextField
                            isRequired
                            name="petAge"
                            type="number"
                        >
                            <Label>Age</Label>
                            <Input placeholder="Pet Age" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="adoptionFee"
                            type="number"
                        >
                            <Label>Adoption Fee</Label>
                            <Input placeholder="$ 123" />
                            <FieldError />
                        </TextField>
                    </div>
                    <TextField
                        isRequired
                        name="location"
                        type="text"
                    >
                        <Label>Location</Label>
                        <Input placeholder="Pet Location" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="description"
                        validate={(value) => {
                            if (value.length < 10) {
                                return "Bio must be at least 10 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Description</Label>
                        <TextArea placeholder="About Your Pet....." />
                        <Description>Minimum 10 characters</Description>
                        <FieldError />
                    </TextField>


                    <div className="flex gap-2 py-5">
                        <Button type="submit" className="w-full  bg-emerald-500 text-white rounded-lg  hover:bg-emerald-600 transition shadow-md hover:shadow-lg">
                            Submit Pet
                        </Button>
                        <Button type="reset" variant="secondary" className="w-full rounded-lg text-danger">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
            <div></div>
        </div>
    );
};

export default AddPetPage;