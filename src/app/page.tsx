"use client";

import Hero from "@/components/Hero";
import { useEffect } from "react";
import { toast } from "@pheralb/toast";
import Generate from "@/components/Generate";
// import Verify from "@/components/Verify";

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
            {/* <Verify /> */}
        </section>
    );
}
