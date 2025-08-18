import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
    return (
        <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
            <Link href='#'>
                <Image src={logo} alt='Admin-Dashboard' width={50} />
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                    <Avatar>
                        <AvatarImage className='rounded-full' src='https://avatars.githubusercontent.com/u/183423388?v=4' alt='@shadcn' width={40} />
                        <AvatarFallback className='text-black bg-slate-300'>DR</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href='/profile'>Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/auth'>Logout</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default Navbar