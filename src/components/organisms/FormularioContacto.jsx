import { Modal, Form, Input, Alert } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Boton } from '../atoms/Boton';
import { useContacto } from '../../hooks/useContacto';

export const FormularioContacto = ({ abierto, alCerrar }) => {
    const [form] = Form.useForm();
    const { enviado, enviarFormulario, reiniciarEstado } = useContacto();

    const alTerminar = (valores) => {
        enviarFormulario(valores);
        form.resetFields();
    };

    const manejarCierre = () => {
        reiniciarEstado();
        alCerrar();
    };

    return (
        <Modal
            title="Contacto"
            open={abierto}
            onCancel={manejarCierre}
            footer={null}
            destroyOnClose
        >
            {enviado ? (
                <Alert
                    message="¡Mensaje enviado!"
                    description="Gracias por contactarme, te responderé a la brevedad."
                    type="success"
                    showIcon
                    closable
                    onClose={reiniciarEstado}
                    style={{ marginTop: 16 }}
                />
            ) : (
                <Form form={form} layout="vertical" onFinish={alTerminar} style={{ marginTop: 16 }}>
                    <Form.Item
                        label="Nombre"
                        name="nombre"
                        rules={[{ required: true, message: 'Ingresa tu nombre' }]}
                    >
                        <Input placeholder="Tu nombre" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Correo electrónico"
                        name="email"
                        rules={[
                            { required: true, type: 'email', message: 'Ingresa un correo válido' }
                        ]}
                    >
                        <Input placeholder="tu@email.com" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Mensaje"
                        name="mensaje"
                        rules={[{ required: true, message: 'Escribe tu mensaje' }]}
                    >
                        <Input.TextArea rows={4} placeholder="Escribe tu mensaje aquí..." />
                    </Form.Item>

                    <Boton tipo="primary" htmlType="submit" icon={<SendOutlined />}>
                        Enviar Mensaje
                    </Boton>
                </Form>
            )}
        </Modal>
    );
};
