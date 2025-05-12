import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  return <Navigate to="/dashboard/posts" replace />;
};

export default Dashboard;