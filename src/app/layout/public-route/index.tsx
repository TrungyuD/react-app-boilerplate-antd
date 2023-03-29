import { LOCAL_STORAGE_KEY } from 'constants/app';
import { Navigate } from 'react-router-dom';
import StorageUtils from 'utils/storage';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated: any = StorageUtils.getItem(
    LOCAL_STORAGE_KEY.ACCESS_TOKEN,
  );
  return !isAuthenticated ? <Component /> : <Navigate to="/" replace />;
  // return <Component />;
};

export default PublicRoute;
