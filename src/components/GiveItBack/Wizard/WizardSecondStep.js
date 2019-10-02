import React from 'react'
import {Field, reduxForm} from "redux-form";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';



const WizardSecondStep = ({handleSubmit, prevPage, classes}) => {
    console.log(handleSubmit, prevPage)

    const renderFromHelper = ({ touched, error }) => {
        if (!(touched && error)) {
            return
        } else {
            return <FormHelperText>{touched && error}</FormHelperText>
        }}

    const renderSelectField = ({
                                   input,
                                   label,
                                   meta: { touched, error },
                                   children,
                                   ...custom
                               }) => (
        <FormControl error={touched && error}>
            <InputLabel htmlFor="number-of-bags">Liczba 60l worków</InputLabel>
            <Select
                native
                {...input}
                {...custom}
                inputProps={{
                    name: 'bags',
                    id: 'number-of-bags'
                }}
            >
                {children}
            </Select>
            {renderFromHelper({ touched, error })}
        </FormControl>
    )


    return (
        <div className='form-container'>
            <p> Krok 2/4</p>
            <h3> Podaj liczbe 60l worków, w które spakowałęś/aś rzeczy: </h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-select'>
                        <p> Liczba 60l worków</p>

                        <div>
                            <Field
                                classes={classes}
                                name="howManyBags"
                                component={renderSelectField}
                                label="howManyBags"
                            >
                                <option>  </option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Field>
                        </div>



                    {/*    <Field*/}
                    {/*        name='bags'*/}
                    {/*        component='select'>*/}
                    {/*        <option> wybierz </option>*/}
                    {/*        <option value='1'>1</option>*/}
                    {/*        <option value='2'>2</option>*/}
                    {/*        <option value='3'>3</option>*/}
                    {/*        <option value='4'>4</option>*/}
                    {/*        <option value='5'>5</option>*/}
                    {/*    </Field>*/}
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
