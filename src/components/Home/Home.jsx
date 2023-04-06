import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tsharts = useLoaderData()
    console.log(tsharts)
    return (
        <div>
            <h1>This is home page </h1>
        </div>
    );
};

export default Home;