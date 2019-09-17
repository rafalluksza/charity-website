import React from 'react'
import Decoration from "../HomeHeader/Decoration";


const HomeContact = () => {

    return (
        <div id='contact'>
            <div>
                <div className='form-column'>
                    <h2>Skontaktuj się z nami</h2>
                    <Decoration/>
                    <form className='form'>
                        <label> Wpisz swoje imię
                        <input type='text' placeholder='Krzysztof'/>
                        </label>
                        <label> Wpisz swój email
                            <input type='email' placeholder='abc@xyz.pl'/>
                        </label>
                        <label> Wpisz swoją wiadomość
                            <textarea placeholder='Lorem ipsum' />
                        </label>
                        <button>Wyślij</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default HomeContact;