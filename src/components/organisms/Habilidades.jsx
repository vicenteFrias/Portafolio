import React from 'react';
import { Card, Typography } from 'antd';
import { Badge } from '../atoms/Badge';
import { habilidadesData } from '../../data/portafolioData';

const { Text, Title } = Typography;

export const Habilidades = () => {
    return (
        <Card
            bordered={false}
            style={{
                borderRadius: 16,
                marginBottom: 24,
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
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
                ESPECIALIDAD PRINCIPAL
            </Text>

            <Title level={3} style={{ margin: '8px 0 20px 0' }}>
                Arquitectura & Backend
            </Title>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {habilidadesData.map((tech) => (
                    <Badge key={tech} texto={tech} />
                ))}
            </div>
        </Card>
    );
};