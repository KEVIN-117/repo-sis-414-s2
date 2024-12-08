import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export function Header() {
    return (
        <header className='z-20 w-full mx-auto'>
            <nav className="bg-white shadow dark:bg-[#030014]">
                <div className="container px-6 py-3 mx-auto md:flex">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                        </Link>

                        {/* <!-- Mobile menu button --> */}
                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>

                                <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                            <Link href="/blog" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
                                Ir al blog
                            </Link>
                            <Link href="#" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">About</Link>
                            <Link href="#" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Contact</Link>
                        </div>

                        <div className="flex justify-center items-center gap-3 mt-4 md:mt-0">
                            <Button
                                href='/auth/login'
                                as={Link}
                                color='primary'
                                variant='shadow'
                                className='btn_secondary uppercase text-white'
                                fullWidth
                            >
                                Inicia Sesion
                            </Button>
                            <Button
                                href='/auth/register'
                                as={Link}
                                color='primary'
                                variant='shadow'
                                className='btn_secondary uppercase text-white'
                                fullWidth
                            >
                                registrate
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}