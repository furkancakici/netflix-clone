import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import GoogleButton from '@/components/social-buttons/github-sign-in-button'
import GithubButton from '@/components/social-buttons/google-sign-in-button'
import { getServerSession } from 'next-auth'
import { authOption } from '@/lib/auth'
import { redirect } from 'next/navigation'

const LoginPage = async () => {
    const session = await getServerSession(authOption)

    if (session) {
        return redirect('/home')
    }
    return (
        <div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
            <form>
                <h1 className='text-3xl font-semibold text-white'>Login</h1>
                <div className='space-y-5 mt-5'>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
                    />
                    <Button type='submit' variant='destructive' className='w-full bg-[#e50914]'>
                        Login
                    </Button>
                </div>
            </form>

            <div className='text-gray-500 text-sm mt-2'>
                New to Netflix?{' '}
                <Link href='/sign-up' className='text-white hover:underline'>
                    Sign up now
                </Link>
            </div>
            <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
                <GoogleButton />
                <GithubButton />
            </div>
        </div>
    )
}

export default LoginPage
