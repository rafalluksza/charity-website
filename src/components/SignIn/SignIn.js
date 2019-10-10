import React, {useState} from 'react'
import { connect } from 'react-redux';
import useForm from "react-hook-form";
import Decoration from "../Elements/Decoration";
import { withRouter} from 'react-router-dom';
import {loginAction} from '../Redux/actions/actions'
import {withFirebase} from "../Firebase";
import * as ROUTES from '../../constants/routes';
import {compose} from 'recompose';
import NavigationOther from "../Navigation/NavigationOther";


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

    const {register, handleSubmit, errors} = useForm();

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');


    const submitForm = () => {
        props.loginAction(emailValue,passwordValue)
        setEmailValue('');
        setPasswordValue('');
        props.history.push(ROUTES.LANDING);
    };


    const clickToSignUp = () => {
        props.history.push(ROUTES.SIGN_UP)
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='form-login'>
                <label> Email</label>
                <input type='email'placeholder='Podaj email' name="email" ref={register({required: true, pattern: /\S+@\S+\.\S+/ })} onChange={e => setEmailValue(e.target.value) } value={emailValue}/>
                {errors.email && <div className='invalid'>Podany email jest nieprawidłowy</div>}

                <label> Hasło</label>
                <input type='password' placeholder='Podaj hasło' name="password" ref={register({required: true, minLength: 6})} onChange={e => setPasswordValue(e.target.value) } value={passwordValue}/>
                {errors.password && <div className='invalid'> Podane hasło jest za krótkie</div>}

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