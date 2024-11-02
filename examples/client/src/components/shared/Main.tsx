import Image from 'next/image'
import React from 'react'
import { ClientCaorusel } from '../ui/clients-carousel/ClientCaorusel'

export function Main() {
    return (
        <main>
            <Image
                className="dark:invert"
                src="https://nextjs.org/icons/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <ClientCaorusel />
        </main>
    )
}