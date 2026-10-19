import { Card, Row, Col, Typography } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import { estudiosData } from '../../data/portafolioData';
import { EstudioCard } from '../molecules/EstudioCard';

const { Title, Paragraph } = Typography;

// Toma la lista de estudios y muestra cada uno con el componente EstudioCard.
export const Estudios = () => (
    <Card
        id="educacion"
        variant="borderless"
        style={{ marginBottom: 24, borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
    >
        <div style={{ marginBottom: 20 }}>
            <Title level={3} style={{ margin: 0 }}>
                <ReadOutlined style={{ color: '#2563eb', marginRight: 8 }} />
                Estudios y Formación Académica
            </Title>
            <Paragraph type="secondary" style={{ marginTop: 4 }}>
                Antecedentes de educación formal superior y cursos de especialización técnica.
            </Paragraph>
        </div>

        <Row gutter={[16, 16]}>
            {/* Cada elemento de la lista se acomoda en una columna adaptable. */}
            {estudiosData.map((item, idx) => (
                <Col xs={24} md={12} key={idx}>
                    <EstudioCard estudio={item} />
                </Col>
            ))}
        </Row>
    </Card>
);