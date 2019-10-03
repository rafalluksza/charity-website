import React from 'react'
import Navigation from "../Navigation/Navigation";
import Header from "./Header";
import HomeContact from "../HomeContact/HomeContact";
import WizardForm from "./WizardForm";
import {FirebaseContext} from "../Firebase";


const GiveItBack = () => {

    return (
        <>
            <div>
                <Navigation/>
                <Header/>
                <FirebaseContext.Consumer>
                    {firebase => <WizardForm firebase={firebase}/>}
                </FirebaseContext.Consumer>
                <HomeContact/>
            </div>
        </>
    )
}

export default GiveItBack;