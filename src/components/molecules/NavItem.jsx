export const NavItem = ({ label, isActive, onClick }) => {
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
        <div style={style} onClick={onClick}>
            {label}
        </div>
    );
};
