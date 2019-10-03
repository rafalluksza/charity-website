import React from 'react'
import {Field, reduxForm} from "redux-form";


const WizardThirdStep = ( {handleSubmit, prevPage}) => {

    return (
        <div className='firstStep'>
            <h3> Podaj liczbe 60l worków, w które spakowałęś/aś rzeczy: </h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <Field
                        name='cities'
                        component='select'>
                        <option value='Poznan'>Poznań</option>
                        <option value='Warszawa'>Warszawa</option>
                        <option value='Krakow'>Kraków</option>
                        <option value='Wroclaw'>Wrocław</option>
                        <option value='Katowice'>Katowice</option>
                    </Field>
                    <label> Komu chcesz pomóc:
                        <label><Field
                            component='input'
                            name='dzieciom'
                            type='checkbox'
                        />Dzieciom</label>
                        <Field
                            component='input'
                            name='samotnym matkom'
                            type='checkbox'
                        />
                        <Field
                            component='input'
                            name='bezdomnym'
                            type='checkbox'
                        />
                        <Field
                            component='input'
                            name='niepełnosprawnym'
                            type='checkbox'
                        />
                        <Field
                            component='input'
                            name='osobom starszym'
                            type='checkbox'
                        />
                    </label>

                    <label> Wpisz nazwę konkretnej organizacji (opcjonalnie)
                        <Field
                            component='input'
                            name='localizationSpecific'
                            type='text'
                            />
                    </label>

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
})(WizardThirdStep)