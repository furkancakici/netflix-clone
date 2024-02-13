'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()
    return (
        <main className='p-4'>
            <h1>Anasayfa</h1>
            <Button onClick={() => router.push('/login')}>Click me</Button>
        </main>
    )
}
