import { Button } from 'antd';

export const Boton = ({ children, tipo = 'primary', onClick, htmlType = 'button', icon }) => (
    <Button type={tipo} onClick={onClick} htmlType={htmlType} icon={icon} size="large">
        {children}
    </Button>
);
