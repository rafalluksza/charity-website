import React from 'react';
import LoginMenu from "./LoginMenu";
import NavMenuOther from "./NavMenuOther";



const NavigationOther = () => {

    return (
        <div className='topMenu'>
                <LoginMenu/>
                <NavMenuOther/>
        </div>
    )
}


export default NavigationOther;