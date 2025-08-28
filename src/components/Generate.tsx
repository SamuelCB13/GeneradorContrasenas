"use client";

import { toast } from "@pheralb/toast";
import { CheckCircle2Icon, Clipboard, KeySquareIcon, MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Generate() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(15);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [copied, setCopied] = useState(false);

    // Caracteres disponibles
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    // Función para generar contraseña
    const generatePassword = useCallback(() => {
        let availableChars = "";

        if (includeUppercase) availableChars += uppercaseChars;
        if (includeLowercase) availableChars += lowercaseChars;
        if (includeNumbers) availableChars += numberChars;
        if (includeSymbols) availableChars += symbolChars;

        if (availableChars === "") {
            setPassword("");
            return;
        }

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            newPassword += availableChars[randomIndex];
        }

        setPassword(newPassword);
        setCopied(false);
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, uppercaseChars, lowercaseChars, numberChars, symbolChars]);

    // Función para evaluar la seguridad de la contraseña
    const getPasswordStrength = () => {
        if (!password) return { level: "none", text: "Sin contraseña", color: "text-gray-400", image: "/default.svg" };

        let score = 0;

        // Longitud
        if (password.length >= 8) score += 1;
        if (password.length >= 12) score += 1;
        if (password.length >= 16) score += 1;

        // Tipos de caracteres
        if (/[a-z]/.test(password)) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^a-zA-Z0-9]/.test(password)) score += 1;

        // Diversidad
        const uniqueChars = new Set(password).size;
        if (uniqueChars >= password.length * 0.7) score += 1;

        if (score <= 2) return { level: "weak", text: "Muy Débil 🔓", color: "text-red-500", image: "/muy-debil.svg" };
        if (score <= 4) return { level: "medium", text: "Media 🔏", color: "text-orange-400", image: "/media.svg" };
        if (score <= 6) return { level: "strong", text: "Segura 🔐", color: "text-yellow-400", image: "/segura.svg" };
        return { level: "very-strong", text: "Muy Segura 🔒", color: "text-green-500", image: "/muy-segura.svg" };
    };

    // Función para copiar al portapapeles
    const copyToClipboard = async () => {
        if (!password) return;

        try {
            await navigator.clipboard.writeText(password);
            setCopied(true);
            toast.success({
                text: "¡Contraseña copiada! ✨",
                description: "La contraseña ha sido copiada y guardada en el portapapeles. 🔐",
            });
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    // Generar contraseña inicial
    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    const strength = getPasswordStrength();

    return (
        <section className="flex flex-col items-center justify-center p-3 sm:p-5 bg-black" id="generate">
            {/* Título */}
            <header className="w-full text-center py-4 sm:py-5 px-5 space-y-2">
                <h1 className="text-3xl lg:text-4xl font-black text-neutral-300 leading-tight">
                    Generador de Contraseñas Aleatorias
                </h1>
                <p className="text-neutral-600 max-sm:max-w-xs max-sm:mx-auto">
                    Genera aquí contraseñas seguras para proteger tu información. 🗝️
                </p>
            </header>

            <article className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl p-5">
                {/* Imagen */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full max-w-md h-full bg-white rounded-xl border border-neutral-800 flex items-center justify-center">
                        <Image
                            src={strength.image}
                            alt=""
                            height={288}
                            width={448}
                        />
                    </div>
                </div>

                {/* Panel de control */}
                <div className="flex-1 space-y-10">
                    {/* Campo de contraseña */}
                    <header className="space-y-2">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={password}
                                readOnly
                                className={`flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 tracking-widest text-sm focus:outline-none ${strength.color}`}
                                placeholder="La contraseña generada aparecerá aquí"
                            />
                            <button
                                onClick={copyToClipboard}
                                className="bg-neutral-200 hover:opacity-80 transition-opacity duration-200 px-4 py-3 rounded-lg flex items-center gap-2 cursor-pointer group"
                            >
                                {copied ? <CheckCircle2Icon className="size-5 group-focus:text-green-600" /> : <Clipboard className="size-5" />}
                            </button>
                        </div>
                        {/* Indicador de seguridad */}
                        <div className="flex items-center gap-1">
                            <span className="text-neutral-500 text-xs md:text-sm">Seguridad de la contraseña:</span>
                            <span className={`font-medium text-xs md:text-sm ${strength.color}`}>
                                {strength.text}
                            </span>
                        </div>
                    </header>

                    {/* Control de longitud */}
                    <div className="flex flex-col space-y-3">
                        <div className="flex md:flex-col justify-between gap-2">
                            <label className="text-neutral-500 font-medium text-xs md:text-sm">Longitud de la contraseña:</label>
                            <label className="text-white font-medium text-xs md:text-sm">{length} caracteres</label>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setLength(Math.max(1, length - 1))}
                                className="flex items-center justify-center bg-neutral-200 hover:opacity-80 transition-opacity duration-200 p-2 rounded-lg cursor-pointer group"
                            >
                                <MinusIcon className="size-4 group-hover:text-green-600 group-focus:text-green-600 transition-colors duration-200" />
                            </button>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={length}
                                onChange={(e) => setLength(parseInt(e.target.value))}
                                className="flex-1 h-3 bg-neutral-800 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <button
                                onClick={() => setLength(Math.min(50, length + 1))}
                                className="flex items-center justify-center bg-neutral-200 hover:opacity-80 transition-opacity duration-200 p-2 rounded-lg cursor-pointer group"
                            >
                                <PlusIcon className="size-4 group-hover:text-green-600 group-focus:text-green-600 transition-colors duration-200" />
                            </button>
                        </div>
                        <div className="flex justify-between text-xs text-neutral-500">
                            <span>01</span>
                            <span>50</span>
                        </div>
                    </div>

                    {/* Opciones de caracteres */}
                    <footer className="flex flex-col md:flex-row gap-5 items-center justify-between">
                        <label className="text-neutral-500 font-medium w-full text-xs md:text-sm">Caracteres usados:</label>
                        <div className="flex items-center justify-between w-full">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={includeUppercase}
                                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                                    className="w-4 h-4 bg-neutral-900 border-neutral-600 rounded accent-green-500"
                                />
                                <span className="text-white text-xs md:text-sm">ABC</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={includeLowercase}
                                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                                    className="w-4 h-4 bg-neutral-900 border-neutral-600 rounded accent-green-500"
                                />
                                <span className="text-white text-xs md:text-sm">abc</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={includeNumbers}
                                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                                    className="w-4 h-4 bg-neutral-900 border-neutral-600 rounded accent-green-500"
                                />
                                <span className="text-white text-xs md:text-sm">123</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={includeSymbols}
                                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                                    className="w-4 h-4 bg-neutral-900 border-neutral-600 rounded accent-green-500"
                                />
                                <span className="text-white text-xs md:text-sm">#$&</span>
                            </label>
                        </div>
                    </footer>

                    {/* Botón generar */}
                    <button
                        onClick={generatePassword}
                        className="flex items-center justify-center gap-2 bg-neutral-200 hover:opacity-80 focus:opacity-60 transition-opacity duration-200 px-4 py-3 rounded-lg font-semibold text-xs xl:text-sm w-full cursor-pointer"
                    >
                        <KeySquareIcon className="size-4 sm:size-5" />
                        Generar Nueva Contraseña
                    </button>
                </div>
            </article>
        </section>
    );
}
