import { KeySquareIcon, RotateCcwKeyIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="flex flex-col justify-center sm:space-y-10 xl:h-[93dvh] p-3 sm:p-5 animate-fadeIn bg-black">
            {/* Hero */}
            <section className="flex flex-col items-center justify-center max-w-8xl mx-auto p-5">
                {/* Espaciador superior */}
                <div className="w-full border-x border-neutral-800 border-dashed">
                    <div className="max-w-xl mx-auto py-4 sm:py-5 border-x border-neutral-800 border-dashed" />
                </div>

                {/* Título */}
                <article className="w-full text-center border border-neutral-800 border-dashed py-4 sm:py-5 px-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-neutral-300 leading-tight">
                        Generador de Contraseñas Seguras
                    </h1>
                </article>

                {/* Descripción */}
                <article className="w-full text-center border-x border-neutral-800 border-dashed py-6 sm:py-10 px-4">
                    <p className="max-w-3xl mx-auto text-lg lg:text-xl xl:text-2xl text-neutral-600 leading-relaxed">
                        Crea contraseñas seguras para <span className="text-neutral-300">proteger tus cuentas de internet o verifica que tan seguras son</span> las contraseñas que quieres usar. 🔐
                    </p>
                </article>

                {/* Botones */}
                <article className="w-full text-center border border-neutral-800 border-dashed">
                    <div className="flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto p-5 sm:p-10 border-x border-neutral-800 border-dashed gap-3 sm:gap-5">
                        <Link
                            href=""
                            className="flex items-center gap-2 bg-neutral-200 hover:opacity-80 transition-opacity duration-200 px-4 py-3 rounded-lg font-semibold text-sm xl:text-base w-full sm:w-auto justify-center"
                        >
                            <KeySquareIcon className="size-4 sm:size-5" />
                            Generar Contraseña
                        </Link>
                        <Link
                            href=""
                            className="flex items-center gap-2 bg-neutral-950 text-white border border-neutral-800 hover:bg-neutral-800 transition-colors duration-200 px-4 py-3 rounded-lg font-semibold text-sm xl:text-base w-full sm:w-auto justify-center"
                        >
                            <RotateCcwKeyIcon className="size-4 sm:size-5" />
                            Verificar Contraseña
                        </Link>
                    </div>
                </article>

                {/* Espaciador inferior */}
                <div className="w-full border-x border-neutral-800 border-dashed">
                    <div className="max-w-xl mx-auto py-4 sm:py-5 border-x border-neutral-800 border-dashed" />
                </div>
            </section>

            {/* Sección inferior */}
            <section className="py-3 sm:py-5 px-3 sm:px-7 w-full max-w-7xl mx-auto">
                <p className="flex flex-col lg:flex-row items-center justify-center max-w-3xl mx-auto text-neutral-500 text-center px-4">
                    <span className="font-bold text-neutral-300 text-xl md:text-2xl mr-2">¿Qué hay en Esece?</span>
                    <span className="text-base xl:text-lg">Todo lo que necesitas para gestionar tus contraseñas.</span>
                </p>
            </section>
        </main>
    )
}
