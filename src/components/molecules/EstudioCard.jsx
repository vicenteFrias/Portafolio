import { Card, Typography, Tag } from 'antd';

const { Text } = Typography;

export const EstudioCard = ({ estudio }) => {
    return (
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
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', paddingRight: 8, lineHeight: '1.4', fontWeight: 600 }}>
                    {estudio.titulo}
                </div>
            }
            extra={
                <Tag color="processing" style={{ margin: 0, marginTop: 2, borderRadius: 6 }}>
                    {estudio.anio}
                </Tag>
            }
        >
            <Text type="secondary">{estudio.institucion}</Text>
        </Card>
    );
};
