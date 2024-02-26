import Navbar from '@/containers/navbar'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default HomeLayout
