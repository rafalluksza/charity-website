import React from 'react'
import LogRegItem from "./LogRegItem";

const SignBar = () => {


    return (
        <>
            <LogRegItem href={'/logowanie/'} name={'Zaloguj'}/>
            <LogRegItem href={'/rejestracja'} name={'Załóż konto'}/>
        </>
    )
}

export default SignBar;