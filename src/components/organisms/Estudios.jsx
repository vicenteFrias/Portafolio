import { Card, Row, Col, Typography, Tag } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import { estudiosData } from '../../data/portafolioData';

const { Title, Text } = Typography;

export const Estudios = () => (
    <Card id="educacion" style={{ marginBottom: 24, borderRadius: 16 }}>
        <Title level={3} style={{ marginBottom: 20 }}>
            <ReadOutlined style={{ color: '#2563eb', marginRight: 8 }} />
            Estudios y Formación
        </Title>

        <Row gutter={[16, 16]}>
            {estudiosData.map((item, idx) => (
                <Col xs={24} md={12} key={idx}>
                    <Card
                        type="inner"
                        style={{ height: '100%', borderRadius: 12 }}
                        styles={{
                            header: {
                                height: 'auto',
                                padding: '12px 16px',
                                alignItems: 'flex-start',
                            },
                        }}
                        title={
                            <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', paddingRight: 8, lineHeight: '1.4' }}>
                                {item.titulo}
                            </div>
                        }
                        extra={
                            <Tag color="processing" style={{ margin: 0, marginTop: 2 }}>
                                {item.anio}
                            </Tag>
                        }
                    >
                        <Text type="secondary">{item.institucion}</Text>
                    </Card>
                </Col>
            ))}
        </Row>
    </Card>
);