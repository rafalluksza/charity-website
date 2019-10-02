import React from 'react';
import Intro from "./Intro";
import Navigation from "../Navigation/Navigation";


const HomeHeader = () => {


    return (
        <>
            <Navigation/>
            <div id='header'>
                <div className='header-img' />
                <Intro/>
            </div>
        </>
    )
}

export default HomeHeader;