"use client";

import { authClient } from "@/lib/auth-client";
import { Input, Button, Label, TextArea, Description, FieldError, Fieldset, TextField, FieldGroup, Form, Calendar, DatePicker, DateField } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PetAdoptForm({ pet }) {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [date, setDate] = useState(null)
    console.log(date?.toString())
    const handleAdopt = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const adoptData = Object.fromEntries(formData.entries());
        const finalData = {
            petId: pet?._id,
            petName: adoptData.petName,
            imageUrl:pet?.imageUrl,
            ownerEmail: pet?.ownerEmail,
            requesterName: adoptData.userName,
            requesterEmail: adoptData.email,
            userId:user?.id,
            adoptingDate: adoptData?.date,
            message: adoptData?.message,
            status: "pending",
            createdAt: new Date()
        }
        //jwt token
        const {data:tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopted`, {
            method: 'POST',
            headers: { 'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
             },
            body: JSON.stringify(finalData)
        })
        const result = await res.json()
        if(result.error){
            toast.error(result.error)
            return
        }
        if(result.acknowledged){
            toast.success('Your Request Is Success')
        }

        console.log(result)
    }

    return (
        <div className='py-5 border rounded-2xl border-green-300'>
            <Form onSubmit={handleAdopt} className=" px-5" >
                <Fieldset>
                    <Fieldset.Legend>Request To Adopt Pet</Fieldset.Legend>
                    <Description>Fill out this form and the owner will review your request</Description>
                    <FieldGroup>
                        <TextField
                            isReadOnly
                            defaultValue={pet?.petName}
                            name="petName"
                            type="text"
                        >
                            <Label>Pet Name</Label>
                            <Input placeholder="pet Name" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isReadOnly
                            key={user?.name}
                            defaultValue={user?.name}
                            name="userName"
                            type="text"
                        >
                            <Label>User Name</Label>
                            <Input placeholder="User Name" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isReadOnly
                            key={user?.email}
                            defaultValue={user?.email}
                            name="email"
                            type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>
                        <DatePicker
                            isRequired
                            className="w-full"
                            name="date"
                            value={date}
                            onChange={setDate}
                        >
                            <Label>Adopting Date</Label>
                            <DateField.Group fullWidth>
                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                <DateField.Suffix>
                                    <DatePicker.Trigger>
                                        <DatePicker.TriggerIndicator />
                                    </DatePicker.Trigger>
                                </DateField.Suffix>
                            </DateField.Group>
                            <FieldError>Date must be today or in the future.</FieldError>
                            <DatePicker.Popover>
                                <Calendar aria-label="Event date">
                                    <Calendar.Header>
                                        <Calendar.YearPickerTrigger>
                                            <Calendar.YearPickerTriggerHeading />
                                            <Calendar.YearPickerTriggerIndicator />
                                        </Calendar.YearPickerTrigger>
                                        <Calendar.NavButton slot="previous" />
                                        <Calendar.NavButton slot="next" />
                                    </Calendar.Header>
                                    <Calendar.Grid>
                                        <Calendar.GridHeader>
                                            {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                        </Calendar.GridHeader>
                                        <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                    </Calendar.Grid>
                                    <Calendar.YearPickerGrid>
                                        <Calendar.YearPickerGridBody>
                                            {({ year }) => <Calendar.YearPickerCell year={year} />}
                                        </Calendar.YearPickerGridBody>
                                    </Calendar.YearPickerGrid>
                                </Calendar>
                            </DatePicker.Popover>
                        </DatePicker>

                        <TextField
                            isRequired
                            name="message"
                            validate={(value) => {
                                if (value.length < 10) {
                                    return "Bio must be at least 10 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Message</Label>
                            <TextArea placeholder="whats your mind..." />
                            <Description>Minimum 10 characters</Description>
                            <FieldError />
                        </TextField>
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit"   className={`w-full  bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg text-center`}>
                            Request To Adopt
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}