import { useState } from 'react';
import { PortafolioTemplate } from '../components/templates/PortafolioTemplate';
import { NavBar } from '../components/organisms/NavBar';
import { Perfil } from '../components/organisms/Perfil';
import { Proyectos } from '../components/organisms/Proyectos';
import { Experiencia } from '../components/organisms/Experiencia';
import { Estudios } from '../components/organisms/Estudios';
import { Habilidades } from '../components/organisms/Habilidades';
import { FormularioContacto } from '../components/organisms/FormularioContacto';
import { FooterPagina } from '../components/organisms/Footer';

export const Inicio = () => {
    const [seccionActiva, setSeccionActiva] = useState('personal');
    const [modalContactoAbierto, setModalContactoAbierto] = useState(false);

    const manejarNavegacion = (key) => {
        if (key === 'contacto') {
            setModalContactoAbierto(true);
        } else {
            setSeccionActiva(key);
        }
    };

    const renderizarOrganismoCentrado = () => {
        switch (seccionActiva) {
            case 'personal':
                return (
                    <Perfil
                        alIrAProyectos={() => setSeccionActiva('proyectos')}
                        alIrAContacto={() => setModalContactoAbierto(true)}
                    />
                );
            case 'proyectos':
                return <Proyectos />;
            case 'experiencia':
                return <Experiencia />;
            case 'educacion':
                return <Estudios />;
            case 'habilidades':
                return <Habilidades />;
            default:
                return (
                    <Perfil
                        alIrAProyectos={() => setSeccionActiva('proyectos')}
                        alIrAContacto={() => setModalContactoAbierto(true)}
                    />
                );
        }
    };

    return (
        <>
            <PortafolioTemplate
                barraLateral={
                    <NavBar
                        seccionActiva={seccionActiva}
                        alSeleccionarSeccion={manejarNavegacion}
                    />
                }
                contenido={renderizarOrganismoCentrado()}
                pieDePagina={<FooterPagina />}
            />

            <FormularioContacto
                abierto={modalContactoAbierto}
                alCerrar={() => setModalContactoAbierto(false)}
            />
        </>
    );
};