import { Layout, Typography, Space } from 'antd';
import { MailOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { datosPersonales } from '../../data/portafolioData';

const { Footer } = Layout;
const { Text } = Typography;

// Muestra información de contacto y enlaces al final de la página.
export const FooterPagina = () => {
    return (
        <Footer style={{ textAlign: 'center', background: 'transparent', padding: '24px 16px' }}>
            <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                {/* Breve información de contacto que pide la pauta*/}
                <Space wrap split={<Text type="secondary">•</Text>} style={{ justifyContent: 'center' }}>
                    <Text type="secondary" style={{ fontSize: '0.85rem' }}>
                        <MailOutlined style={{ marginRight: 4 }} /> {datosPersonales?.email}
                    </Text>
                    <Text type="secondary" style={{ fontSize: '0.85rem' }}>
                        <EnvironmentOutlined style={{ marginRight: 4 }} /> {datosPersonales?.residencia}
                    </Text>
                    <a
                        href={datosPersonales?.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#2563eb', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    >
                        <LinkedinOutlined /> LinkedIn
                    </a>
                    <a
                        href={datosPersonales?.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#1e293b', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    >
                        <GithubOutlined /> GitHub
                    </a>
                </Space>
            </Space>
        </Footer>
    );
};
