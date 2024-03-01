'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@public/netflix_logo.svg'
import { usePathname } from 'next/navigation'
import { Bell, Search } from 'lucide-react'
import UserNav from './user-nav'

type LinkProps = {
    name: string
    href: string
}

const links: LinkProps[] = [
    { name: 'Home', href: '/home' },
    { name: 'Tv Shows', href: '/home/shows' },
    { name: 'Movies', href: '/home/movies' },
    { name: 'Recently Added', href: '/home/recently' },
    { name: 'My List', href: '/home/user/list' }
]

const Navbar = () => {
    const pathName = usePathname()
    return (
        <div className='mx-auto max-w-7xl justify-between items-center py-5 flex'>
            <div className='flex gap-x-14 items-center'>
                <Link href='/home' className='w-32'>
                    <Image src={Logo} alt='Netflix Logo' priority />
                </Link>
                <ul className='lg:flex hidden gap-x-4'>
                    {links.map((link, index) => (
                        <li key={index}>
                            {pathName === link.href ? (
                                <Link href={link.href} className='text-white underline'>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href={link.href} className='text-gray-300 hover:underline'>
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex items-center gap-x-8 *:cursor-pointer'>
                <Search className='size-6 text-gray-300' />
                <Bell className='size-6 text-gray-300' />
                <UserNav />
            </div>
        </div>
    )
}

export default Navbar
