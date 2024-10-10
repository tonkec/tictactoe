import { Navigate } from "react-router-dom";


interface IAuthGuardProps {
    children: React.ReactNode;
}

export const AuthGuard = ({ children }: IAuthGuardProps) => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
}