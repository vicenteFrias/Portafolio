import { Card, Row, Col, Typography, Space, Avatar, Progress, Tag } from 'antd';
import {
    UserOutlined,
    ArrowRightOutlined,
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    GlobalOutlined,
    IdcardOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';
import { Boton } from '../atoms/Boton';
import { Badge } from '../atoms/Badge';
import { datosPersonales } from '../../Data/PortafolioData';
import Retrato from '../../assets/Retrato.png';

const { Title, Paragraph, Text } = Typography;

export const Perfil = ({ alIrAProyectos, alIrAContacto }) => {
    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* Tarjeta Principal de Perfil */}
            <Card
                bordered={false}
                styles={{ body: { padding: 0 } }}
                bodyStyle={{ padding: 0 }}
                style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
            >
                <Row align="stretch">
                    <Col
                        xs={24}
                        md={8}
                        style={{
                            background: '#2563eb',
                            padding: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Avatar
                            size={120}
                            src={datosPersonales?.foto || Retrato}
                            alt={datosPersonales?.nombre || 'Vicente Frias'}
                            icon={<UserOutlined />}
                            style={{
                                backgroundColor: '#ffffff',
                                border: '4px solid #ffffff',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                            }}
                        />
                    </Col>
                    <Col xs={24} md={16} style={{ padding: 32 }}>
                        <Badge texto="DESARROLLADOR • 24 AÑOS" />
                        <Title level={2} style={{ marginTop: 8, marginBottom: 8 }}>
                            {datosPersonales?.nombre || 'Vicente Frias'}
                        </Title>
                        <Paragraph type="secondary" style={{ fontSize: '1rem' }}>
                            {datosPersonales?.titulo || 'Analista Programador'}
                        </Paragraph>
                        <Space wrap size="middle">
                            <Boton tipo="primary" icon={<ArrowRightOutlined />} onClick={alIrAProyectos}>
                                Explorar proyectos
                            </Boton>
                            <Boton tipo="default" icon={<MailOutlined />} onClick={alIrAContacto}>
                                Contactar
                            </Boton>
                        </Space>
                    </Col>
                </Row>
            </Card>

            {/* Fila de Tarjetas Complementarias */}
            <Row gutter={[16, 16]}>
                {/* Card: Datos Personales y Contacto */}
                <Col xs={24} md={12}>
                    <Card
                        title={
                            <Space>
                                <IdcardOutlined style={{ color: '#2563eb' }} />
                                <span>Datos Personales</span>
                            </Space>
                        }
                        bordered={false}
                        style={{ borderRadius: 16, height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
                    >
                        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <Space align="center">
                                <Avatar icon={<MailOutlined />} style={{ backgroundColor: '#eff6ff', color: '#2563eb' }} />
                                <div>
                                    <Text type="secondary" style={{ fontSize: '0.75rem', display: 'block', fontWeight: 600 }}>
                                        CORREO ELECTRÓNICO
                                    </Text>
                                    <Text strong>{datosPersonales?.email}</Text>
                                </div>
                            </Space>

                            <Space align="center">
                                <Avatar icon={<PhoneOutlined />} style={{ backgroundColor: '#eff6ff', color: '#2563eb' }} />
                                <div>
                                    <Text type="secondary" style={{ fontSize: '0.75rem', display: 'block', fontWeight: 600 }}>
                                        TELÉFONO
                                    </Text>
                                    <Text strong>{datosPersonales?.telefono}</Text>
                                </div>
                            </Space>

                            <Space align="center">
                                <Avatar icon={<EnvironmentOutlined />} style={{ backgroundColor: '#eff6ff', color: '#2563eb' }} />
                                <div>
                                    <Text type="secondary" style={{ fontSize: '0.75rem', display: 'block', fontWeight: 600 }}>
                                        RESIDENCIA
                                    </Text>
                                    <Text strong>{datosPersonales?.residencia}</Text>
                                </div>
                            </Space>

                            <Space align="center">
                                <Avatar icon={<LinkedinOutlined />} style={{ backgroundColor: '#eff6ff', color: '#2563eb' }} />
                                <div>
                                    <Text type="secondary" style={{ fontSize: '0.75rem', display: 'block', fontWeight: 600 }}>
                                        LINKEDIN
                                    </Text>
                                    <a
                                        href={datosPersonales?.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#2563eb', fontWeight: 600 }}
                                    >
                                        Ver Perfil Profesional
                                    </a>
                                </div>
                            </Space>
                        </Space>
                    </Card>
                </Col>

                {/* Card: Idiomas */}
                <Col xs={24} md={12}>
                    <Card
                        title={
                            <Space>
                                <GlobalOutlined style={{ color: '#2563eb' }} />
                                <span>Idiomas</span>
                            </Space>
                        }
                        bordered={false}
                        style={{ borderRadius: 16, height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
                    >
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                    <Text strong>Español</Text>
                                    <Tag color="blue">Nativo</Tag>
                                </div>
                                <Progress percent={100} showInfo={false} strokeColor="#2563eb" size="small" />
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                    <Text strong>Inglés</Text>
                                    <Tag color="processing">Avanzado / Técnico</Tag>
                                </div>
                                <Progress percent={85} showInfo={false} strokeColor="#2563eb" size="small" />
                            </div>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </Space>
    );
};
