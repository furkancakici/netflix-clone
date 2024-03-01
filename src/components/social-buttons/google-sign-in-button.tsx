'use client'

import { Button } from '../ui/button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import GoogleIcon from '@public/google.svg'

const GoogleSignInButton = () => {
    return (
        <Button variant='outline' size='icon' onClick={() => signIn('google')}>
            <Image src={GoogleIcon} alt='google-logo' className='size-6' />
        </Button>
    )
}

export default GoogleSignInButton
