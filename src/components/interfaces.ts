// Interfaz para las recomendaciones
export interface Recomendaciones {
    id: string;
    imageAlt: string;
    imagen: string;
    titulo: string;
    descripcion: string;
}

// Array de datos para las recomendaciones
export const recomendaciones: Recomendaciones[] = [
    {
        id: "manejo-emocional",
        titulo: "Contraseña Larga",
        descripcion: "Cuanto más larga es una contraseña, más segura es. Una contraseña segura debe tener al menos 15 caracteres. Considera usar una frase larga o una combinación de palabras aleatorias.",
        imagen: "/key-check.svg",
        imageAlt: "Emocional Image",
    },
    {
        id: "separacion-residuos",
        titulo: "Contraseña Compleja",
        descripcion: "Las contraseñas seguras utilizan una combinación de letras mayúsculas y minúsculas, números y símbolos para formar una cadena de caracteres impredecible que no se parezca a palabras o nombres.",
        imagen: "/encryption-lock.svg",
        imageAlt: "Residuos Image",
    },
    {
        id: "evaluacion-desempeno",
        titulo: "Contraseña Única",
        descripcion: "Cada cuenta debe tener una contraseña segura y única para reducir la vulnerabilidad en caso de hackeo. Evita reutilizar contraseñas en múltiples sitios web.",
        imagen: "/document-fingerprint.svg",
        imageAlt: "Evaluation Image",
    },
];
