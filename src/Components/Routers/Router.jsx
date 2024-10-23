import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import AllBus from "../Pages/AllBus/AllBus";
import BusCard from "../Pages/AllBus/BusCard";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";



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
            },
            {
                path:"buscard",
                element:<BusCard></BusCard>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"login",
                element:<Login></Login>
            }
        ]
    }
])