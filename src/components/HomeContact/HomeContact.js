import React from 'react'
import Decoration from "../HomeHeader/Decoration";


const HomeContact = () => {

    return (
        <div id='contact'>
            <div>
                <img className='background-img' src={require(`../../assets/Background-Contact-Form.jpg`)} alt='some clothes' />
                <div className='form-column'>
                    <h2>Skontaktuj się z nami</h2>
                    <Decoration/>
                    <form >
                        <div className='form'>
                            <div className='form-inputs'>
                                <div className='form-item'>
                                    <label> Wpisz swoje imię</label>
                                    <input type='text' placeholder='Krzysztof'/>
                                </div>
                                <div className='form-item'>
                                    <label> Wpisz swój email</label>
                                    <input type='email' placeholder='abc@xyz.pl'/>
                                </div>
                            </div>
                            <div className='form-textarea'>
                                <label> Wpisz swoją wiadomość</label>
                                <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eget justo in imperdiet. Phasellus et lacinia libero. Donec elementum bibendum mi, et consectetur purus euismod ut. Donec faucibus sit.'/>
                            </div>
                        </div>
                        <button className='btnReg'>Wyślij</button>
                    </form>
                </div>
                <div className='footer'>
                    <p>Copyright by Coders Lab</p>
                    <img src={require(`../../assets/Facebook.svg`)} alt='facebook icon' />
                    <img src={require(`../../assets/Instagram.svg`)} alt='instagram icon' />
                </div>
            </div>


        </div>
    )
}

export default HomeContact;