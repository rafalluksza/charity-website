import React, {useState} from 'react'
import Decoration from "../Elements/Decoration";
import {withRouter} from 'react-router-dom'
import * as ROUTES from './../../constants/routes'
import {FirebaseContext, withFirebase} from '../Firebase';
import {compose} from "redux";
import {connect} from "react-redux";
import {signupAction} from "../Redux/actions/actions";
import NavigationOther from "../Navigation/NavigationOther";
import useForm from "react-hook-form";

const SignUpPage = () => {

    return (
        <div>
            <NavigationOther/>
            <div className='login'>
                <h2>Załóż konto</h2>
                <Decoration/>
                <FirebaseContext.Consumer>
                    {firebase => <SignUpForm firebase={firebase}/>}
                </FirebaseContext.Consumer>
            </div>
        </div>

    )
}

export default SignUpPage;

const SignUpFormBase = (props) => {
    const {register, handleSubmit, errors, watch } = useForm();


    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [secondPasswordValue, setSecondPasswordValue] = useState('');

    const [regStatus, setRegStatus] = useState(null);


    const goToLanding = () => {
        setTimeout(()=>{
            props.history.push(ROUTES.LANDING);
        },3000)
    }

    const registration = () => {
        props.signupAction(emailValue,passwordValue)
        goToLanding()
    }

    const submitForm = () => {
        setRegStatus(true);
        registration()
    };

    const clickToSingIn = () => {
        props.history.push(ROUTES.SIGN_IN)
    }


    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='form'>
                <div>
                    { regStatus === null && <div/>}
                    { regStatus === true && <div style={{color:'green'}}>Gratulacje! Rejestracja udana!</div>}
                </div>
                <label> Email</label>
                <input type='email' placeholder='Podaj email' name="email" ref={register({required: true, pattern: /\S+@\S+\.\S+/})} onChange={e => setEmailValue(e.target.value)} value={emailValue}/>
                { errors.email &&  <div className='invalid'>Podany email jest nieprawidłowy!</div>}

                <label> Hasło</label>
                <input type='password' name="password"
                       ref={register({required: true, minLength: 6})}
                       placeholder='Podaj hasło'
                       onChange={e => setPasswordValue(e.target.value) } value={passwordValue}/>

                { errors.password &&  <div className='invalid'>Podane hasło jest za krótkie!</div>}

                <label> Powtórz hasło</label>
                <input type='password' name="secondPassword"
                       ref={register({required: true, validate: (value) => {return value === watch("password");}})}
                       placeholder='Potwierdź hasło'
                       onChange={e => setSecondPasswordValue(e.target.value) }
                       value={secondPasswordValue}
                />
                {errors.secondPassword && <div className='invalid'>Podane hasła muszą byc takie same!</div>}


            </div>
            <div className='form-buttons'>
                <button onClick={clickToSingIn} className='btnReg'> Zaloguj się </button>
                <button type='submit' className='btnReg'>Załóż konto</button>
            </div>
        </form>
    )
}

const mapDispatch = dispatch => {
    return {
        signupAction: (email,password) => dispatch(signupAction(email,password))
    }
}

const SignUpForm = compose(
    withFirebase,
    withRouter,
    connect(null,mapDispatch)
)(SignUpFormBase);

export { SignUpForm };
