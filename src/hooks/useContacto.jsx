import { useState } from 'react';

export const useContacto = () => {
    // Estado booleano que determina si el formulario fue despachado exitosamente
    const [enviado, setEnviado] = useState(false);

    // Simulación de envío del mensaje (por ejemplo, integración futura con backend)
    const enviarFormulario = (valores) => {
        console.log('Mensaje de contacto enviado:', valores);
        setEnviado(true);
    };

    // Restablece el formulario a su estado inicial
    const reiniciarEstado = () => {
        setEnviado(false);
    };

    return {
        enviado,
        enviarFormulario,
        reiniciarEstado,
    };
};