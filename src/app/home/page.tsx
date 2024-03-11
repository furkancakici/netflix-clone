import MovieVideo from '@/components/movie-video'
import RecentlyAdded from '@/components/recently-added'
import { ReactNode } from 'react'

const HomePage = ({ children }: { children: ReactNode }) => {
    return (
        <div className='p-5 lg:p-0'>
            <MovieVideo />
            <h1 className='text-3xl font-bold'>Recently Added</h1>
            <RecentlyAdded />
        </div>
    )
}

export default HomePage
