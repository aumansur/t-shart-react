import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Mai = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Mai;