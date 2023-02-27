import React from 'react';
import { Input, InputProps } from 'antd';
import './styles.scss';
import IconSearch from 'assets/icons/toast-success.svg';

export interface IInputSearch extends InputProps {}

const IconSearchCustom = () => {
  return (
    <>
      <img alt="icon search" className="icon-search" src={IconSearch} />
    </>
  );
};

export const InputSearch: React.FC<IInputSearch> = (props: IInputSearch) => {
  const { className, placeholder } = props;

  return (
    <Input
      prefix={<IconSearchCustom />}
      className={`input-custom ${className ?? ''}`}
      placeholder={placeholder}
      {...props}
    />
  );
};
