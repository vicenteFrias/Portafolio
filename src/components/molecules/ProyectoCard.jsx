import { Card, Typography, Tag, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

export const ProyectoCard = ({ proyecto }) => {
    return (
        <Card
            hoverable
            style={{ borderRadius: 16, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
            styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column' } }}
            cover={
                <img
                    alt={proyecto.titulo}
                    src={proyecto.imagen}
                    style={{ height: 160, objectFit: 'cover' }}
                />
            }
            title={proyecto.titulo}
            extra={
                <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#2563eb', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                    <GithubOutlined /> Repositorio
                </a>
            }
        >
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
