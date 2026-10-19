import { Card, Timeline, Typography } from 'antd';
import { BuildOutlined } from '@ant-design/icons';
import { experienciasData } from '../../data/portafolioData';
import { ExperienciaItem } from '../molecules/ExperienciaItem';

const { Title, Paragraph } = Typography;


// Organiza las experiencias laborales en una línea de tiempo.
export const Experiencia = () => {
    return (
        <Card
            id="experiencia"
            variant="borderless"
            style={{ marginBottom: 24, borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
        >
            <div style={{ marginBottom: 24 }}>
                <Title level={3} style={{ margin: 0 }}>
                    <BuildOutlined style={{ color: '#2563eb', marginRight: 8 }} />
                    Experiencia Laboral
                </Title>
                <Paragraph type="secondary" style={{ marginTop: 4 }}>
                    Trayectoria profesional cronológica y desarrollo de competencias en entornos de trabajo reales.
                </Paragraph>
            </div>

            {/* Convierte cada experiencia en un punto de la línea de tiempo. */}
            <Timeline
                items={experienciasData.map((exp, idx) => ({
                    color: '#2563eb',
                    children: <ExperienciaItem key={idx} experiencia={exp} />,
                }))}
            />
        </Card>
    );
};