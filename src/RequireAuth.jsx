import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/Auth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();
  if (!user)
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  return children;
};
export default RequireAuth;
