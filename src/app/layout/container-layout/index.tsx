import { Layout } from 'antd';
import React from 'react';
import Footer from '../footer';
import Header from '../header';
import './style.scss';

interface ContainerLayoutProps {
  children: React.ReactElement;
}
const { Content } = Layout;
const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children }) => {
  return (
    <Layout className="main">
      <Header />
      <Layout>
        <Content className="main-content">{children}</Content>
        {/* <Siderbar /> */}
      </Layout>
      <Footer />
    </Layout>
  );
};

export default ContainerLayout;
