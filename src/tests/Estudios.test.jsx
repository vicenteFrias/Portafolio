import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Estudios } from '../components/organisms/Estudios';
import { estudiosData } from '../data/portafolioData';

describe('Pruebas en <Estudios />', () => {
    test('debe renderizar todos los títulos de estudio e instituciones', () => {
        render(<Estudios />);

        // Itera sobre el arreglo de datos para asegurar correspondencia 1:1 en pantalla
        estudiosData.forEach((estudio) => {
            expect(screen.getByText(estudio.titulo)).toBeInTheDocument();
            expect(screen.getByText(estudio.institucion)).toBeInTheDocument();
        });
    });
});