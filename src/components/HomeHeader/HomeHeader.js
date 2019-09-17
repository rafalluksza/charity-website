import React from 'react';
import Intro from "./Intro";
import TopMenu from "./TopMenu";


const HomeHeader = () => {


    return (
        <div className='header'>
            <div className='header-img' />
            <TopMenu/>
            <Intro/>
        </div>
    )
}

export default HomeHeader;