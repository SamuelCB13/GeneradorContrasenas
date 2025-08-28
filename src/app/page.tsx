"use client";

import { useEffect } from "react";
import { toast } from "@pheralb/toast";
import Hero from "@/components/Hero";
import Generate from "@/components/Generate";
import Verify from "@/components/Verify";
import Recomendaciones from "@/components/Recomendaciones";
import PQRSPage from "@/components/Pqrs";

export default function Home() {
    useEffect(() => {
        toast.default({
            text: "¡Bienvenidxs a Esece! ✨",
            description: "Genera y verifica la seguridad de tus contraseñas ahora mismo. 🔐",
            icon: "🎉",
        });
    }, []);

    return (
        <section>
            <Hero />
            <Generate />
            <Verify />
            <Recomendaciones />
            <PQRSPage />
        </section>
    );
}
