import React from 'react';
import NavMenuLanding from "./NavMenuLanding";
import LoginMenu from "./LoginMenu";



const Navigation = () => {

    return (
        <div className='topMenu'>
                <LoginMenu/>
                <NavMenuLanding/>
        </div>
    )
}


export default Navigation;