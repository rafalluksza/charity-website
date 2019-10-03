import React, {useState} from 'react'
import { connect } from 'react-redux';
import Decoration from "../Elements/Decoration";
import { withRouter} from 'react-router-dom';
import {loginAction} from '../Redux/actions/actions'
import {withFirebase} from "../Firebase";
import * as ROUTES from '../../constants/routes';
import {compose} from 'recompose';
import NavigationOther from "../Navigation/NavigationOther";
// import {connect} from 'react-redux';


const SignInPage = () => {
    return (
        <div>
            <NavigationOther/>
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


    const re = /\S+@\S+\.\S+/;
    const submitForm = (e) => {
        // if (re.test(emailValue) === false)
        //     return setEmailValidation(false)
        // if (passwordValue.length < 6)
        //     return setPasswordValidation(false)
        e.preventDefault()
        props.loginAction(emailValue,passwordValue)
        setEmailValue('');
        setPasswordValue('');
        props.history.push(ROUTES.LANDING);
        // if (emailValidation === true && passwordValidation === true) {
            // console.log('logowanie')
            // props.loginAction(emailValue, passwordValue)

            // props.firebase
            //     .doSingInWithEmailAndPassword(emailValue, passwordValue)
            //     .then(() => {

                // })
                // .catch(error => console.log(error));
        // }

    };

    // const validateEmail = () => {
    //     const re = /\S+@\S+\.\S+/;
    //     return setEmailValidation(re.test(emailValue))
    // };
    //
    // const validatePassword = () => {
    //     if (passwordValue.length < 6)
    //         return setPasswordValidation(false)
    // };

    const clickToSignUp = () => {
        props.history.push(ROUTES.SIGN_UP)
    }

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
                <button onClick={clickToSignUp} className='btnReg'>Załóż konto</button>
                <button className='btnReg' type='submit'>Zaloguj się</button>
            </div>
        </form>

    )
}

const mapDispatch = dispatch => ({
        loginAction: (login, password) =>  dispatch(loginAction(login, password))
    }
)

const SignInForm = compose(
    withRouter,
    withFirebase,
    connect(null, mapDispatch)
)(SignInFormBase);
export {SignInForm}