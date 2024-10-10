import {
    createBrowserRouter,
  } from "react-router-dom";
import { Root } from "./root";
import { AuthGuard } from "./guards/AuthGuard";
import { Login } from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthGuard>
            <Root />
        </AuthGuard>,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

