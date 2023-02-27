import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/container';
import RootRoute from './router';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - React App" defaultTitle="React App">
        <meta name="description" content="A React App application" />
      </Helmet>
      <Layout>
        <RootRoute />
      </Layout>
    </BrowserRouter>
  );
}
