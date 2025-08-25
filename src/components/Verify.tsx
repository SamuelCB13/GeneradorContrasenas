"use client";

export default function Verify() {
    return (
        <div className="relative bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" id="verify">
            <section className="flex flex-col justify-center sm:space-y-10 p-3 sm:p-5">
                <article className="flex flex-col items-center justify-center max-w-7xl mx-auto p-5">
                    {/* Título */}
                    <header className="w-full text-center py-4 sm:py-5 px-5">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-300 leading-tight">
                            Verifica las contraseñas que quieras usar
                        </h1>
                    </header>
                </article>
            </section>
        </div>
    )
}
