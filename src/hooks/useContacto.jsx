import { useState } from 'react';

export const useContacto = () => {
    const [enviado, setEnviado] = useState(false);

    const enviarFormulario = (valores) => {
        console.log('Mensaje de contacto enviado:', valores);
        setEnviado(true);
    };

    const reiniciarEstado = () => {
        setEnviado(false);
    };

    return {
        enviado,
        enviarFormulario,
        reiniciarEstado,
    };
};