import React from 'react'
import {Field, reduxForm} from "redux-form";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';


const WizardThirdStep = ( {handleSubmit, prevPage}) => {

    const renderCheckbox = ({ input, label }) => {
        console.log(input)
     return   (
        // console.log(input)
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={input.value? true : false}
                        onChange={input.onChange}
                    />
                }
                label={label}
            />
        </div>
    )}

    let options = [
        {label: 'Dzieciom', value: ' Dzieciom '},
        {label: 'Samotnym matkom', value: ' Samotnym matkom '},
        {label: 'Bezdomnym', value: ' Bezdomnym '},
        {label: 'Niepełnosprawnym', value: ' Niepełnosprawnym '},
        {label: 'Osobom starszym', value: ' Osobom starszym '},

    ];

    return (
        <div className='form-container'>
            <p> Krok 3/4</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label> Lokalizacja: </label>
                            <Field
                                name='cities'
                                component='select'>
                                <option>Wybierz</option>
                                <option value='Poznan'>Poznań</option>
                                <option value='Warszawa'>Warszawa</option>
                                <option value='Krakow'>Kraków</option>
                                <option value='Wroclaw'>Wrocław</option>
                                <option value='Katowice'>Katowice</option>
                            </Field>
                    </div>
                    <div>
                    <label> Komu chcesz pomóc: </label>
                        <div className='flex-row-cs'>
                            <Field component={ReduxCheckbox(Checkboxes)}
                                   // itemComponent={renderCheckbox}
                                   data ={options} />
                        {/*<Field name="Dzieciom" component={renderCheckbox} label="Dzieciom" />*/}
                        {/*<Field name="samotnym matkom" component={renderCheckbox} label="Samotnym matkom" />*/}
                        {/*<Field name="bezdomnym" component={renderCheckbox} label="Bezdomnym" />*/}
                        {/*<Field name="niepełnosprawnym" component={renderCheckbox} label="Niepełnosprawnym" />*/}
                        {/*<Field name="osobom starszym" component={renderCheckbox} label="Osobom starszym" />*/}
                    </div>
                        {/*<Field*/}
                        {/*    component='input'*/}
                        {/*    name='dzieciom'*/}
                        {/*    type='checkbox'*/}
                        {/*    label='dzieciom'*/}
                        {/*    format={v => v === '1'}*/}
                        {/*    normalize={v => v ? 'dzieciom' : '0'}*/}
                        {/*/>*/}
                        {/*<Field*/}
                        {/*    component='input'*/}
                        {/*    name='samotnym matkom'*/}
                        {/*    type='checkbox'*/}
                        {/*    format={v => v === '1'}*/}
                        {/*    normalize={v => v ? 'samotnym matkom' : '0'}*/}
                        {/*/>*/}
                        {/*<Field*/}
                        {/*    component='input'*/}
                        {/*    name='bezdomnym'*/}
                        {/*    type='checkbox'*/}
                        {/*    format={v => v === '1'}*/}
                        {/*    normalize={v => v ? 'bezdomnym' : '0'}*/}
                        {/*/>*/}
                        {/*<Field*/}
                        {/*    component='input'*/}
                        {/*    name='niepełnosprawnym'*/}
                        {/*    type='checkbox'*/}
                        {/*    format={v => v === '1'}*/}
                        {/*    normalize={v => v ? 'niepelnosprawnym' : '0'}*/}
                        {/*/>*/}
                        {/*<Field*/}
                        {/*    component='input'*/}
                        {/*    name='osobom starszym'*/}
                        {/*    type='checkbox'*/}
                        {/*    format={v => v === '1'}*/}
                        {/*    normalize={v => v ? 'osobom starszym' : '0'}*/}
                        {/*/>*/}
                    </div>
                    <div className='flex-column'>
                        <label> Wpisz nazwę konkretnej organizacji (opcjonalnie) </label>
                        <div>
                        <Field
                                component='input'
                                name='localizationSpecific'
                                type='text'
                                />
                        </div>
                    </div>

                    <div className='form-btns'>
                    <button className='btn-form' type='button' onClick={prevPage}>
                        Powrót
                    </button>

                    <button className='btn-form' type='submit'>
                        Dalej
                    </button>
                    </div>
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