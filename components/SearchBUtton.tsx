'use client'
import React from 'react'
import {experimental_useFormStatus as useFormStatus } from 'react-dom'
import{CiSearch} from 'react-icons/Ci'
const SearchBUtton = () => {
    const {pending }= useFormStatus
  return (
    <button className='bg-blue-500 rounded-full p-3 hover:bg-blue-700 text-white font-bold disabled:cursor-help'>
{pending && "Searching..."}
{!pending &&  <CiSearch className='h-5 w-5'/>}
    </button>
  )
}

export default SearchBUtton