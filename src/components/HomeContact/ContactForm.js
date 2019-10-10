import React, {useState} from 'react';
import useForm from "react-hook-form";

const ContactForm = (props) => {

    const {register, handleSubmit, errors} = useForm();

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

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


    const submitForm =()=> {
        sendData();
    }

    return (
        <>
        {isFormSend && <div className='alert alert-success mt-2'> Formularz wysłano </div> }
            <form onSubmit={handleSubmit(submitForm)}>
                <div className='form'>
                    <div className='form-inputs'>
                        <div className='form-item'>
                            <label> Wpisz swoje imię</label>
                            <input type='text' placeholder='Imię'
                                   onChange={e => setNameValue(e.target.value)} value={nameValue}
                                   name="name"
                                   ref={register({required: true, pattern: /^[A-Za-z]+$/ })}
                            />
                           { errors.name &&  <div className='invalid'>Podane imię jest nieprawidłowe!</div>}

                        </div>
                        <div className='form-item'>
                            <label> Wpisz swój email</label>
                            <input type='text' placeholder='abc@xyz.pl'
                                   onChange={e => setEmailValue(e.target.value)} value={emailValue}
                                   name="email"
                                   ref={register({required: true, pattern: /\S+@\S+\.\S+/ })}
                            />
                            { errors.email && <div className='invalid'>Podany email jest nieprawidłowy!</div>}

                        </div>
                    </div>
                    <div className='form-textarea'>
                        <label> Wpisz swoją wiadomość</label>
                        <textarea onChange={e => setTextareaValue(e.target.value)} value={textareaValue}
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eget justo in imperdiet. Phasellus et lacinia libero. Donec elementum bibendum mi, et consectetur purus euismod ut. Donec faucibus sit.'
                                  name="text"
                                  ref={register({required: true, minLength: 60 })}
                        />
                        { errors.text && <div className='invalid'>Wiadomośc musi miec conajmniej 60 znaków!</div>}
                    </div>
                </div>
                <button className='btnReg'>Wyślij</button>
            </form>
        </>
    )
}

export default ContactForm;