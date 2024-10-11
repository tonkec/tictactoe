import { Navigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Layout } from "../../ui/layout";

interface IAuthGuardProps {
    children: React.ReactNode;
}

export const AuthGuard = ({ children }: IAuthGuardProps) => {
    const [isLoggedIn] = useLocalStorage("token");

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <Layout>
        {children}
    </Layout>
}