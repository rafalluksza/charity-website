import React from 'react'
import Navigation from "../Navigation/Navigation";
import Header from "./Header";
import Important from "./Important";
import HomeContact from "../HomeContact/HomeContact";
import WizardForm from "./WizardForm";
import {FirebaseContext} from "../Firebase";
import SendResults from "./Wizard/SendResults";


const GiveItBack = () => {

    return (
        <>
            <div>
                <Navigation/>
                <Header/>
                <Important/>
                <div>Tutaj będzie mozna oddac rzeczy</div>
                {/*<FirebaseContext.Consumer>*/}
                {/*    {firebase => <SendResults firebase={firebase}/>}*/}
                {/*</FirebaseContext.Consumer>*/}
                    <FirebaseContext.Consumer>
                    {firebase => <WizardForm onSubmit={SendResults} firebase={firebase}/>}
                </FirebaseContext.Consumer>
                <HomeContact/>
            </div>
        </>
    )
}

export default GiveItBack;