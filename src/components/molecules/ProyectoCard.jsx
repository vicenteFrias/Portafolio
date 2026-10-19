import { Card, Typography, Tag, Space } from 'antd';

const { Paragraph } = Typography;

// Recibe los datos de un proyecto y los organiza en una tarjeta.
export const ProyectoCard = ({ proyecto }) => {
    return (
        <Card
            hoverable
            style={{ borderRadius: 16, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
            styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column' } }}
            cover={
                // La imagen usa el título del proyecto como texto alternativo.
                <img
                    alt={proyecto.titulo}
                    src={proyecto.imagen}
                    style={{ height: 160, objectFit: 'cover' }}
                />
            }
            title={proyecto.titulo}
        >
            {/* Muestra la descripción y una etiqueta por cada tecnología del proyecto. */}
            <Paragraph type="secondary" style={{ flex: 1, marginBottom: 16 }}>
                {proyecto.descripcion}
            </Paragraph>
            <Space wrap size={[6, 8]}>
                {proyecto.tecnologias.map((tech) => (
                    <Tag key={tech} color="blue" style={{ borderRadius: 6, margin: 0 }}>
                        {tech}
                    </Tag>
                ))}
            </Space>
        </Card>
    );
};
