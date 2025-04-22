import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/pricing",
                element: <Pricing />,
            }
        ]
    }
]);

export default router;