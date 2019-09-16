import React from 'react';
import Intro from "./Intro";
import Nav from "./Nav";


const HomeHeader = () => {


    return (
        <div className='header'>
            <div className='header-img'>
                <Nav/>
                <Intro/>
            </div>
        </div>
    )
}

export default HomeHeader;