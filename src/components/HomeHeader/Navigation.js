import React from 'react'
import NavigationItem from "./NavigationItem";



const Navigation = () => {
    return (
        <>
            <NavigationItem href={'/'} name={'Start'}/>
            <NavigationItem href={'#simpleSteps'} name={'O co chodzi?'}/>
            <NavigationItem href={'#about'} name={'O nas'}/>
            <NavigationItem href={'#who'} name={'Fundacja i organizacje'}/>
            <NavigationItem href={'#contact'} name={'Kontakt'}/>
        </>
    )
}

export default Navigation;