import { getServerSession } from 'next-auth'
import { authOption } from '@/lib/auth'
import Navbar from '@/containers/navbar'

const HomePage = async () => {
    const session = await getServerSession(authOption)

    return <>Furkan</>
}

export default HomePage
