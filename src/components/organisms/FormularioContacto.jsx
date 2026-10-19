import { Modal, Form, Input, Alert, Space, Typography, Divider } from 'antd';
import { SendOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { Boton } from '../atoms/Boton';
import { useContacto } from '../../hooks/useContacto';
import { datosPersonales } from '../../data/portafolioData';

const { Text } = Typography;

// Controla la ventana de contacto y usa el hook para manejar el envío.
export const FormularioContacto = ({ abierto, alCerrar }) => {
    const [form] = Form.useForm();
    const { enviado, enviarFormulario, reiniciarEstado } = useContacto();

    // Controlador de envío exitoso del formulario
    const alTerminar = (valores) => {
        enviarFormulario(valores);
        form.resetFields();
    };

    // Controlador de cierre del modal con reinicio del estado
    const manejarCierre = () => {
        reiniciarEstado();
        alCerrar();
    };

    return (
        <Modal
            title="Ponte en Contacto"
            open={abierto}
            onCancel={manejarCierre}
            footer={null}
            destroyOnHidden
        >
            {/* requerimiento de ka pauta Botones/Enlaces a Redes Sociales */}
            <div style={{ marginTop: 12, marginBottom: 16 }}>
                <Text type="secondary" style={{ display: 'block', marginBottom: 10, fontSize: '0.9rem' }}>
                    Conéctate conmigo en redes profesionales o envíame un mensaje directo:
                </Text>
                <Space wrap size="middle" style={{ width: '100%', justifyContent: 'flex-start' }}>
                    <a
                        href={datosPersonales?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            padding: '6px 14px',
                            borderRadius: 8,
                            background: '#eff6ff',
                            color: '#2563eb',
                            fontWeight: 600,
                            textDecoration: 'none',
                        }}
                    >
                        <LinkedinOutlined /> Perfil LinkedIn
                    </a>
                    <a
                        href={datosPersonales?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            padding: '6px 14px',
                            borderRadius: 8,
                            background: '#f1f5f9',
                            color: '#1e293b',
                            fontWeight: 600,
                            textDecoration: 'none',
                        }}
                    >
                        <GithubOutlined /> Repositorio GitHub
                    </a>
                </Space>
            </div>

            <Divider style={{ margin: '14px 0' }} />

            {/* Formulario del Lado del Cliente que pide la pauta */}
            {/* Después del envío muestra una confirmación, el formulario lo presento con un modal estilo popup */}
            {enviado ? (
                <Alert
                    message="¡Mensaje enviado exitosamente!"
                    description="Gracias por contactarme. He recibido tu mensaje y te responderé a la brevedad."
                    type="success"
                    showIcon
                    closable
                    onClose={reiniciarEstado}
                    style={{ marginTop: 16 }}
                />
            ) : (
                <Form form={form} layout="vertical" onFinish={alTerminar} style={{ marginTop: 12 }}>
                    <Form.Item
                        label="Nombre"
                        name="nombre"
                        rules={[{ required: true, message: 'Por favor, ingresa tu nombre completo' }]}
                    >
                        <Input placeholder="Tu nombre" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Correo electrónico"
                        name="email"
                        rules={[
                            { required: true, message: 'Por favor, ingresa tu correo electrónico' },
                            { type: 'email', message: 'Ingresa un formato de correo válido (ej. usuario@dominio.com)' },
                        ]}
                    >
                        <Input placeholder="tu@email.com" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Mensaje"
                        name="mensaje"
                        rules={[{ required: true, message: 'Por favor, escribe el contenido de tu mensaje' }]}
                    >
                        <Input.TextArea rows={4} placeholder="Escribe tu mensaje o propuesta laboral aquí..." />
                    </Form.Item>

                    <Boton tipo="primary" htmlType="submit" icon={<SendOutlined />}>
                        Enviar Mensaje
                    </Boton>
                </Form>
            )}
        </Modal>
    );
};
