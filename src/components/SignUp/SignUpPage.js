import React, {useState} from 'react'
import Decoration from "../Elements/Decoration";
import {withRouter} from 'react-router-dom'
import * as ROUTES from './../../constants/routes'
import {FirebaseContext, withFirebase} from '../Firebase';
import {compose} from "redux";
import {connect} from "react-redux";
import {signupAction} from "../Redux/actions/actions";
import NavigationOther from "../Navigation/NavigationOther";

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

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [secondPasswordValue, setSecondPasswordValue] = useState('');

    const [emailValidation, setEmailValidation] = useState(null);
    const [passwordValidation, setPasswordValidation] = useState(null);
    const [secondPasswordValidation, setSecondPasswordValidation] = useState(null);

    const [regStatus, setRegStatus] = useState(null);

    // useEffect(()=> {
    //     validateEmail();
    //     validatePassword();
    //     validateSecondPassword();
    // },[emailValue, passwordValue, secondPasswordValue])

    const validateEmail = () => {

        const re = /\S+@\S+\.\S+/;
        return setEmailValidation(re.test(emailValue))
    };

    const validatePassword = () => {

        if (passwordValue.length >= 6)
            return setPasswordValidation(true)
        else
            return setPasswordValidation(false)
    };

    const validateSecondPassword = () => {

        if (secondPasswordValue.length >= 6 && passwordValue === secondPasswordValue)
            return setSecondPasswordValidation(true)
        else
            return setSecondPasswordValidation(false)
    };

    const goToLanding = () => {
        setTimeout(()=>{
            props.history.push(ROUTES.LANDING);
        },3000)
    }

    const registration = () => {
        props.signupAction(emailValue,passwordValue)
        goToLanding()
        // if (emailValidation === true && passwordValidation=== true && secondPasswordValidation===true){
        //     props.firebase
        //         .doCreateUserWithEmailAndPassword(emailValue, passwordValue)
        //         .then(authUser => {
        //             return props.firebase
        //                 .user(authUser.user.uid)
        //                 .set({
        //                     username: emailValue,
        //                     email: emailValue,
        //                 });
        //         })
        //         .then(() => {
        //             setEmailValue('');
        //             setPasswordValue('');
        //             setSecondPasswordValue('');
        //             setRegStatus(true);
        //             goToLanding();
        //         }).catch(error=> {
        //         console.log(error)
        //     })
        // } else {
        //     console.log('untrue')
        //     setRegStatus(false);
        // }
    }

    const submitForm = (e) => {
        // validateEmail()
        // validatePassword()
        // validateSecondPassword()
        e.preventDefault();
        registration()
    };

    const clickToSingIn = () => {
        props.history.push(ROUTES.SIGN_IN)
    }


    return (
        <form onSubmit={submitForm}>
            <div className='form'>
                <div>
                    { regStatus === null && <div/>}
                    { regStatus === true && <div style={{color:'green'}}>Gratulacje! Rejestracja udana!</div>}
                    { regStatus === false &&  <div style={{color:'red'}}>Rejestracja nieudana!</div>}
                </div>
                <label> Email</label>
                <input type='email' onChange={e => setEmailValue(e.target.value)} value={emailValue}/>
                { emailValidation === null && <div/>}
                { emailValidation === true && <div/>}
                { emailValidation === false &&  <div className='invalid'>Podany email jest nieprawidłowy</div>}

                <label> Hasło</label>
                <input type='password' placeholder='podaj hasło' onChange={e => setPasswordValue(e.target.value) } value={passwordValue}/>
                { passwordValidation === null && <div/>}
                { passwordValidation === true && <div/>}
                { passwordValidation === false &&  <div className='invalid'>Podane hasło jest za krótkie</div>}

                <label> Powtórz hasło</label>
                <input type='password' placeholder='potwierdź hasło' onChange={e => setSecondPasswordValue(e.target.value) } value={secondPasswordValue}/>
                <div className='invalid'>{secondPasswordValidation===null ? '' : 'Podane hasła muszą byc takie same'}</div>


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
