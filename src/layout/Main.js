import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Router/Pages/Home/Navbar/Navbar';
import Footer from '../Router/Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;