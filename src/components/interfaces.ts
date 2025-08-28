export interface PasswordStrength {
    level: "none" | "weak" | "medium" | "strong" | "very-strong";
    text: string;
    color: string;
    image: string;
}

export interface CharacterValidation {
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSymbols: boolean;
    length: number;
}

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
        descripcion: "Cuanto más larga es una contraseña, más segura es. Una contraseña segura debe tener al menos 12 caracteres. Considera usar una frase larga o una combinación de palabras aleatorias.",
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

export interface Pqrs {
    id: string
    question: string
    answer: string
}

export const pqrs: Pqrs[] = [
    {
        id: "1",
        question: "¿Es seguro usar este Generador de Contraseñas?",
        answer:
            "¡Claro que sí! El Generador de contraseñas aleatorias de Esece utiliza la entropía matemática para crear una contraseña aleatoria compuesta por números, letras y símbolos. Los caracteres obtenidos con este generador de contraseñas automático son totalmente aleatorios y no se transmiten por internet, así obtienes la contraseña más segura mediante el proceso de generación de contraseñas. Nadie, ni siquiera Esece, puede ver tu contraseña personal privada.",
    },
    {
        id: "2",
        question: "¿Por qué debería usar un Generador de Contraseñas?",
        answer:
            "Los ordenadores pueden averiguar rápida y fácilmente las contraseñas. Cualquier hacker puede probar miles de millones de contraseñas diferentes en cuestión de segundos con ayuda de un equipo de sobremesa tradicional. Hemos desarrollado un generador de contraseñas en línea para que puedas mantener segura tu información privada. Nuestro generador de contraseñas gratuito se basa en un algoritmo de aleatoriedad matemática para crear contraseñas realmente seguras y aleatorias.",
    },
    {
        id: "3",
        question: "¿Necesito una contraseña única para cada cuenta?",
        answer:
            "Sí, es fundamental usar una contraseña única para cada cuenta en línea que puedas tener. Una vez que las contraseñas se filtran debido a una brecha de seguridad, los hackers suelen guardarlas en una base de datos de contraseñas filtradas. Evita que tu información personal quede expuesta en la web oscura usando el Generador de contraseñas aleatorias de Esece. Creará contraseñas aleatorias para usarlas en cada cuenta y no tener que reutilizarlas.",
    },
    {
        id: "4",
        question: "¿Cuáles son los requisitos para una contraseña segura?",
        answer:
            "Si quieres obtener una contraseña segura, debes crear contraseñas aleatorias utilizando la entropía criptográfica. Lamentablemente, las contraseñas generadas por el ser humano son siempre débiles. ¿Por qué? Porque los humanos siguen patrones predecibles al escribir en un teclado. Por muy inteligente que te creas, lo más probable es que un hacker consiga descifrarla probando miles de millones de contraseñas al azar. El Generador de contraseñas de Esece crea instantáneamente caracteres largos y criptográficamente seguros. Los caracteres se generan localmente en tu máquina. Esece nunca genera, envía, recibe ni almacena ninguna contraseña. El Generador automático de contraseñas es una herramienta valiosa que puedes utilizar si deseas aprovechar la potencia de tu equipo y su gran capacidad criptográfica.",
    },
    {
        id: "5",
        question: "¿Qué hace que una contraseña sea segura?",
        answer:
            "Crear una contraseña segura es una tarea difícil, sobre todo si necesitas disponer de una contraseña segura para varios sitios. Se hace difícil memorizar las contraseñas con entropía criptográfica que combinan caracteres con símbolos especiales. Es una de las razones por las que muchas personas usan la misma contraseña para varios sitios, a pesar de que sepan que no es seguro.",
    },
]
