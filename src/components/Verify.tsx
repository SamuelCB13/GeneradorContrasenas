"use client";

import { toast } from "@pheralb/toast";
import { Shield, ShieldCheck, Eye, EyeOff, AlertTriangle, CheckIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CharacterValidation, PasswordStrength } from "./interfaces";

export default function Verify() {
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Función para validar tipos de caracteres
    const validateCharacterTypes = (password: string): CharacterValidation => {
        return {
            hasUppercase: /[A-Z]/.test(password),
            hasLowercase: /[a-z]/.test(password),
            hasNumbers: /[0-9]/.test(password),
            hasSymbols: /[^a-zA-Z0-9]/.test(password),
            length: password.length
        };
    };

    // Función para evaluar la seguridad de la contraseña
    const getPasswordStrength = (): PasswordStrength => {
        if (!password) return {
            level: "none",
            text: "Sin contraseña",
            color: "text-gray-400",
            image: "/default.svg"
        };

        let score = 0;
        const validation = validateCharacterTypes(password);

        // Longitud
        if (validation.length >= 8) score += 1;
        if (validation.length >= 12) score += 1;
        if (validation.length >= 16) score += 1;

        // Tipos de caracteres
        if (validation.hasLowercase) score += 1;
        if (validation.hasUppercase) score += 1;
        if (validation.hasNumbers) score += 1;
        if (validation.hasSymbols) score += 1;

        // Diversidad
        const uniqueChars = new Set(password).size;
        if (uniqueChars >= password.length * 0.7) score += 1;

        if (score <= 2) return {
            level: "weak",
            text: "Muy Débil",
            color: "text-red-500",
            image: "/muy-debil.svg"
        };
        if (score <= 4) return {
            level: "medium",
            text: "Media",
            color: "text-orange-400",
            image: "/media.svg"
        };
        if (score <= 6) return {
            level: "strong",
            text: "Segura",
            color: "text-yellow-400",
            image: "/segura.svg"
        };
        return {
            level: "very-strong",
            text: "Muy Segura",
            color: "text-green-500",
            image: "/muy-segura.svg"
        };
    };

    // Función para analizar la contraseña
    const analyzePassword = async (): Promise<void> => {
        if (!password || password.length < 1) {
            toast.error({
                text: "Contraseña vacía. ❌",
                description: "Por favor ingresa una contraseña para analizar la seguridad.",
            });
            return;
        }

        const strength = getPasswordStrength();

        if (strength.level === "weak") {
            toast.warning({
                text: "¡Contraseña débil! ⚠️",
                description: "Esta contraseña necesita mejoras para ser más segura.",
            });
        } else if (strength.level === "medium") {
            toast.info({
                text: "¡Contraseña media! ℹ️",
                description: "La contraseña es aceptable pero puede mejorar bastante.",
            });
        } else if (strength.level === "strong") {
            toast.success({
                text: "¡Contraseña segura! ✅",
                description: "Esta contraseña, cumple con estándares pero hay mejoras.",
            });
        } else if (strength.level === "very-strong") {
            toast.success({
                text: "¡Contraseña muy segura! ✅",
                description: "Esta contraseña, cumple con buenos estándares de seguridad.",
            });
        }
    };

    // Recomendaciones de seguridad
    const getSecurityRecommendations = (): string[] => {
        const recommendations: string[] = [];
        const validation = validateCharacterTypes(password);

        if (validation.length < 12) {
            recommendations.push("Usa al menos 12 caracteres");
        }
        if (!validation.hasLowercase) {
            recommendations.push("Incluye letras minúsculas");
        }
        if (!validation.hasUppercase) {
            recommendations.push("Incluye letras mayúsculas");
        }
        if (!validation.hasNumbers) {
            recommendations.push("Incluye números");
        }
        if (!validation.hasSymbols) {
            recommendations.push("Incluye símbolos especiales");
        }

        return recommendations;
    };

    const strength = getPasswordStrength();
    const recommendations = getSecurityRecommendations();
    const validation = validateCharacterTypes(password);

    return (
        <section className="flex flex-col items-center justify-center p-3 sm:p-5 bg-black" id="verify">
            {/* Título */}
            <header className="w-full text-center py-4 sm:py-5 px-5 space-y-2">
                <h1 className="text-3xl lg:text-4xl font-black text-neutral-300 leading-tight">
                    Analiza la seguridad de tus contraseñas
                </h1>
                <p className="text-neutral-600 max-sm:max-w-xs max-sm:mx-auto">
                    Evalúa qué tan segura es una contraseña analizando su estructura y composición. 👁️
                </p>
            </header>

            <article className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl p-5">
                {/* Panel de análisis */}
                <div className="flex-1 space-y-6">
                    {/* Campo de contraseña */}
                    <header className="space-y-3">
                        <div className="flex gap-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 ${strength.color} transition-colors duration-200`}
                                placeholder="Ingresa la contraseña que deseas analizar"
                                onKeyDown={(e) => e.key === 'Enter' && analyzePassword()}
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="bg-neutral-200 hover:opacity-80 transition-opacity duration-200 px-4 py-3 rounded-lg flex items-center gap-2 cursor-pointer group"
                                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            >
                                {showPassword ? <EyeOff className="size-5 group-focus:text-green-600" /> : <Eye className="size-5" />}
                            </button>
                        </div>

                        {/* Indicadores */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <span className="text-neutral-500 text-xs md:text-sm">Presiona Enter para analizar la contraseña</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-neutral-500 text-xs md:text-sm">
                                    {validation.length} caracteres
                                </span>
                            </div>
                        </div>

                        {password && (
                            <div className="flex items-center justify-between border bg-neutral-950 border-neutral-800 rounded-lg px-4 py-2">
                                <span className="text-neutral-500 text-xs md:text-sm">Nivel de seguridad:</span>
                                <span className={`font-medium text-xs md:text-sm ${strength.color}`}>
                                    {strength.text}
                                </span>
                            </div>
                        )}
                    </header>

                    {/* Validador de tipos de caracteres */}
                    {password && (
                        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                            <label className="text-neutral-500 font-medium w-full text-xs md:text-sm">Tipos de caracteres:</label>
                            <div className="flex items-center justify-between w-full">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={validation.hasUppercase}
                                        readOnly
                                        className="w-4 h-4 bg-neutral-900 border-neutral-600 rounded accent-green-500"
                                    />
                                    <span className={`text-xs md:text-sm ${validation.hasUppercase ? 'text-green-500' : 'text-red-500'}`}>
                                        ABC
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={validation.hasLowercase}
                                        readOnly
                                        className="w-4 h-4 bg-neutral-900 border-neutral-600 rounded accent-green-500"
                                    />
                                    <span className={`text-xs md:text-sm ${validation.hasLowercase ? 'text-green-500' : 'text-red-500'}`}>
                                        abc
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={validation.hasNumbers}
                                        readOnly
                                        className="w-4 h-4 bg-neutral-900 border-neutral-600 rounded accent-green-500"
                                    />
                                    <span className={`text-xs md:text-sm ${validation.hasNumbers ? 'text-green-500' : 'text-red-500'}`}>
                                        123
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={validation.hasSymbols}
                                        readOnly
                                        className="w-4 h-4 bg-neutral-900 border-neutral-600 rounded accent-green-500"
                                    />
                                    <span className={`text-xs md:text-sm ${validation.hasSymbols ? 'text-green-500' : 'text-red-500'}`}>
                                        #$&
                                    </span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Recomendaciones */}
                    {password && recommendations.length > 0 && (
                        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 space-y-3">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="size-4 text-white" />
                                <span className="text-neutral-300 font-medium text-sm">Recomendaciones:</span>
                            </div>
                            <ul className="space-y-1">
                                {recommendations.map((rec, index) => (
                                    <li key={index} className="text-neutral-500 text-xs md:text-sm flex items-center gap-2">
                                        <CheckIcon className="size-4 text-white" />
                                        {rec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Información de seguridad */}
                    <div className="bg-[#030320] border border-blue-950 rounded-lg p-3 space-y-2">
                        <div className="flex items-center gap-2 text-white">
                            <Shield className="size-4" />
                            <span className="font-medium text-xs md:text-sm">Información del análisis importante para el usuario</span>
                        </div>
                        <p className="text-[#0099ff] text-xs md:text-sm">
                            El análisis evalúa la longitud, variedad de caracteres y estructura de la contraseña.
                            Toda la evaluación se realiza localmente en tu navegador.
                        </p>
                    </div>

                    {/* Botón analizar */}
                    <button
                        onClick={analyzePassword}
                        disabled={!password}
                        className="flex items-center justify-center gap-2 bg-neutral-200 hover:opacity-80 focus:opacity-60 transition-opacity duration-200 px-4 py-3 rounded-lg font-semibold text-xs xl:text-sm w-full disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        <ShieldCheck className="size-4 sm:size-5" />
                        Analizar Contraseña
                    </button>
                </div>

                {/* Imagen */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full max-w-md h-full bg-white rounded-xl border border-neutral-800 flex items-center justify-center">
                        <Image
                            src={strength.image}
                            alt="Indicador de seguridad de contraseña"
                            height={288}
                            width={448}
                        />
                    </div>
                </div>
            </article>
        </section>
    );
}
