"use client";
import { Logo } from '@/assets/icons/Logo'
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

export function LoginForm() {
    const route = useRouter()
    const [isLoading, setIsLoading] = useState(false)


    async function handleLogin(e: FormEvent) {
        e.preventDefault()
        setIsLoading(true)
        
        toast.success(`Welcome back`)
        setIsLoading(false)
        route.push('/admin/dashboard')
    }

    return (
        <div className='grid grid-cols-1 place-items-center'>
            <div className='login__form space-y-2'>
                <div className='flex flex-col justify-center items-center backdrop-blur-sm bg-stone-900/70 rounded-lg m-2'>
                    <Logo />
                    <h3 className='text-2xl flex flex-col justify-center text-center font-bold mb-4 uppercase'>
                        Inicia Sesion en <span className='text-primary font-bold'>Next Inventory</span>
                    </h3>
                </div>
                <div className='set-font space-y-4 rounded-lg w-full bg-stone-900 py-8 px-6 '>

                    <form onSubmit={handleLogin} className='space-y-4 overflow-hidden'>

                        <Input
                            isRequired
                            label="Correo electronico"
                            name='email'
                            id='email'
                        />

                        <Input
                            isRequired
                            label="Contraseña"
                            name='password'
                            id='password'
                        />

                        <Button
                            color='primary'
                            className='btn_primary'
                            variant='shadow'
                            fullWidth
                            type='submit'
                            isLoading={isLoading}
                        >
                            Iniciar Sesion
                        </Button>

                        <div className='w-auto flex justify-center items-center gap-4'>

                            <Divider />
                            <span className='text-sm text-light-500'>O</span>
                            <Divider />

                        </div>

                        <Button
                            href='/auth/register'
                            as={Link}
                            color='primary'
                            variant='shadow'
                            className='btn_secondary text-white'
                            fullWidth
                        >
                            Registrarse
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}