import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyPage from "../pages/MyPage";
import { useUserStore } from "../stores/userStore";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = useUserStore((state) => state.accessToken);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = useUserStore((state) => state.accessToken);

  if (accessToken) {
    return <Navigate to="/" />;
  }
  return children;
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/MyPage",
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        ),
      },
    ],
  },
]);

export default Router;
