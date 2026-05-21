'use client'

import { Input, Select, Label, ListBox, Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {  BiSearch } from "react-icons/bi";

const AllPetsHeader = () => {
    const categories = ["All","Cat","Dog","Bird","Fish", "Hamster","Turtle","Rabbit"]
    const sortOptions = ["Default","Latest", "Oldest"]


    const router  = useRouter()
    const [search, setSearch] = useState('')
    const [species, setSpecies ] = useState('')
    const [sort, setSort] = useState('')

    const searchParams = useSearchParams()


    useEffect(()=>{
      const params = new URLSearchParams(searchParams.toString())

        if (species && species !== "All") {
            params.set("species", species.toLowerCase())
        } else {
            params.delete("species")
        }

  //sort re vai sort 
        if (sort) {
            params.set("sort", sort.toLowerCase())  // lower case korte hobe na hole hobe naaaaaaaaaaaa
        } else {
            params.delete("sort")
        }


        router.push(`/all-pets?${params.toString()}`)

    },[species, sort])

    const handleSearch = ()=>{
      const params = new URLSearchParams(searchParams.toString())

      if(search){
        params.set('search', search)
      }else{
        params.delete('search')
      }
      router.push(`/all-pets?${params.toString()}`)
    }

    return (
        <div className="my-6 p-5 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Search */}
            <div className="flex items-center w-full md:w-1/2">
                <Input
                    onChange={(e)=>setSearch(e.target.value)}
                    value={search}
                    placeholder="Search pets..."
                    className="w-full rounded-r-none"
                />
                <Button onClick={handleSearch} className="bg-emerald-500 text-white rounded-lg rounded-l-none text-sm font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg text-center">Search</Button>
            </div>

            {/* Filter + Sort */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

                {/* Category Select */}
                <Select 
                onChange={(value)=>setSpecies(value)}
                className="min-w-[180px]" 
                placeholder="Species">
                    <Label>Species</Label>

                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox>
                            {categories.map((item) => (
                                <ListBox.Item
                                    key={item}
                                    id={item}
                                    textValue={item}
                                >
                                    {item}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Sort Select */}
                <Select
                onChange={(value)=>setSort(value)}
                 className="min-w-[180px]" 
                placeholder="Sort By">
                    <Label>Sort By</Label>

                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox>
                            {sortOptions.map((item) => (
                                <ListBox.Item
                                    key={item}
                                    id={item}
                                    textValue={item}
                                >
                                    {item}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Select.Popover>
                </Select>

            </div>
        </div>
    )
}

export default AllPetsHeader