import React from 'react'
import Decoration from "../HomeHeader/Decoration";
import TopMenu from "../HomeHeader/TopMenu";

const Registration = () => {


    return (
        <div>
            <TopMenu/>
            <div className='login'>
                <h2>Załóż konto</h2>
                <Decoration/>
                <form>
                    <div className='form'>
                    <label> Email</label>
                    <input type='email'/>

                    <label> Hasło</label>
                    <input type='password'/>

                    <label> Powtórz hasło</label>
                    <input type='password'/>
                    </div>
                    <div className='form-buttons'>
                        <button className='btnReg'>Zaloguj się</button>
                        <button className='btnReg'>Załóż konto</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Registration;