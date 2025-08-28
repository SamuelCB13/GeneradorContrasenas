"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import GitHubIcon from "@/icons/GithubIcon";
import XIcon from "@/icons/XIcon";
import InstagramIcon from "@/icons/InstagramIcon";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="bg-black border-b border-neutral-800 h-16 flex justify-between items-center px-4 sm:px-6 lg:px-10">
            <nav className="w-full text-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto relative">
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

                {/* Menú de navegación desktop */}
                <section className="hidden lg:flex items-center">
                    <nav className="flex space-x-8">
                        <Link
                            href="/"
                            className="text-white hover:text-neutral-400 transition-colors duration-200 font-medium"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#generate"
                            className="text-white hover:text-neutral-400 transition-colors duration-200 font-medium"
                        >
                            Generar
                        </Link>
                        {/* <Link
                            href="#verify"
                            className="text-white hover:text-neutral-400 transition-colors duration-200 font-medium"
                        >
                            Verificar
                        </Link> */}
                        <Link
                            href="#recommendations"
                            className="text-white hover:text-neutral-400 transition-colors duration-200 font-medium"
                        >
                            Recomendaciones
                        </Link>
                        {/* <Link
                            href="#pqrs"
                            className="text-white hover:text-neutral-400 transition-colors duration-200 font-medium"
                        >
                            PQR&apos;s
                        </Link> */}
                    </nav>
                </section>

                {/* Sección de redes sociales y menú móvil */}
                <section className="flex items-center justify-center space-x-3 sm:space-x-5">
                    {/* Redes sociales - ocultas en móvil muy pequeño */}
                    <div className="hidden sm:flex items-center space-x-3">
                        <Link
                            href="https://github.com/tu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full text-sm text-center transition duration-200"
                            aria-label="GitHub"
                        >
                            <GitHubIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/sxmuelc99_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full text-sm text-center transition duration-200"
                            aria-label="Instagram"
                        >
                            <InstagramIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                        </Link>
                        <Link
                            href="https://x.com/sCarvajal10_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full text-sm text-center transition duration-200"
                            aria-label="Twitter/X"
                        >
                            <XIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                        </Link>
                    </div>

                    {/* Botón hamburguesa para móvil */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-400 rounded-lg hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-all duration-200"
                        aria-controls="navbar-menu"
                        aria-expanded={isMenuOpen}
                        aria-label="Abrir menú de navegación"
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </section>

                {/* Menú móvil desplegable */}
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } absolute top-16 left-0 w-full bg-black border border-neutral-800 rounded-lg lg:hidden z-50 animate-fadeOut`}
                    id="navbar-menu"
                >
                    <nav className="flex flex-col p-4 space-y-4">
                        <Link
                            href="/"
                            className="text-white hover:text-neutral-300 transition-colors duration-200 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#generate"
                            className="text-white hover:text-neutral-300 transition-colors duration-200 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Generar
                        </Link>
                        {/* <Link
                            href="#verify"
                            className="text-white hover:text-neutral-300 transition-colors duration-200 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Verificar
                        </Link> */}
                        <Link
                            href="#recommendations"
                            className="text-white hover:text-neutral-300 transition-colors duration-200 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Recomendaciones
                        </Link>
                        {/* <Link
                            href="#pqrs"
                            className="text-white hover:text-neutral-300 transition-colors duration-200 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            PQR&apos;s
                        </Link> */}

                        {/* Redes sociales en menú móvil */}
                        <div className="flex items-center justify-end space-x-4 pt-4 border-t border-neutral-700 sm:hidden">
                            <Link
                                href="https://github.com/SamuelCB13"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full text-sm text-center transition duration-200"
                                aria-label="GitHub"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <GitHubIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/sxmuelc99_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full text-sm text-center transition duration-200"
                                aria-label="Instagram"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <InstagramIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                            </Link>
                            <Link
                                href="https://x.com/sCarvajal10_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full text-sm text-center transition duration-200"
                                aria-label="Twitter/X"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <XIcon className="size-5 text-neutral-500 hover:text-white transition-all duration-200" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </nav>
        </section>
    );
}
