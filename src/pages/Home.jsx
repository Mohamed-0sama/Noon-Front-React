import React from 'react'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import TestRouting from './../components/TestRouting';
import FooterThree from '../components/Footer/Footer components/FooterThree';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Header />
            <TestRouting />
            <Outlet />
            <FooterThree />
        </div>
    )
}

export default Home
