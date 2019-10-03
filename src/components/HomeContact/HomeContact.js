import React from 'react'
import Decoration from "../Elements/Decoration";
import ContactForm from "./ContactForm";
import {FirebaseContext} from "../Firebase";


const HomeContact = () => {

    return (
        <div id='contact'>
            <img className='background-img' src={require(`../../assets/Background-Contact-Form.jpg`)} alt='some clothes' />
            <div>
                <div className='form-column'>
                    <h2>Skontaktuj się z nami</h2>
                    <Decoration/>
                    <FirebaseContext.Consumer>
                        {firebase => <ContactForm firebase={firebase}/>}
                    </FirebaseContext.Consumer>
                </div>
                <footer className='footer'>
                    <p>Copyright by Coders Lab</p>
                    <img src={require(`../../assets/Facebook.svg`)} alt='facebook icon' />
                    <img src={require(`../../assets/Instagram.svg`)} alt='instagram icon' />
                </footer>
            </div>
        </div>
    )
}


export default HomeContact;