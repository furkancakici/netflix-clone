import Navbar from '@/components/navbar'
import { authOption } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const HomeLayout = async ({ children }: { children: ReactNode }) => {
    const session = await getServerSession(authOption)

    if (!session) {
        return redirect('/login')
    }

    return (
        <div className='w-full max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <Navbar />
            {children}
        </div>
    )
}

export default HomeLayout
