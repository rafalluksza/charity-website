import React, {useState, useEffect} from 'react'
import Decoration from "../HomeHeader/Decoration";
import TopMenu from "../HomeHeader/TopMenu";
import {Link, withRouter} from 'react-router-dom'
import * as ROUTES from './../../constants/routes'
import { withFirebase } from '../Firebase';

const SignUpPage = () => {

    return (
        <div>
            <TopMenu/>
            <div className='login'>
                <h2>Załóż konto</h2>
                <Decoration/>
                <SignUpForm/>
            </div>
        </div>

    )
}

export default SignUpPage;

const SignUpFormBase = (props) => {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [secondPasswordValue, setSecondPasswordValue] = useState('');

    const [emailValidation, setEmailValidation] = useState(null);
    const [passwordValidation, setPasswordValidation] = useState(null);
    const [secondPasswordValidation, setSecondPasswordValidation] = useState(null);

    useEffect(()=> {
        console.log (emailValue, passwordValue, secondPasswordValue);
        validateEmail();
        validatePassword();
        validateSecondPassword();
    },[emailValue, passwordValue, secondPasswordValue])

    const validateEmail = () => {
        console.log (emailValue);

        const re = /\S+@\S+\.\S+/;
        console.log(re.test(emailValue))
        return setEmailValidation(re.test(emailValue))
    };

    const validatePassword = () => {
        console.log (passwordValue);

        if (passwordValue.length >= 6)
            return setPasswordValidation(true)
    };

    const validateSecondPassword = () => {
        console.log (secondPasswordValue);

        if (secondPasswordValue.length >= 6 && passwordValue === secondPasswordValue)
            return setSecondPasswordValidation(true)
    };


    const submitForm = (e) => {
        e.preventDefault();
        const username = emailValue;
        const email = emailValue;
        const password = passwordValue;


        console.log (emailValidation, passwordValidation, secondPasswordValidation);

        if (emailValidation === true && passwordValidation=== true && secondPasswordValidation===true){
            console.log('true')
            props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    return props.firebase
                        .user(authUser.user.uid)
                        .set({
                            username,
                            email,
                        });
                })
                .then(authUser => {
                    setEmailValue('');
                    setPasswordValue('');
                    setSecondPasswordValue('');
                    props.history.push(ROUTES.LANDING);
                }).catch(error=> {
                    console.log(error)
            })
        } else {
            console.log('untrue')
        }

    };


    return (
        <form onSubmit={submitForm}>
            <div className='form'>
                <label> Email</label>
                <input type='email' onChange={e => setEmailValue(e.target.value)} value={emailValue}/>
                <div className='invalid'>{emailValidation ? '' : 'Podany email jest nieprawidłowy'}</div>


                <label> Hasło</label>
                <input type='password' placeholder='podaj hasło' onChange={e => setPasswordValue(e.target.value) } value={passwordValue}/>
                <div className='invalid'>{passwordValidation ? '' : 'Podane hasło jest za krótkie'}</div>

                <label> Powtórz hasło</label>
                <input type='password' placeholder='potwierdź hasło' onChange={e => setSecondPasswordValue(e.target.value) } value={secondPasswordValue}/>
                <div className='invalid'>{secondPasswordValidation ? '' : 'Podane hasła muszą byc takie same'}</div>


            </div>
            <div className='form-buttons'>
                <button className='btnReg'><Link to='/logowanie'> Zaloguj się </Link></button>
                <button type='submit' className='btnReg'>Załóż konto</button>
            </div>
        </form>
    )
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export { SignUpForm };
