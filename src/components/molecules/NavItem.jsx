// Muestra una opción de navegación y avisa al componente padre cuando se selecciona.
export const NavItem = ({ label, isActive, onClick }) => {
    // El estilo cambia según si esta opción corresponde a la sección actual.
    const style = {
        padding: '10px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: isActive ? '600' : '400',
        backgroundColor: isActive ? 'var(--blue-light)' : 'transparent',
        color: isActive ? 'var(--primary-blue)' : 'var(--text-muted)',
        transition: 'background-color 0.2s',
    };

    return (
        // Al hacer clic, ejecuta la función de navegación recibida por props.
        <div style={style} onClick={onClick}>
            {label}
        </div>
    );
};
