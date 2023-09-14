'use client'

import { CiSearch } from 'react-icons/Ci'
import Avatar from "react-avatar"
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchBUtton from './SearchBUtton'
import { SearchSelect, SearchSelectItem, Select, SelectItem } from "@tremor/react";
import { useRouter } from 'next/navigation'


const SHORT_BY_MAP = {
    r: "Default",
    rv: "By Review",
    p: "By Price(low to high)",
    pd: "By Price(high to low)",
}



const Header = () => {

const [pages, setPages] = useState("default")
const [shortby, setShortby] = useState()
const [minprice, setMinprice] = useState('')
const [maxprice, setMaxprice] = useState('')



const router = useRouter()


    return (
        <div className='flex flex-col items-center md:flex-row md:items-start md:space-x-4 px-2 pt-5 pb-5 md:p-10 md:pb-5'>
            <Link href='/'>
                <Image
                    src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
                    alt='logo'
                    width={150}
                    height={150} />

            </Link>


            <div className=" w-full md:max-w-2xl">
                <form action={formData  =>{
                    const searchTerm = formData.get("searchTerm")
                    if (!formData.get("searchTerm")) return;

                    const  params = new URLSearchParams();

                    if(pages) params.set("pages", pages.toString());
                    if(shortby) params.set("shortby", shortby.toString());
                    if(minprice) params.set("minprice", minprice.toString());
                    if(maxprice) params.set("maxprice", maxprice.toString());


                  router.push(`/search/${searchTerm}?${params.toString()}`)

                }}>
                    <div className='flex items-center gap-2 w-full px-4 '>
                        <div className='flex items-center space-x-2 bg-white shadow-xl rounded-full  px-6 py-4 border-0 flex-1'>
                            <CiSearch className='h-5 w-5 text-gray-600 md:max-w-5xl' />
                            <input type="text" name='searchTerm' placeholder='search...' className='outline-none flex-1' />
                        </div>

                        {/* SearchBUtton */}
                        <SearchBUtton />

                    </div>

                    <div className=" grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-lg md:max-w-none mx-auto">
                        <SearchSelect
                        onValueChange={(value)=> setPages(value)}
                            className='min-w-4'
                            placeholder='# of pages'>
                            {
                                [...Array(100)].map((_, i) => (
                                    <SearchSelectItem key={i} value={(i + 1).toString()}>
                                        {(i + 1).toString()}  pages
                                    </SearchSelectItem>
                                ))
                            }
                        </SearchSelect>

                        <Select className='min-w-4'
                        placeholder='#sort'
                        onValueChange={(value)=> setShortby(value)}
                        >
                            {Object.entries(SHORT_BY_MAP).map(([key, value]) => (
                                <SelectItem

                                    key={key}
                                    value={key}
                                >
                                    {value}
                                </SelectItem>
                            ))}
                        </Select>


                        <SearchSelect className='min-w-4 ' placeholder='"min price'
                        onValueChange={(value)=> setMinprice(value)}
                        >
                            {["", "100", "250", "500", '750', '900', '1000+'].map((_, i) => (
                                <SearchSelectItem key={i} value={_.toString()}>
                                    {i === 0 ? "No minimum" : `$${_.toString()}`}

                                </SearchSelectItem>
                            ))}
                        </SearchSelect>


                        <SearchSelect className='min-w-4 ' placeholder='"max price'
                        onValueChange={(value)=> setMaxprice(value)}
                        >
                            {["", "100", "250", "500", '750', '900', '1000+'].map((_, i) => (
                                <SearchSelectItem key={i} value={_.toString()}>
                                    {i === 0 ? "No minimum" : `$${_.toString()}`}

                                </SearchSelectItem>
                            ))}
                        </SearchSelect>




                    </div>

                </form>
            </div>

<div className=" hidden md:flex">
    <Avatar name='alish Fuckk' round  size='50'/>
</div>

        </div>
    )
}

export default Header