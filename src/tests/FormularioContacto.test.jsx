import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { FormularioContacto } from '../components/organisms/FormularioContacto';

describe('Pruebas en <FormularioContacto />', () => {
    test('debe renderizar los inputs cuando el modal está activo', () => {
        // Renderizamos el modal indicando que está abierto
        render(<FormularioContacto abierto={true} alCerrar={() => {}} />);

        // getByLabelText busca el input asociado al texto del label.
        // La "i" indica case-insensitive (ignora mayúsculas/minúsculas).
        expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    });

    test('debe permitir la escritura en los campos del formulario', () => {
        render(<FormularioContacto abierto={true} alCerrar={() => {}} />);

        // Guardamos la referencia al input de nombre
        const inputNombre = screen.getByLabelText(/nombre/i);

        // Simulamos que el usuario escribe "Vicente Frias" en ese input
        fireEvent.change(inputNombre, { target: { value: 'Vicente Frias' } });

        // Comprobamos que el valor interno del input ahora sea "Vicente Frias"
        expect(inputNombre.value).toBe('Vicente Frias');
    });
});