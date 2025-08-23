"use client";

import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../../public/icons/InstagramIcon";
import XIcon from "../../public/icons/XIcon";
import GitHubIcon from "../../public/icons/GithubIcon";

export default function Footer() {
    return (
        <main>
            <footer className="bg-black text-white border-t border-neutral-800">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                    {/* Logo y nombre */}
                    <Link href="/" className=" flex-1 flex items-center justify-center">
                        <Image
                            src="/esece-logo-claro.webp"
                            alt="Logo de la aplicación"
                            width={100}
                            height={100}
                            quality={100}
                        />
                    </Link>

                    {/* Sección de usuario y menú móvil */}
                    <div className="flex-1 flex items-center justify-center md:order-2 space-x-3 md:space-x-5 rtl:space-x-reverse">
                        {/* Botón de contacto */}
                        <Link
                            href="https://www.facebook.com/Samuel.Carvajal13"
                            target="_blank"
                            className="rounded-full text-sm text-center transition duration-200"
                        >
                            <GitHubIcon className="size-6 text-neutral-500 hover:text-white transition-all duration-200" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/sxmuelc99_/ "
                            target="_blank"
                            className="rounded-full text-sm text-center transition duration-200"
                        >
                            <InstagramIcon className="size-6 text-neutral-500 hover:text-white transition-all duration-200" />
                        </Link>
                        <Link
                            href="https://x.com/sCarvajal10_"
                            target="_blank"
                            className="rounded-full text-sm text-center transition duration-200"
                        >
                            <XIcon className="size-6 text-neutral-500 hover:text-white transition-all duration-200" />
                        </Link>
                    </div>

                    {/* Menú de navegación */}
                    <div
                        className=" flex-1 hidden items-center justify-center w-full lg:flex md:w-auto md:order-1 z-40"
                        id="navbar-menu"
                    >
                        <ul className="flex flex-col font-black py-2 md:p-0 mt-6 border border-neutral-800 rounded-xl bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-xl">
                            <p>Esece — Developing Dreams —</p>
                        </ul>
                    </div>
                </div>
                <div className="max-w-screen-lg flex items-center justify-center mx-auto p-5 border-t border-neutral-800">
                    <p className="text-sm text-neutral-500 text-center">
                        © {new Date().getFullYear()} Generador de Contraseñas Esece | Desarrollado con 🤍 por →{" "} <Link href={"https://samuel-c.vercel.app"} className="text-white italic">Samuel C.</Link>
                    </p>
                </div>
            </footer>
        </main>
    );
}
