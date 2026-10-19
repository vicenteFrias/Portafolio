import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { useContacto } from '../hooks/useContacto';
import { useProyectos } from '../hooks/useProyectos';

describe('Pruebas en Custom Hooks', () => {
    test('useContacto debe manejar el estado de envío y reinicio correctamente', () => {
        // Inicializamos el hook
        const { result } = renderHook(() => useContacto());

        // Verificamos estado inicial
        expect(result.current.enviado).toBe(false);

        // Simulamos envío de datos
        act(() => {
            result.current.enviarFormulario({
                nombre: 'Vicente Frias',
                email: 'vicente@ejemplo.com',
                mensaje: 'Prueba de mensaje',
            });
        });
        expect(result.current.enviado).toBe(true);

        // Simulamos reinicio de estado
        act(() => {
            result.current.reiniciarEstado();
        });
        expect(result.current.enviado).toBe(false);
    });

    test('useProyectos debe simular la carga asíncrona de datos con temporizador', async () => {
        // Activamos temporizadores virtuales para controlar el paso del tiempo en la prueba
        vi.useFakeTimers();

        const { result } = renderHook(() => useProyectos());

        // Al inicio, los datos están cargando
        expect(result.current.cargando).toBe(true);

        // Adelantamos el tiempo virtual 600ms (tiempo del setTimeout)
        act(() => {
            vi.advanceTimersByTime(600);
        });

        // Verificamos que la carga finalizó y que se cargaron los proyectos
        expect(result.current.cargando).toBe(false);
        expect(result.current.proyectos.length).toBeGreaterThan(0);

        // Restauramos los temporizadores reales
        vi.useRealTimers();
    });
});