import { Marquee } from '@/components/helper'
import React from 'react'

export function ClientCaorusel() {
    return (
        <Marquee>
            {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9).map((item) => {
                const url = `/images/client-0${item}.svg`
                return (
                    <img
                        key={item}
                        src={url}
                        alt="client"
                    />
                )
            })}

            {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9).map((item) => {
                const url = `/images/client-0${item}.svg`
                return (
                    <img
                        key={item}
                        src={url}
                        alt="client"
                    />
                )
            })}
        </Marquee>
    )
}

/*
{Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9).map((item) => {
                    const url = `/images/client-0${item}.svg`
                    return (
                        <img
                            key={item}
                            src={url}
                            alt="client"
                        />
                    )
                })}

                {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9).reverse().map((item) => {
                    const url = `/images/client-0${item}.svg`
                    return (
                        <img
                            key={item}
                            src={url}
                            alt="client"
                        />
                    )
                })}
*/