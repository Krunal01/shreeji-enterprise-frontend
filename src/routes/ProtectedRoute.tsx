import { Navigate, Outlet } from "react-router-dom";

const hasUserData = (): boolean => {
    return true;
};

const ProtectedRoute: React.FC = () => {
    const isAuth = hasUserData();

    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
