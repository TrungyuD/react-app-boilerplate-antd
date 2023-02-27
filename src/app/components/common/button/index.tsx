import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import './style.scss';

interface ButtonCustomProps extends ButtonProps {
  buttonType?: 'primary' | 'secondary' | 'dashed' | 'cancel';
  fullwidth?: boolean;
}
const Buttons: React.FC<ButtonCustomProps> = (props: ButtonCustomProps) => {
  const {
    buttonType = 'primary',
    className,
    fullwidth,
    children,
    ...rest
  } = props;
  return (
    <Button
      className={`btn-custom ${buttonType} ${fullwidth ? 'fullwidth' : ''}  ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default Buttons;
