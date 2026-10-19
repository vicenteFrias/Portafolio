import { Space, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

export const Display = ({ titulo, descripcion }) => (
    <Space align="start" style={{ marginBottom: 12 }}>
        <CheckCircleOutlined style={{ color: '#2563eb', fontSize: 18, marginTop: 2 }} />
        <div>
            <Text strong style={{ display: 'block' }}>{titulo}</Text>
            {descripcion && <Text type="secondary" style={{ fontSize: '0.85rem' }}>{descripcion}</Text>}
        </div>
    </Space>
);
