import { Tag } from 'antd';

export const Badge = ({ texto, label }) => (
    <Tag color="processing" style={{ padding: '4px 12px', fontSize: '0.85rem' }}>
        {texto || label}
    </Tag>
);
