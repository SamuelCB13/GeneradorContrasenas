"use client";

import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "../../public/icons/GithubIcon";
import XIcon from "../../public/icons/XIcon";
import InstagramIcon from "../../public/icons/InstagramIcon";

export default function Navbar() {
    return (
        <main className="bg-black border-b border-neutral-800 h-[7vh] flex justify-between items-center px-10">
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

                {/* Sección de usuario y menú móvil */}
                <section className="flex items-center justify-center md:order-2 space-x-5 rtl:space-x-reverse">
                    {/* Botón de contacto */}
                    <Link
                        href="https://www.facebook.com/Samuel.Carvajal13"
                        target="_blank"
                        className="rounded-full text-sm text-center transition duration-200"
                    >
                        <GitHubIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/sxmuelc99_/ "
                        target="_blank"
                        className="rounded-full text-sm text-center transition duration-200"
                    >
                        <InstagramIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                    </Link>
                    <Link
                        href="https://x.com/sCarvajal10_"
                        target="_blank"
                        className="rounded-full text-sm text-center transition duration-200"
                    >
                        <XIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                    </Link>
                </section>
            </nav>
        </main>
    );
}
