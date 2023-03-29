import { ROUTE_PATH } from 'constants/app';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './layout/private-route';
import PublicRoute from './layout/public-route';
import HomePage from './pages/homepage';
import Login from './pages/login';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - React App" defaultTitle="React App">
        <meta name="description" content="A React App application" />
      </Helmet>
      <Routes>
        <Route
          path={ROUTE_PATH.LOGIN}
          element={<PublicRoute component={Login} />}
        />
        <Route
          path={ROUTE_PATH.HOMEPAGE}
          element={<PrivateRoute component={HomePage} />}
        />
        <Route
          path="/*"
          element={<PrivateRoute component={<Navigate to="/" replace />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
