"use client";

import Hero from "@/components/Hero";
import { useEffect } from "react";
import { toast } from "@pheralb/toast";

export default function Home() {
    useEffect(() => {
        toast.default({
            text: "¡Bienvenidxs a Esece! ✨",
            description: "Genera y verifica la seguridad de tus contraseñas ahora mismo.",
            icon: "🎉",
            delayDuration: 5000,
        });
    }, []);

    return (
        <main>
            <Hero />
        </main>
    );
}
