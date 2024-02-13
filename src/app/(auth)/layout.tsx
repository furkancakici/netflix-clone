import React, { ReactNode } from 'react'
import Image from 'next/image'
import bgImage from '@public/login_background.jpg'
import logo from '@public/netflix_logo.svg'
const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
            <Image
                src={bgImage}
                alt='background-image'
                className='hidden sm:flex sm:object-cover -z-10 brightness-50'
                priority
                sizes='100vw'
                fill
            />

            <Image
                src={logo}
                alt='logo'
                width={120}
                height={120}
                className='absolute left-4 top-4 object-contain md:left-10 md:top-6'
            />
            {children}
        </div>
    )
}

export default AuthLayout
