import React from 'react'
import NavigationItem from "./NavigationItem";


const SignBar = () => {


    return (
        <>
            <NavigationItem href={'/logowanie/'} name={'Zaloguj'}/>
            <NavigationItem href={'/rejestracja'} name={'Załóż konto'}/>
        </>
    )
}

export default SignBar;