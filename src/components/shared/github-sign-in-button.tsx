'use client'

import { Button } from '../ui/button'
import { signIn } from 'next-auth/react'
import { Github } from 'lucide-react'

const GithubSignInButton = () => {
    return (
        <Button variant='outline' size='icon' onClick={() => signIn('github')}>
            <Github className='size-4' />
        </Button>
    )
}

export default GithubSignInButton
