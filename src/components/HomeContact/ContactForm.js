import React, {useState,useEffect} from 'react';
import axios from "axios";


const ContactForm = () => {

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const [emailValidation, setEmailValidation] = useState(true)
    const [nameValidation, setNameValidation] = useState(true)
    const [textareaValidation, setTextareaValidation] = useState(true)


    const url = 'http://localhost:5000/email';

    const sendData = () => {
        console.log(nameValue)
        console.log(emailValue)
        console.log(textareaValue)

        axios.post(url,
            {
            name: nameValue,
            email: emailValue,
            textarea: textareaValue
            },
            {
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then( (response) => {
            console.log(response)
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        }).catch( (error) => {
                console.log(error)
            })
    };


    const validateEmail = (emailValue) => {
        const re = /\S+@\S+\.\S+/;
        return setEmailValidation(re.test(emailValue))
    };

    const validateName = (nameValue) => {
        const re = /^[A-Za-z]+$/;
        return setNameValidation(re.test(nameValue))
    }

    const validateTextarea = (textareaValue) => {
       if (textareaValue.length < 120)
           return setTextareaValidation(false)
    }

    const submitForm =(e)=> {
        e.preventDefault();
        validateEmail(emailValue);
        validateName(nameValue);
        validateTextarea(textareaValue);
        sendData();
    }

    return (
        <form onSubmit={submitForm}>
            <div className='form'>
                <div className='form-inputs'>
                    <div className='form-item'>
                        <label> Wpisz swoje imię</label>
                        <input type='text' placeholder='Krzysztof' onChange={e => setNameValue(e.target.value)} value={nameValue}/>
                        <div className='invalid'>{ nameValidation ? '' : 'Podane imię jest nieprawidłowe!'}</div>

                    </div>
                    <div className='form-item'>
                        <label> Wpisz swój email</label>
                        <input type='text' placeholder='abc@xyz.pl' onChange={e => setEmailValue(e.target.value)} value={emailValue}/>
                        <div className='invalid'>{ emailValidation ? '' : 'Podany email jest nieprawidłowy!'}</div>

                    </div>
                </div>
                <div className='form-textarea'>
                    <label> Wpisz swoją wiadomość</label>
                    <textarea onChange={e => setTextareaValue(e.target.value)} value={textareaValue}
                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eget justo in imperdiet. Phasellus et lacinia libero. Donec elementum bibendum mi, et consectetur purus euismod ut. Donec faucibus sit.'/>
                    <div className='invalid'>{ textareaValidation ? '' : 'Wiadomośc musi miec conajmniej 120 znaków!'}</div>
                </div>
            </div>
            <button className='btnReg'>Wyślij</button>
        </form>
    )
}

export default ContactForm;