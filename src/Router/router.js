import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Privateroute from "../Privateroute/Privateroute";
import About from "./Pages/About/About";
import Details from "./Pages/Details/Details";
import Edit from "./Pages/Edit/Edit";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Media from "./Pages/Media/Media";
import Message from "./Pages/Message/Message";
import SecondSection from "./Pages/SecondSection/SecondSection";
import Signup from "./Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Privateroute><Home></Home></Privateroute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <Privateroute><About></About></Privateroute>
            },
            {
                path: '/message',
                element: <Privateroute><Message></Message></Privateroute>
            },
            { path: "/edit/:id", element: <Edit></Edit> },
            {
                path: "/section",
                element: <Privateroute><SecondSection></SecondSection></Privateroute>
            },
            {
                path: "/media",
                element: <Privateroute><Media></Media></Privateroute>,
                loader: async () => fetch("https://social-media-server-three-liart.vercel.app/posts")
            },
            {
                path: "/detail/:id",
                element: (
                    <Privateroute>
                        <Details></Details>
                    </Privateroute>
                ),
            },
        ]
    }

]);

export default router;