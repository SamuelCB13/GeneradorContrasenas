"use client";

import Image from "next/image";
import { recomendaciones } from "./interfaces";

export default function Recomendaciones() {
    return (
        <section className="flex flex-col items-center justify-center p-3 sm:p-5 bg-black max-w-6xl mx-auto" id="recommendations">
            {/* Título */}
            <header className="w-full text-center py-4 sm:py-5 px-5 space-y-2">
                <h1 className="text-3xl lg:text-4xl font-black text-neutral-300 leading-tight">
                    Conoce algunas recomendaciones
                </h1>
                <p className="text-neutral-600 max-sm:max-w-xs max-sm:mx-auto">
                    Para crear contraseñas seguras y proteger tu información. ⭐
                </p>
            </header>

            <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full p-5">
                {recomendaciones.map((recomendacion) => (
                    <div key={recomendacion.id} className="flex flex-col items-center space-y-4 bg-neutral- rounded-xl border border-neutral-800 p-5">
                        <Image
                            src={recomendacion.imagen}
                            alt={recomendacion.imageAlt}
                            height={96}
                            width={96}
                            className="size-18 md:size-24"
                        />
                        <h2 className="text-lg md:text-2xl font-semibold text-center text-neutral-300 border-b border-white pb-2">
                            {recomendacion.titulo}
                        </h2>
                        <p className="text-sm md:text-base md:text-pretty text-neutral-500">
                            {recomendacion.descripcion}
                        </p>
                    </div>
                ))}
            </article>
        </section >
    )
}
