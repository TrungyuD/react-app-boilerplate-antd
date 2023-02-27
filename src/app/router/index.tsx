import Dashboard from 'app/pages/dashboard';
import HomePage from 'app/pages/homepage';
import { Route, Routes, Navigate } from 'react-router-dom';
const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* redirect to '/' */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RootRoute;
