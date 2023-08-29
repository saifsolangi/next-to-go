import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center px-5 py-2 border-b-[1px] shadow-lg'>
            <Image src="/logo.png"
                width={120}
                height={60}
                alt="Picture of the author"
            />
            <div className='hidden md:flex gap-3 font-bold '>
                <h1 className='cursor-pointer hover:bg-gray-100 rounded-md px-4 py-1 transition-all'>Home</h1>
                <h1 className='cursor-pointer hover:bg-gray-100 rounded-md px-4 py-1 transition-all'>History</h1>
                <h1 className='cursor-pointer hover:bg-gray-100 rounded-md px-4 py-1 transition-all'>Help</h1>
            </div>
            <div className=''>
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default NavBar