import React from 'react'
import {Field, reduxForm} from "redux-form";

const WizardFirstStep = ({handleSubmit}) => {


    return (
        <div>
            <h3> Zaznacz co chcesz oddać: </h3>
            <div className='firstStepForm'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="clothesGood">
                            <Field
                                component='input'
                                type='radio'
                                name='what'
                                value='clothesGood'
                            />
                            {''} Ubrania,które nadają się do ponownego użycia
                        </label>
                    </div>
                    <div>
                        <label htmlFor="clothesTrash">
                            <Field
                                component='input'
                                type='radio'
                                name='what'
                                value='clothesTrash'
                            />
                            {''} Ubrania do wyrzucenia
                        </label>
                    </div>
                    <div>
                        <label htmlFor="zabawki">
                            <Field
                                component='input'
                                type='radio'
                                name='what'
                                value='zabawki'
                            />
                            {''} Zabawki
                        </label>
                    </div>
                    <div>
                        <label htmlFor="ksiazki">
                            <Field
                                component='input'
                                type='radio'
                                name='what'
                                value='ksiazki'
                            />
                            {''} książki
                        </label>
                    </div>
                    <div>
                        <label htmlFor='inne'>
                            <Field
                                component='input'
                                type='radio'
                                name='what'
                                value='inne'
                            />
                            {''} inne
                        </label>
                    </div>
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
    forceUnregisterOnUnmount: true,
})(WizardFirstStep);