import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function PrivateRoute({ children }: { children: JSX.Element }) {

  const { currentUser } = useAuth();

  return (
    currentUser ? children : <Navigate to="/" replace />
  );
}

export default PrivateRoute;
