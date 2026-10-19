import { Layout } from 'antd';

const { Sider, Content } = Layout;

export const PortafolioTemplate = ({ barraLateral, contenido, pieDePagina }) => (
    <Layout style={{ minHeight: '100vh', background: '#f8fafc' }}>
        {/* Barra lateral fija en pantalla al hacer scroll */}
        <Sider
            width={260}
            theme="light"
            style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflowY: 'auto',
                borderRight: '1px solid #f0f0f0',
                zIndex: 10,
            }}
        >
            {barraLateral}
        </Sider>

        {/* Área de contenido que centra horizontal y verticalmente la sección activa */}
        <Layout style={{ background: '#f8fafc', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Content
                style={{
                    padding: '32px 48px',
                    maxWidth: 900,
                    width: '100%',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flex: 1,
                }}
            >
                {contenido}
            </Content>

            {pieDePagina}
        </Layout>
    </Layout>
);
