import React from 'react'
import {Field, reduxForm} from "redux-form";


const WizardFourthStep = ({handleSubmit, prevPage}) => {


    return (
        <div className='firstStep'>
            <h3> Podaj ardres oraz termin odbioru rzeczy przez kuriera: </h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div> Adres odbioru:
                        <label> Ulica
                            <Field
                                component='input'
                                name='street'
                                type='text'
                            />
                        </label>
                        <label> Miasto
                            <Field
                                component='input'
                                name='city'
                                type='text'
                            />
                        </label>
                        <label> Kod pocztowy
                            <Field
                                component='input'
                                name='cityCode'
                                type='text'
                            />
                        </label>
                        <label> Numer telefonu
                            <Field
                                component='input'
                                name='phone'
                                type='text'
                            />
                        </label>
                    </div>
                    <div> Termin odbioru:
                        <label> Data
                            <Field
                                component='input'
                                name='date'
                                type='text'
                            />
                        </label>
                        <label> Godzina
                            <Field
                                component='input'
                                name='time'
                                type='text'
                            />
                        </label>
                        <label> Uwagi dla kuriera
                            <Field
                                component='input'
                                name='notes'
                                type='textarea'
                            />
                        </label>

                    </div>

                    <button type='button' onClick={prevPage}>
                        Powrót
                    </button>

                    <button type='submit'>
                        Wyślij
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
})(WizardFourthStep)