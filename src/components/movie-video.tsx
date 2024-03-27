import { Button } from './ui/button'
import prisma from '@/lib/db'

const getMovieData = async () => {
    const data = await prisma?.movie.findFirst({
        select: {
            title: true,
            overview: true,
            videoSource: true,
            imageString: true,
            release: true,
            duration: true,
            id: true,
            age: true
        }
    })

    return data
}

const MovieVideo = async () => {
    const movieData = await getMovieData()
    return (
        <div className='h-[55vh] w-full flex justify-start items-center'>
            <video
                poster={movieData?.imageString}
                autoPlay
                muted
                loop
                src={movieData?.videoSource}
                className='w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]'></video>
            <div className='absolute w-[90%] lg:w-[40%] mx-auto'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>{movieData?.title}</h1>
                <p className='text-white text-lg mt-5 line-clamp-3'>{movieData?.overview}</p>
                <div className='flex gap-x-3 mt-4'>
                    <Button>See More</Button>
                    <Button>Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default MovieVideo
