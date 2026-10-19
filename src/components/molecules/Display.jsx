import { Space, Typography } from 'antd';
import { CheckIcon } from '../atoms/Icono';

const { Text } = Typography;

/**
 * Componente modular que combina el átomo CheckIcon con componentes de tipografía
 * para mostrar un elemento con viñeta destacada, título y descripción.
 */
export const Display = ({
    titulo,
    descripcion,
    icono = <CheckIcon />,
}) => (
    <Space align="start" style={{ marginBottom: 12 }}>
        {icono}
        <div>
            <Text strong style={{ display: 'block', color: '#1e293b' }}>{titulo}</Text>
            {descripcion && <Text type="secondary" style={{ fontSize: '0.85rem' }}>{descripcion}</Text>}
        </div>
    </Space>
);
