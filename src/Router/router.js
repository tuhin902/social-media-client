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
                element: <Home></Home>
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
                element: <About></About>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            { path: "/edit/:id", element: <Edit></Edit> },
            {
                path: "/section",
                element: <SecondSection></SecondSection>
            },
            {
                path: "/media",
                element: <Privateroute><Media></Media></Privateroute>,
                loader: async () => fetch("http://localhost:4000/posts")
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