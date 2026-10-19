// renderHook permite probar Custom Hooks de forma aislada sin crear un componente falso.
// act: envuelve las acciones que actualizan el estado de React para evitar advertencias y asegurar consistencia.
import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { useContacto } from '../hooks/useContacto';
import { useProyectos } from '../hooks/useProyectos';

describe('Pruebas en Custom Hooks', () => {
    test('useContacto debe manejar el estado de envío y reinicio correctamente', () => {
        //  Inicializamos el hook
        const { result } = renderHook(() => useContacto());

        //  Verificamos el estado inicial
        expect(result.current.enviado).toBe(false);

        //  Simulamos la acción de enviar el formulario (debe ir dentro de un act() porque cambia el estado)
        act(() => {
            result.current.enviarFormulario({
                nombre: 'Vicente Frias',
                email: 'vicente@ejemplo.com',
                mensaje: 'Prueba de mensaje',
            });
        });
        //  Comprobamos que el estado cambió a verdadero
        expect(result.current.enviado).toBe(true);

        //  Simulamos el reinicio del formulario
        act(() => {
            result.current.reiniciarEstado();
        });
        //  Comprobamos que volvió a falso
        expect(result.current.enviado).toBe(false);
    });

    test('useProyectos debe simular la carga asíncrona de datos', async () => {
        // Tomamos el control de los temporizadores (setTimeout)
        vi.useFakeTimers();

        // Renderizamos el hook
        const { result } = renderHook(() => useProyectos());

        // Comprobamos el estado inicial (cargando = true)
        expect(result.current.cargando).toBe(true);

        // Adelantamos el tiempo virtual en 600ms (lo que dura nuestro setTimeout en el hook)
        act(() => {
            vi.advanceTimersByTime(600);
        });

        // Verificamos que la carga terminó y que hay datos en el arreglo
        expect(result.current.cargando).toBe(false);
        expect(result.current.proyectos.length).toBeGreaterThan(0);

        // Devolvemos el control normal del tiempo al sistema
        vi.useRealTimers();
    });
});