import React from 'react'
import {Field, reduxForm} from "redux-form";
import TextField from '@material-ui/core/TextField'


const WizardFourthStep = ({handleSubmit, prevPage}) => {

    const renderTextField = ({
                                 label,
                                 input,
                                 meta: { touched, invalid, error },
                                 ...custom
                             }) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )


    return (
        <div className='form-container'>
            <p> Krok 4/4</p>
            <h3> Podaj ardres oraz termin odbioru rzeczy przez kuriera: </h3>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex-row-cs'>
                        <div className='flex-column-cs form-column'>
                            <div> Adres odbioru: </div>
                            <div>
                                <Field name="street" component={renderTextField} label="Ulica" />

                                {/*<label> Ulica*/}
                                {/*    <Field*/}
                                {/*        component='input'*/}
                                {/*        name='street'*/}
                                {/*        type='text'*/}
                                {/*    />*/}
                                {/*</label>*/}
                            </div>
                            <div>
                                <Field name="city" component={renderTextField} label="Miasto" />
                                {/*<label> Miasto*/}
                                {/*    <Field*/}
                                {/*        component='input'*/}
                                {/*        name='city'*/}
                                {/*        type='text'*/}
                                {/*    />*/}
                                {/*</label>*/}
                            </div>
                            <div>
                                <Field name="cityCode" component={renderTextField} label="Kod pocztowy" />
                                {/*<label> Kod pocztowy*/}
                                {/*    <Field*/}
                                {/*        component='input'*/}
                                {/*        name='cityCode'*/}
                                {/*        type='text'*/}
                                {/*    />*/}
                                {/*</label>*/}
                            </div>
                            <div>
                                <Field name="phone" component={renderTextField} label="Numer telefonu" />
                                {/*<label> Numer telefonu*/}
                                {/*    <Field*/}
                                {/*        component='input'*/}
                                {/*        name='phone'*/}
                                {/*        type='text'*/}
                                {/*    />*/}
                                {/*</label>*/}
                            </div>
                        </div>
                        <div className='form-column'>
                            <div> Termin odbioru: </div>
                            <div>
                                <Field name="date" component={renderTextField} label="Data" />
                            {/*    <label> Data*/}
                            {/*    <Field*/}
                            {/*        component='input'*/}
                            {/*        name='date'*/}
                            {/*        type='text'*/}
                            {/*    />*/}
                            {/*</label>*/}
                            </div>
                            <div>
                                <Field name="time" component={renderTextField} label="Godzina" />

                            {/*    <label> Godzina*/}
                            {/*    <Field*/}
                            {/*        component='input'*/}
                            {/*        name='time'*/}
                            {/*        type='text'*/}
                            {/*    />*/}
                            {/*</label>*/}
                            </div>
                            <div>
                                <Field
                                    name="notes"
                                    component={renderTextField}
                                    label="Uwagi dla kuriera"
                                    multiline
                                    rowsMax="4"
                                    margin="normal"
                                />
                            {/*<label> Uwagi dla kuriera*/}
                            {/*    <Field*/}
                            {/*        component='input'*/}
                            {/*        name='notes'*/}
                            {/*        type='textarea'*/}
                            {/*    />*/}
                            {/*</label>*/}
                            </div>
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
        </div>
    )
}

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(WizardFourthStep)