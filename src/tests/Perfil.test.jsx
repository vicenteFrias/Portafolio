import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Perfil } from '../components/organisms/Perfil';
import { datosPersonales } from '../data/portafolioData';


describe('Pruebas en <Perfil />', () => {
    test('debe mostrar el nombre, datos de contacto centralizados y sección ¿Quién soy?', () => {
        // Montamos el componente pasando callbacks simulados
        render(<Perfil alIrAProyectos={() => {}} alIrAContacto={() => {}} />);

        // Verificamos que los textos obligatorios existan en el DOM renderizado
        expect(screen.getByText(datosPersonales.nombre)).toBeInTheDocument();
        expect(screen.getByText(/¿Quién soy?/i)).toBeInTheDocument();
        expect(screen.getByText('Datos Personales')).toBeInTheDocument();
        expect(screen.getByText('Idiomas')).toBeInTheDocument();
        expect(screen.getByText('Español')).toBeInTheDocument();
    });

    test('debe disparar la navegación al hacer clic en los botones de acción', () => {
        // Mocks para verificar llamadas y cardinalidad
        const fnProyectos = vi.fn();
        const fnContacto = vi.fn();

        render(<Perfil alIrAProyectos={fnProyectos} alIrAContacto={fnContacto} />);

        // Simulamos click en "Explorar proyectos"
        fireEvent.click(screen.getByRole('button', { name: /explorar proyectos/i }));
        expect(fnProyectos).toHaveBeenCalledTimes(1);

        // Simulamos click en "Contactar"
        fireEvent.click(screen.getByRole('button', { name: /contactar/i }));
        expect(fnContacto).toHaveBeenCalledTimes(1);
    });
});