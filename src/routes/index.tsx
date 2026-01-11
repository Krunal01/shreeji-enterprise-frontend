import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import NotFound from "../components/auth/NotFound";
import ForgotPassword from "../components/auth/ForgotPassword";
import Login from "../components/auth/Login";
import MyAccount from "../pages/my-profile/MyAccount";
import ProtectedRoute from "./ProtectedRoute";
import GlobalErrorBoundary from "../components/error/GlobalErrorBoundary";
import DashboardPage from "@/pages/dashboard/page";

export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <GlobalErrorBoundary />,
        children: [
            {
                path: 'login', element: <Login />,
            },
            {
                path: 'register', element: <div>Register Here</div>,
            },
            {
                path: 'forgot-password', element: <ForgotPassword />,
            }
        ]
    },
    {
        element: <ProtectedRoute />,
        errorElement: <GlobalErrorBoundary />,
        children: [
            {
                path: "/",
                element: <AuthLayout />,
                children: [
                    {
                        index: true, element: <Navigate to="/dashboard" replace />
                    },
                    {
                        path: 'dashboard', element: <DashboardPage />,
                    },
                    {
                        path: 'profile/my-account', element: <MyAccount />,
                    }
                ]
            },
        ]
    },
    {
        path: "*", element: <NotFound />, errorElement: <GlobalErrorBoundary />
    }
])