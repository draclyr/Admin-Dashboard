import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

const Navbar = () => {
    return (
        <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
            <Link href='#'>
                <Image src={logo} alt='Admin-Dashboard' width={50} />
                <Avatar>
                    <AvatarImage />
                </Avatar>
            </Link>
        </div>
    )
}

export default Navbar