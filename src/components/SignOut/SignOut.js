import React from 'react'
import Decoration from "../HomeHeader/Decoration";
import TopMenu from "../HomeHeader/TopMenu";
import ButtonHP from "../Buttons/ButtonHP";

const SignOut = () => {


    return (
        <div>
            <TopMenu/>
            <div className='login'>
                <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                <Decoration/>
                <ButtonHP/>
            </div>
        </div>

    )
}

export default SignOut;