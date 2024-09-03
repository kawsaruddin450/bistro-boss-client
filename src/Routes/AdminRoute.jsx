import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const {isAdmin, isAdminLoading} = useAdmin();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;