"use client";

import { Input, Button, Label, TextArea, Description, FieldError, Fieldset, TextField, FieldGroup, Form, Calendar, DatePicker, DateField } from "@heroui/react";

export default function PetAdoptForm() {
    return (
        <div className='py-5 border rounded-2xl border-green-300'>
            <Form className=" px-5" >
                <Fieldset>
                    <Fieldset.Legend>Request To Adopt Pet</Fieldset.Legend>
                    <Description>Fill out this form and the owner will review your request</Description>
                    <FieldGroup>
                        <TextField
                            name="petName"
                        >
                            <Label>Pet Name</Label>
                            <Input placeholder="pet Name" />
                            <FieldError />
                        </TextField>
                        <TextField
                            name="userName"
                        >
                            <Label>User Name</Label>
                            <Input placeholder="User Name" />
                            <FieldError />
                        </TextField>
                        <TextField  name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>


                        <DatePicker
                            isRequired
                            className="w-full"
                            
                            name="date"
                           
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
                            name="bio"
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
                        <Button type="submit"  className='w-full  bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg text-center '>
                            Request To Adopt
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}