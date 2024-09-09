import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
])