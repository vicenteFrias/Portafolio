import { Card, Row, Col, Typography, Space, Avatar, Progress, Tag, Divider } from 'antd';
import {
    UserOutlined,
    ArrowRightOutlined,
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    GlobalOutlined,
    IdcardOutlined,
    LinkedinOutlined,
    GithubOutlined,
    QuestionCircleOutlined,
} from '@ant-design/icons';
import { Boton } from '../atoms/Boton';
import { Badge } from '../atoms/Badge';
import { datosPersonales } from '../../data/portafolioData';
import Retrato from '../../assets/Retrato.png';

const { Title, Paragraph, Text } = Typography;

// Reúne la presentación, e informacion principal personal.
export const Perfil = ({ alIrAProyectos, alIrAContacto }) => {
    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* Tarjeta Principal de Presentación y mi informacion personal */}
            <Card
                variant="borderless"
                styles={{ body: { padding: 0 } }}
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
                            size={130}
                            src={datosPersonales?.foto || Retrato}
                            alt={datosPersonales?.nombre || 'Vicente Frias'}
                            icon={<UserOutlined />}
                            style={{
                                backgroundColor: '#ffffff',
                                border: '4px solid #ffffff',
                                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                            }}
                        />
                    </Col>
                    <Col xs={24} md={16} style={{ padding: 32 }}>
                        <Badge texto="DESARROLLADOR • 24 AÑOS" />
                        <Title level={2} style={{ marginTop: 8, marginBottom: 4 }}>
                            {datosPersonales?.nombre}
                        </Title>
                        <Text strong style={{ color: '#2563eb', fontSize: '1.05rem', display: 'block', marginBottom: 12 }}>
                            {datosPersonales?.titulo}
                        </Text>

                        {/* Subsección "¿Quién soy?": Requerimiento explícito de la rúbrica */}
                        <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: 10, marginBottom: 20 }}>
                            <Text strong style={{ color: '#1e293b', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                                <QuestionCircleOutlined style={{ color: '#2563eb' }} /> ¿Quién soy?
                            </Text>
                            <Paragraph type="secondary" style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>
                                {datosPersonales?.quienSoy}
                            </Paragraph>
                        </div>

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

            {/* Fila de Tarjetas Extras, datos de Contacto e idiomas */}
            {/* Las columnas se apilan en pantallas pequeñas y se muestran lado a lado en otras pantallas pequeñas*/}
            <Row gutter={[16, 16]}>
                {/* Datos de contacto y redes */}
                <Col xs={24} md={12}>
                    <Card
                        title={
                            <Space>
                                <IdcardOutlined style={{ color: '#2563eb' }} />
                                <span>Datos Personales</span>
                            </Space>
                        }
                        variant="borderless"
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

                            <Divider style={{ margin: '8px 0' }} />

                            <Space wrap size="middle">
                                <a
                                    href={datosPersonales?.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#2563eb', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                                >
                                    <LinkedinOutlined /> LinkedIn
                                </a>
                                <a
                                    href={datosPersonales?.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#1e293b', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                                >
                                    <GithubOutlined /> GitHub
                                </a>
                            </Space>
                        </Space>
                    </Card>
                </Col>

                {/* Idiomas */}
                <Col xs={24} md={12}>
                    <Card
                        title={
                            <Space>
                                <GlobalOutlined style={{ color: '#2563eb' }} />
                                <span>Idiomas</span>
                            </Space>
                        }
                        variant="borderless"
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
