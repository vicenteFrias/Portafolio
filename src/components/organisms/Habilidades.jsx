import { Card, Typography } from 'antd';
import { Badge } from '../atoms/Badge';
import { habilidadesData } from '../../data/portafolioData';

const { Text, Title } = Typography;

// Muestra las habilidades definidas en los datos del portafolio.
export const Habilidades = () => {
    return (
        <Card
            variant="borderless"
            style={{
                borderRadius: 16,
                marginBottom: 24,
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                padding: '16px 8px',
            }}
        >
            <Text
                type="secondary"
                style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    display: 'block',
                }}
            >
                COMPETENCIAS Y TECNOLOGÍAS
            </Text>

            <Title level={3} style={{ margin: '8px 0 20px 0' }}>
                Stack Técnico Frontend & Backend
            </Title>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {/* Crea una insignia visual para cada tecnología o habilidad. */}
                {habilidadesData.map((tech) => (
                    <Badge key={tech} texto={tech} />
                ))}
            </div>
        </Card>
    );
};