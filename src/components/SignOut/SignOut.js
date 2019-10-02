import React from 'react'
import Decoration from "../Elements/Decoration";
import Navigation from "../Navigation/Navigation";
import ButtonHP from "../Buttons/ButtonHP";

const SignOut = () => {


    return (
        <div>
            <Navigation/>
            <div className='login'>
                <h2 style={{textAlign: 'center'}}>Wylogowanie nastąpiło pomyślnie!</h2>
                <Decoration/>
                <ButtonHP/>
            </div>
        </div>

    )
}

export default SignOut;