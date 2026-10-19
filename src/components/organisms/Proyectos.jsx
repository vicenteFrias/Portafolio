import React from 'react';
import { Card, Row, Col, Typography, Tag, Spin, Button } from 'antd';
import { FolderOutlined, GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { useProyectos } from '../../hooks/useProyectos';
import { datosPersonales } from '../../data/portafolioData';

const { Title, Paragraph } = Typography;

export const Proyectos = () => {
    const { proyectos, cargando } = useProyectos();

    return (
        <Card
            id="proyectos"
            style={{ marginBottom: 24, borderRadius: 16 }}
            extra={
                <Button
                    type="primary"
                    icon={<GithubOutlined />}
                    href={datosPersonales?.github}
                    target="_blank"
                    style={{ backgroundColor: '#24292e' }}
                >
                    Ver mi GitHub
                </Button>
            }
        >
            <Title level={3} style={{ marginBottom: 24 }}>
                <FolderOutlined style={{ color: '#2563eb', marginRight: 8 }} />
                Proyectos Destacados
            </Title>

            {cargando ? (
                <div style={{ textAlign: 'center', padding: '50px 0' }}>
                    <Spin size="large" tip="Cargando proyectos..." />
                </div>
            ) : (
                <Row gutter={[16, 16]}>
                    {proyectos.map((proy) => (
                        <Col xs={24} md={12} lg={8} key={proy.id}>
                            <Card
                                type="inner"
                                title={proy.titulo}
                                style={{ height: '100%', borderRadius: 12, display: 'flex', flexDirection: 'column' }}
                                styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column' } }}
                                // Link al repositorio individual de cada proyecto
                                extra={
                                    <a href={proy.github} target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>
                                        <LinkOutlined style={{ fontSize: '1.2rem' }} />
                                    </a>
                                }
                            >
                                <Paragraph type="secondary" style={{ flexGrow: 1 }}>
                                    {proy.descripcion}
                                </Paragraph>

                                <div style={{ marginTop: 'auto' }}>
                                    {proy.tecnologias.map((tech) => (
                                        <Tag key={tech} color="blue" style={{ marginBottom: 8 }}>
                                            {tech}
                                        </Tag>
                                    ))}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Card>
    );
};