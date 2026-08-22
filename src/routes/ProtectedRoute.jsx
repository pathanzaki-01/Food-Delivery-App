import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function ProtectedRoute({childern}){
  const {user} = useAuth();

  if(!user){

    return <Navigate to="/login" replace/>;

  }
  return childern
}
export default ProtectedRoute