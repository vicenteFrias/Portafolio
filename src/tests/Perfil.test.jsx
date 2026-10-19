
// screen: nos permite buscar elementos renderizados (textos, botones, roles).
// fireEvent: simula interacciones del usuario (clics, escritura).
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Perfil } from '../components/organisms/Perfil';
import { datosPersonales } from '../data/portafolioData';

describe('Pruebas en <Perfil />', () => {
    test('debe mostrar el nombre y los datos de contacto centralizados', () => {
        // Montamos el componente pasando funciones vacías como props
        render(<Perfil alIrAProyectos={() => {}} alIrAContacto={() => {}} />);

        // Buscamos que los textos específicos existan en el documento renderizado
        expect(screen.getByText(datosPersonales.nombre)).toBeInTheDocument();
        expect(screen.getByText('Datos Personales')).toBeInTheDocument();
        expect(screen.getByText('Idiomas')).toBeInTheDocument();
        expect(screen.getByText('Español')).toBeInTheDocument();
    });

    test('debe disparar la navegación al hacer clic en los botones de acción', () => {
        // vi.fn() crea funciones para saber si fueron llamadas y cuántas veces
        const fnProyectos = vi.fn();
        const fnContacto = vi.fn();

        // Renderizamos pasando las funciones como props
        render(<Perfil alIrAProyectos={fnProyectos} alIrAContacto={fnContacto} />);

        // Simulamos un clic en el botón que contiene el texto "Explorar proyectos"
        fireEvent.click(screen.getByRole('button', { name: /explorar proyectos/i }));
        // Comprobamos que la función fue ejecutada exactamente 1 vez
        expect(fnProyectos).toHaveBeenCalledTimes(1);

        // Repetimos el proceso para el botón de contacto
        fireEvent.click(screen.getByRole('button', { name: /contactar/i }));
        expect(fnContacto).toHaveBeenCalledTimes(1);
    });
});