import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

function ProtectedRoute({children}) {

    const {isAuthenticated} = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />
}

export default ProtectedRoute;
