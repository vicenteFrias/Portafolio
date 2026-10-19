import { Typography, Tag } from 'antd';

const { Text, Paragraph } = Typography;

// Muestra los datos principales de una experiencia laboral.
export const ExperienciaItem = ({ experiencia }) => {
    return (
        <div style={{ marginBottom: 16 }}>
            <Text strong style={{ fontSize: '1.05rem', display: 'block', color: '#1e293b' }}>
                {experiencia.cargo}
            </Text>

            <Text type="secondary" style={{ display: 'block', marginBottom: 6 }}>
                {/* El período se resalta con una etiqueta para distinguirlo. */}
                {experiencia.empresa} • <Tag color="blue" style={{ borderRadius: 6 }}>{experiencia.periodo}</Tag>
            </Text>

            {/* Descripción breve de las tareas o responsabilidades del cargo. */}
            <Paragraph type="secondary" style={{ margin: 0, lineHeight: 1.5 }}>
                {experiencia.descripcion}
            </Paragraph>
        </div>
    );
};
