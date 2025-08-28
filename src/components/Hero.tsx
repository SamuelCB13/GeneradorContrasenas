import { KeySquareIcon, RotateCcwKeyIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex flex-col justify-center sm:space-y-10 xl:h-[93dvh] p-3 sm:p-5 animate-fadeIn">
            {/* Hero */}
            <section className="flex flex-col items-center justify-center max-w-7xl mx-auto p-5">
                {/* Espaciador superior */}
                <div className="w-full border-x border-neutral-800 border-dashed">
                    <div className="max-w-xl mx-auto py-4 sm:py-5 border-x border-neutral-800 border-dashed" />
                </div>

                {/* Título */}
                <header className="w-full text-center border border-neutral-800 border-dashed py-4 sm:py-5 px-5">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-neutral-300 leading-tight">
                        Genera y Verifica Contraseñas
                    </h1>
                </header>

                {/* Descripción */}
                <article className="w-full text-center border-x border-neutral-800 border-dashed py-6 sm:py-10 px-4">
                    <p className="max-w-3xl mx-auto text-lg lg:text-xl xl:text-2xl text-neutral-600 leading-relaxed">
                        Crea contraseñas seguras para <span className="text-neutral-300">proteger tus cuentas</span> de internet o <span className="text-neutral-300">verifica que tan seguras</span> son las contraseñas que quieres usar. 🔐
                    </p>
                </article>

                {/* Botones */}
                <article className="w-full text-center border border-neutral-800 border-dashed">
                    <div className="flex flex-col items-center justify-center max-w-xl mx-auto p-5 sm:p-10 border-x border-neutral-800 border-dashed gap-3 sm:gap-5">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full">
                            <Link
                                href="#generate"
                                className="flex items-center gap-2 bg-neutral-200 hover:opacity-80 transition-opacity duration-200 px-4 py-3 rounded-lg font-semibold text-sm xl:text-base w-full sm:w-auto justify-center"
                            >
                                <KeySquareIcon className="size-4 sm:size-5" />
                                Generar Contraseña
                            </Link>
                            <Link
                                href="#verify"
                                className="flex items-center gap-2 bg-neutral-950 text-white border border-neutral-800 hover:bg-neutral-800 transition-colors duration-200 px-4 py-3 rounded-lg font-semibold text-sm xl:text-base w-full sm:w-auto justify-center"
                            >
                                <RotateCcwKeyIcon className="size-4 sm:size-5" />
                                Verificar Contraseña
                            </Link>
                        </div>
                        <p className="text-neutral-600 text-xs tracking-wide">Elige la opción de tu elección y asegura tus contraseñas ahora mismo.</p>
                    </div>
                </article>

                {/* Espaciador inferior */}
                <footer className="w-full border-x border-neutral-800 border-dashed">
                    <div className="max-w-xl mx-auto py-4 sm:py-5 border-x border-neutral-800 border-dashed" />
                </footer>
            </section>

            {/* Sección inferior */}
            <section className="py-3 sm:py-5 px-3 sm:px-7 w-full max-w-7xl mx-auto">
                <article className="flex flex-col lg:flex-row items-center justify-center max-w-3xl mx-auto text-neutral-500 text-center px-4">
                    <h2 className="font-bold text-neutral-300 text-xl md:text-2xl mr-2">¿Qué hay en Esece?</h2>
                    <p className="text-base xl:text-lg">Todo lo que necesitas para gestionar tus contraseñas.</p>
                </article>
            </section>
        </section>
    )
}
