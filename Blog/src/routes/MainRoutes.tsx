import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import AddPostPage from '../pages/AddPost';
import RegisterPage from '../pages/Register';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/add",
        element: <AddPostPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);