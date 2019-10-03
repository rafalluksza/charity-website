import React from 'react'
import Decoration from "../HomeHeader/Decoration";
import ContactForm from "./ContactForm";
import {FirebaseContext} from "../Firebase";


const HomeContact = () => {

    return (
        <div id='contact'>
            <div>
                <img className='background-img' src={require(`../../assets/Background-Contact-Form.jpg`)} alt='some clothes' />
                <div className='form-column'>
                    <h2>Skontaktuj się z nami</h2>
                    <Decoration/>
                    <FirebaseContext.Consumer>
                        {firebase => <ContactForm firebase={firebase}/>}
                    </FirebaseContext.Consumer>
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