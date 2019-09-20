import React from 'react';
import Navigation from "../Navigation/Navigation";
import SignBar from "../Navigation/SignBar";


const TopMenu = () => {


    return (
        <div className='topMenu'>
            <ul className='signBar'>
                <SignBar/>
            </ul>
            <ul className='navigation'>
                <Navigation/>
            </ul>
        </div>
    )
}

export default TopMenu;