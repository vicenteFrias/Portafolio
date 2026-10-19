import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

export const FooterPagina = () => {
    const anioActual = new Date().getFullYear();

    return (
        <Footer style={{ textAlign: 'center', background: 'transparent' }}>
            <Text type="secondary">
                © {anioActual} Vicente Frias - Analista Programador
            </Text>
        </Footer>
    );
};
