import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>
    },
])