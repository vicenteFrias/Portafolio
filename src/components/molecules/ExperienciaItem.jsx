import { Typography, Tag } from 'antd';

const { Text, Paragraph } = Typography;

export const ExperienciaItem = ({ experiencia }) => {
    return (
        <div style={{ marginBottom: 16 }}>
            <Text strong style={{ fontSize: '1.05rem', display: 'block', color: '#1e293b' }}>
                {experiencia.cargo}
            </Text>

            <Text type="secondary" style={{ display: 'block', marginBottom: 6 }}>
                {experiencia.empresa} • <Tag color="blue" style={{ borderRadius: 6 }}>{experiencia.periodo}</Tag>
            </Text>

            <Paragraph type="secondary" style={{ margin: 0, lineHeight: 1.5 }}>
                {experiencia.descripcion}
            </Paragraph>
        </div>
    );
};
