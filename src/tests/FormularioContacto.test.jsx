import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { FormularioContacto } from '../components/organisms/FormularioContacto';

describe('Pruebas en <FormularioContacto />', () => {
    test('debe renderizar redes sociales y campos del formulario cuando el modal está activo', () => {
        render(<FormularioContacto abierto={true} alCerrar={() => {}} />);

        // Verificamos presencia de enlaces a redes sociales (requerimiento de rúbrica)
        expect(screen.getByRole('link', { name: /perfil linkedin/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /repositorio github/i })).toBeInTheDocument();

        // Verificamos presencia de inputs de formulario
        expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    });

    test('debe permitir la escritura en los campos del formulario', () => {
        render(<FormularioContacto abierto={true} alCerrar={() => {}} />);

        const inputNombre = screen.getByLabelText(/nombre/i);
        fireEvent.change(inputNombre, { target: { value: 'Vicente Frias' } });
        expect(inputNombre.value).toBe('Vicente Frias');
    });
});