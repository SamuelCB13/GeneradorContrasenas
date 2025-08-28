'use client'

import { useState } from 'react'
import { pqrs } from './interfaces'
import { PlusIcon, XIcon } from 'lucide-react'

export default function PQRSPage() {
    const [openItems, setOpenItems] = useState(new Set([""]))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toggleItem = (id: any) => {
        const newOpenItems = new Set(openItems)
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id)
        } else {
            newOpenItems.add(id)
        }
        setOpenItems(newOpenItems)
    }

    return (
        <section className="flex flex-col items-center justify-center p-3 sm:p-5 bg-black max-w-6xl mx-auto" id="pqrs">
            {/* Título */}
            <header className="w-full text-center py-4 sm:py-5 px-5 space-y-2">
                <h1 className="text-3xl lg:text-4xl font-black text-neutral-300 leading-tight">
                    Revisa las Preguntas más Frecuentes
                </h1>
                <p className="text-neutral-600 max-sm:max-w-xs max-sm:mx-auto">
                    ¿Tienes alguna pregunta sobre el Generador de contraseñas aleatorias? ¡Encontrarás las respuestas más abajo!💡
                </p>
            </header>

            {/* Main Content */}
            <article className="flex flex-col lg:flex-row gap-8 w-full max-w-4xl p-5">
                <div className="w-full">
                    {pqrs.map((item, index) => {
                        const isOpen = openItems.has(item.id)
                        const isFirst = index === 0
                        const isLast = index === pqrs.length - 1

                        return (
                            <div
                                key={item.id}
                                className={`border border-neutral-800 ${isFirst ? 'rounded-t-3xl' : ''
                                    } ${isLast ? 'rounded-b-3xl' : ''
                                    } ${!isFirst ? 'border-t-0' : ''
                                    }`}
                            >
                                {/* Question Header */}
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full p-5 text-left flex items-center justify-between group"
                                >
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white pr-4">{item.question}</h3>
                                    <div className="border rounded-full p-1 text-white transition-colors duration-300 group-hover:text-black group-hover:bg-white group-focus:bg-white group-focus:text-black">
                                        {isOpen ? <XIcon className="size-3 sm:size-4 md:size-5" /> : <PlusIcon className="size-3 sm:size-4 md:size-5" />}
                                    </div>
                                </button>

                                {/* Answer Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-5 pb-5">
                                        <div className="text-xs sm:text-sm md:text-base text-neutral-500 leading-relaxed">{item.answer}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}
