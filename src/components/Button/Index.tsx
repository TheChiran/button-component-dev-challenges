import React from 'react';
import './button.scss';

interface ButtonProps {
    variant?: 'default' | 'outline' | 'text';
    disabled?: boolean;
    disableShadow?: boolean;
    startIcon?: string;
    endIcon?: string;
    size?: 'sm' | 'md' | 'lg' | 'default';
    color?: 'default' | 'primary' | 'secondary' | 'danger';
    style?: Object;
    text?: string;
    onClick?: ()=> {}
};

const getClassName = ({variant}: ButtonProps): string=>{
    return variant === 'default' ?'variant-default': '';
};

const Button: React.FC<ButtonProps> = 
({text='Button',variant='default',size='default',...props}: ButtonProps)=>{
    return (
        <button className='v-default'>{text}</button>
    );
};

export default Button;