import { useState, useEffect } from 'react';
import { proyectosData } from '../data/portafolioData';

export const useProyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const temporizador = setTimeout(() => {
            setProyectos(proyectosData);
            setCargando(false);
        }, 600);

        // Limpieza de recursos al desmontar el componente
        return () => clearTimeout(temporizador);
    }, []);

    return { proyectos, cargando };
};