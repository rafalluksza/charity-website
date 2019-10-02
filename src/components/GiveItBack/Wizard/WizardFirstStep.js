import React from 'react'
import {Field, reduxForm} from "redux-form";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';


const WizardFirstStep = ({handleSubmit}) => {

    const radioButton = ({ input, ...rest }) => (
        <FormControl>
            <RadioGroup {...input} {...rest}>
                <FormControlLabel value="clothesGood" control={<Radio />} label="Ubrania,które nadają się do ponownego użycia" />
                <FormControlLabel value="clothesTrash" control={<Radio />} label="Ubrania do wyrzucenia" />
                <FormControlLabel value="zabawki" control={<Radio />} label="Zabawki" />
                <FormControlLabel value="ksiazki" control={<Radio />} label="Książki" />
                <FormControlLabel value="inne" control={<Radio />} label="Inne" />
            </RadioGroup>
        </FormControl>
    )


    return (
        <div className='form-container'>
            <p> Krok 1/4</p>
            <h3> Zaznacz co chcesz oddać: </h3>
            <div className='firstStepForm'>
                <form onSubmit={handleSubmit}>
                    <div className='flex-column-cs'>
                    <Field name="what" component={radioButton}>
                        <Radio value="clothesGood" label="clothesGood" />
                        <Radio value="clothesTrash" label="clothesTrash" />
                        <Radio value="zabawki" label="zabawki" />
                        <Radio value="ksiazki" label="ksiazki" />
                        <Radio value="inne" label="inne" />
                    </Field>
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
    forceUnregisterOnUnmount: true,
})(WizardFirstStep);