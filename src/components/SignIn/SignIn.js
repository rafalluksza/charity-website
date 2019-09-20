import React, {useState, useEffect} from 'react'
import Decoration from "../HomeHeader/Decoration";
import TopMenu from "../HomeHeader/TopMenu";
import {Link, withRouter} from 'react-router-dom';
import {withFirebase} from "../Firebase";
import * as ROUTES from '../../constants/routes';
import {compose} from 'recompose';

const SignInPage = () => {


    return (
        <div>
            <TopMenu/>
            <div className='login'>
                <h2>Zaloguj się</h2>
                <Decoration/>
                <SignInForm/>
            </div>
        </div>

    )
}

export default SignInPage;

const SignInFormBase = (props) => {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [emailValidation, setEmailValidation] = useState(true)
    const [passwordValidation, setPasswordValidation] = useState(true)



    useEffect(()=> {
        validateEmail();
        validatePassword();
    });

    const submitForm = (e) => {
        props.firebase
            .doSingInWithEmailAndPassword(emailValue,passwordValue)
            .then(()=> {
                setEmailValue('');
                setPasswordValue('');
                props.history.push(ROUTES.LANDING);
            })
            .catch(error => console.log(error));

        e.preventDefault()
    };

    const validateEmail = () => {
        const re = /\S+@\S+\.\S+/;
        return setEmailValidation(re.test(emailValue))
    };

    const validatePassword = () => {
        if (passwordValue.length < 6)
            return setPasswordValidation(false)
    };


    return (
        <form onSubmit={submitForm}>
            <div className='form-login'>
                <label> Email</label>
                <input type='email' onChange={e => setEmailValue(e.target.value)} value={emailValue}/>
                <div className='invalid'>{emailValidation ? '' : 'Podany email jest nieprawidłowy'}</div>

                <label> Hasło</label>
                <input type='password' onChange={e => setPasswordValue(e.target.value) } value={passwordValue}/>
                <div className='invalid'>{passwordValidation ? '' : 'Podane hasło jest za krótkie'}</div>

            </div>
            <div className='form-buttons'>
                <button className='btnReg'><Link to='/rejestracja'>Załóż konto</Link></button>
                <button className='btnReg' type='submit'>Zaloguj się</button>
            </div>
        </form>

    )
}

const SignInForm = compose(
    withRouter,
    withFirebase,)
    (SignInFormBase);

export {SignInForm}