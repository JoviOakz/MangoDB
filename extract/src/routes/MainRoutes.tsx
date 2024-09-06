import { createBrowserRouter, Outlet } from "react-router-dom";
import TesteNavBar from "../components/TesteNavBar";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <TesteNavBar/>
    },
])