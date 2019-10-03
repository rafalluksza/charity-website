import React, {useState} from 'react';

const ContactForm = (props) => {

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const [emailValidation, setEmailValidation] = useState(true)
    const [nameValidation, setNameValidation] = useState(true)
    const [textareaValidation, setTextareaValidation] = useState(true)

    const [isFormSend, setIsFormSend ] = useState(false)


    const sendData = () => {

        props.firebase.messages().push({
            name: nameValue,
            email: emailValue,
            message: textareaValue
        }).then(()=>{
            setNameValue('')
            setEmailValue('')
            setTextareaValue('')
            setIsFormSend(true)
            setTimeout(()=> {
                setIsFormSend(false)
            },3000)
        });

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
       if (textareaValue.length < 20)
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
        <>
        {isFormSend && <div className='alert alert-success mt-2'> Formularz wysłano </div> }
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
        </>
    )
}

export default ContactForm;