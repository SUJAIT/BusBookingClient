import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import AllBus from "../Pages/AllBus/AllBus";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"allbus",
                element:<AllBus></AllBus>
            }
        ]
    }
])