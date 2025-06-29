import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  
  const currentUser = useSelector((state)=>state.auth.currentUser)

  return true ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
