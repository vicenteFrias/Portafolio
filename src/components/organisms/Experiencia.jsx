import React from 'react';
import { Card, Timeline, Typography, Tag } from 'antd';
import { BuildOutlined } from '@ant-design/icons';
import { experienciasData } from '../../data/portafolioData';

const { Title, Text, Paragraph } = Typography;

export const Experiencia = () => {
    return (
        <Card id="experiencia" style={{ marginBottom: 24, borderRadius: 16 }}>
            <Title level={3} style={{ marginBottom: 24 }}>
                <BuildOutlined style={{ color: '#2563eb', marginRight: 8 }} />
                Experiencia Laboral
            </Title>

            <Timeline
                items={experienciasData.map((exp, idx) => ({
                    color: '#2563eb',
                    children: (
                        <div key={idx} style={{ marginBottom: 12 }}>
                            <Text strong style={{ fontSize: '1.05rem', display: 'block' }}>
                                {exp.cargo}
                            </Text>

                            <Text type="secondary" style={{ display: 'block', marginBottom: 4 }}>
                                {exp.empresa} • <Tag color="blue">{exp.periodo}</Tag>
                            </Text>

                            <Paragraph type="secondary" style={{ margin: 0 }}>
                                {exp.descripcion}
                            </Paragraph>
                        </div>
                    ),
                }))}
            />
        </Card>
    );
};