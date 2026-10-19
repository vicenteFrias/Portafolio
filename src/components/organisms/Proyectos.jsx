import { Card, Row, Col, Typography, Spin } from 'antd';
import { FolderOutlined } from '@ant-design/icons';
import { useProyectos } from '../../hooks/useProyectos';
import { ProyectoCard } from '../molecules/ProyectoCard';

const { Title, Paragraph } = Typography;

// Obtiene los proyectos con un hook y muestra su carga o sus tarjetas
export const Proyectos = () => {
    const { proyectos, cargando } = useProyectos();

    return (
        <Card
            id="proyectos"
            variant="borderless"
            style={{ marginBottom: 24, borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
        >
            <div style={{ marginBottom: 24 }}>
                <Title level={3} style={{ margin: 0 }}>
                    <FolderOutlined style={{ color: '#2563eb', marginRight: 8 }} />
                    Proyectos Destacados
                </Title>
                <Paragraph type="secondary" style={{ marginTop: 4 }}>
                    Galería de aplicaciones desarrolladas con código abierto, demostrando arquitectura y diseño frontend.
                </Paragraph>
            </div>

            {/* Mientras se cargan los datos aparece un indicador; luego se muestran las tarjetas. */}
            {cargando ? (
                <div style={{ textAlign: 'center', padding: 48 }}>
                    <Spin size="large" tip="Cargando proyectos..." />
                </div>
            ) : (
                <Row gutter={[20, 20]}>
                    {proyectos.map((proyecto) => (
                        <Col xs={24} md={12} key={proyecto.id}>
                            <ProyectoCard proyecto={proyecto} />
                        </Col>
                    ))}
                </Row>
            )}
        </Card>
    );
};

export const SeccionProyectos = Proyectos;