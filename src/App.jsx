import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import { Inicio } from './pages/Inicio';

export const App = () => {
  return (
      <ConfigProvider
          locale={esES}
          theme={{
            token: {
              colorPrimary: '#2563eb',       // Azul principal
              colorLink: '#2563eb',          // Enlaces en azul
              colorBgContainer: '#ffffff',   // Fondo blanco de las tarjetas
              borderRadius: 12,              // Bordes suaves
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            },
          }}
      >
        <Inicio />
      </ConfigProvider>
  );
};

export default App;
