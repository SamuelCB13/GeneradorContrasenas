"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <main className="bg-black border-b border-neutral-800 h-[7dvh] flex justify-between items-center px-10">
            <nav className="w-full text-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                {/* Logo y nombre */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/esece-logo-claro.webp"
                        alt="Logo de la aplicación"
                        width={100}
                        height={100}
                        quality={100}
                    />
                </Link>

                {/* Menú de navegación */}
                <section className="hidden lg:flex items-center">
                    <p className="font-black text-xl">Generador de contraseñas aleatorias y seguras</p>
                </section>

                {/* Logo y nombre */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/esece-logo-claro.webp"
                        alt="Logo de la aplicación"
                        width={100}
                        height={100}
                        quality={100}
                    />
                </Link>
            </nav>
        </main>
    );
}
