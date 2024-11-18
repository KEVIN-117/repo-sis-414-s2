import React from 'react'
import { ClientCaorusel } from '../ui/clients-carousel/ClientCaorusel'
import { SparklesIcon } from "@heroicons/react/24/solid";


export function Main() {
    return (
        <main className='set-glow-gb items-center md:py-0 py-10 justify-between px-2 md:mt-[15rem] mt-[19rem] z-[20]'>            
            <div className="flex flex-col items-center justify-center bg-gradient-to-tl from-[#3e2781] to-stone-950/40 w-[80%] mx-auto rounded-xl border border-[#5d41a7] text-white px-4 py-16">
                <div className="max-w-3xl mx-auto flex flex-col justify-center items-center text-center space-y-8">                    
                    <Label text={'API Studio is now in beta →'} />

                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        The API Security Framework
                    </h1>

                    <p className="text-xl text-purple-200 max-w-[42rem] mx-auto leading-normal sm:text-2xl sm:leading-8">
                        Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transition-colors">
                            Get Started →
                        </button>
                        <button className="px-6 py-3 bg-stone-950/20  text-white rounded-full font-semibold hover:bg-stone-950/10 transition-colors">
                            Read the docs
                        </button>
                    </div>
                </div>
            </div>
            <div className='backdrop-blur-lg bg-stone-950/40 rounded-xl w-fit mx-auto'>
                <ClientCaorusel />
            </div>
        </main>
    )
}

function Label({ text }: { text: string }) {
    return (
        <div
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-base">
                {text}
            </h1>
        </div>
    )
}