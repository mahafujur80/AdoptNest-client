"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea, Description } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaUserEdit } from "react-icons/fa";



export function UpdateModal({ pet }) {
    const router = useRouter()
    
    const updatePet = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const formObj = Object.fromEntries(formData.entries());
        const petData = {
            ...formObj,
            userId: pet?.userId
        }

        //jwt token
        const { data: tokenData } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${pet?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(petData)
        })
        const data = await res.json()
        if (data.modifiedCount === !1) {
            toast.error('Pet Update Fail')
            return
        }
        if (data.modifiedCount === 1) {
            toast.success('Pet Update Successful')
            router.refresh()
        }
    }
    return (
        <Modal>
            <Button className='w-full text-blue-500  rounded-lg text-sm font-semibold text-center' variant="outline">Update</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaUserEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Updater Your Pet Data</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={updatePet} className="flex flex-col gap-2" >
                                    <TextField
                                        isRequired
                                        name="petName"
                                        type="text"
                                        defaultValue={pet?.petName}
                                    >
                                        <Label>Pet Name</Label>
                                        <Input placeholder="Enter  Your Pet Name" />
                                        <FieldError />
                                    </TextField>
                                    <TextField
                                        isRequired
                                        name="breed"
                                        type="text"
                                        defaultValue={pet?.breed}
                                    >
                                        <Label>Breed</Label>
                                        <Input placeholder="Pet Breed" />
                                        <FieldError />
                                    </TextField>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <Select isRequired defaultValue={pet?.species} name='species' placeholder="Select your pet">
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

                                        <Select isRequired defaultValue={pet?.gender} name='gender' placeholder="Select Gender">
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
                                        defaultValue={pet?.imageUrl}
                                    >
                                        <Label>Pet Image Url</Label>
                                        <Input placeholder="Enter  Your Pet Image Url" />
                                        <FieldError />
                                    </TextField>

                                    {/* heald and vacation */}
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <Select isRequired defaultValue={pet?.healthStatus} name='healthStatus' placeholder="Health Status">
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
                                        <Select isRequired defaultValue={pet?.vaccinationStatus} name='vaccinationStatus' placeholder="Vaccination Status">
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
                                        isRequired
                                        isReadOnly
                                        defaultValue={pet?.ownerEmail}
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
                                            defaultValue={pet?.age}
                                        >
                                            <Label>Age</Label>
                                            <Input placeholder="Pet Age" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            isRequired
                                            name="adoptionFee"
                                            type="number"
                                            defaultValue={pet?.adoptionFee}
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
                                        defaultValue={pet?.location}
                                    >
                                        <Label>Location</Label>
                                        <Input placeholder="Pet Location" />
                                        <FieldError />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        name="description"
                                        defaultValue={pet?.description}
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
                                        <Button slot="close" type="submit" className="w-full  bg-emerald-500 text-white rounded-lg  hover:bg-emerald-600 transition shadow-md hover:shadow-lg">
                                            Update Pet Info
                                        </Button>
                                        <Button slot="close" type="reset" variant="secondary" className="w-full rounded-lg text-danger">
                                            Reset
                                        </Button>
                                    </div>
                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}