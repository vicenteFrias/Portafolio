import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Estudios } from '../components/organisms/Estudios';
// Importamos la data para validar dinámicamente
import { estudiosData } from '../data/portafolioData';

describe('Pruebas en <Estudios />', () => {
    test('debe renderizar todos los títulos de estudio', () => {
        // Montamos el componente
        render(<Estudios />);

        // Iteramos sobre los datos reales que creamos
        estudiosData.forEach((estudio) => {
            // Por cada elemento del arreglo, validamos que su título e institución se estén mostrando en pantalla
            expect(screen.getByText(estudio.titulo)).toBeInTheDocument();
            expect(screen.getByText(estudio.institucion)).toBeInTheDocument();
        });
    });
});