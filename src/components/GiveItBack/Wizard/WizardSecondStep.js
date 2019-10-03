import React from 'react'
import {Field, reduxForm} from "redux-form";


const WizardSecondStep = ({handleSubmit, prevPage}) => {
    console.log(handleSubmit, prevPage)

    return (
        <div className='firstStep'>
            <h3> Podaj liczbe 60l worków, w które spakowałęś/aś rzeczy: </h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <Field
                        name='bags'
                        component='select'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Field>
                    <button type='button' onClick={prevPage}>
                        Powrót
                    </button>
                    <button type='submit'>
                        Dalej
                    </button>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(WizardSecondStep)

// const mapState = state => ({
//     form: state
// })
//
// // const mapDispatch = dispatch => ({
// //     next: (data) => dispatch(updateForm(data))
// //
// // })

// export default connect(mapState, mapDispatch)(SecondStep);
