import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router';
import Nav_bar_design from './Nav_bar_design';

const Navbar = () => {
    return (
        <>
        <Nav_bar_design />
        <Outlet />
        </>
    );
};

export default Navbar;