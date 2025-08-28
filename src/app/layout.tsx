import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@pheralb/toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { XIcon } from "lucide-react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Generador de Contraseñas Esece | Generador y verificador de contraseñas seguras",
    keywords: ["generador", "contraseñas", "seguras"],
    description: "Generador de Contraseñas Esece: Genera y verifica la seguridad de tus contraseñas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={inter.className}>
                {/* Contenido principal */}
                <div className="flex flex-col flex-1 h-dvh">
                    <Navbar />
                    <main className="flex-1 overflow-y-scroll bg-black">
                        {children}
                        <Toaster
                            position="bottom-right"
                            toastOptions={{
                                animationOnClose: "swipe",
                                defaultCloseContent: <XIcon />,
                                classNames: {
                                    toast: "toast-dark",
                                }
                            }}
                        />
                        <Footer />
                    </main>
                </div>
            </body>
        </html>
    );
}
