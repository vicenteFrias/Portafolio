import React from 'react';
import { Menu, Avatar, Space, Typography } from 'antd';
import {
    UserOutlined,
    FolderOutlined,
    BuildOutlined,
    ReadOutlined,
    CheckCircleOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { datosPersonales } from '../../data/portafolioData';

const { Text } = Typography;

export const NavBar = ({ seccionActiva, alSeleccionarSeccion }) => {
    const opciones = [
        { key: 'personal', icon: <UserOutlined />, label: 'Información' },
        { key: 'proyectos', icon: <FolderOutlined />, label: 'Proyectos' },
        { key: 'experiencia', icon: <BuildOutlined />, label: 'Experiencia' },
        { key: 'educacion', icon: <ReadOutlined />, label: 'Estudios' },
        { key: 'habilidades', icon: <CheckCircleOutlined />, label: 'Habilidades' },
        { key: 'contacto', icon: <MailOutlined />, label: 'Contacto' },
    ];

    return (
        <div style={{ padding: 16 }}>
            <Space align="center" style={{ marginBottom: 24 }}>
                <Avatar src={datosPersonales?.foto} style={{ backgroundColor: '#2563eb' }}>
                    VF
                </Avatar>
                <Text strong>{datosPersonales?.nombre || 'Vicente Frias'}</Text>
            </Space>
            <Menu
                mode="inline"
                selectedKeys={[seccionActiva]}
                onClick={({ key }) => alSeleccionarSeccion && alSeleccionarSeccion(key)}
                items={opciones}
                style={{ borderRight: 0 }}
            />
        </div>
    );
};