import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {withFirebase} from "../../Firebase/context";
import {connect} from "react-redux";
import Decoration from "../../Elements/Decoration";

const WizardSixthStep = () => {
    return (
        <div className='form-container'>
            <div className='flex-column-cs thankNote'>
            <h3> Dziękujemy za przesłanie formularza. <br/> Na maila prześlemy wszelkie <br/>informacje o odbiorze</h3>
            <Decoration/>
            </div>
        </div>
    )
}

const mapState = ({form}) => ({
        values: form.wizard.values
})

export default compose(
    withFirebase,
    reduxForm({
        form: 'wizard',
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
    }),
    connect(mapState))(WizardSixthStep)

// reduxForm({
//     form: 'wizard',
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true,
// })(WizardFifthStep);

