'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { authOption } from '@/lib/auth'

const UserNav = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative size-11 rounded-sm'>
                    <Avatar className='size-10 rounded-sm'>
                        <AvatarImage
                            src='https://xaxmmypqsvkuydoxjpyj.supabase.co/storage/v1/object/public/netflix-assets/avatar.png'
                            alt='@user'
                        />
                        <AvatarFallback className='rounded-sm'></AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-sm font-medium leading-none'>Fur</p>
                        <p className='text-xs leading-none text-muted-foreground'>furkancakici25@gmail.com</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserNav
