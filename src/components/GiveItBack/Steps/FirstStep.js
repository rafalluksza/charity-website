import React, {useState} from 'react'
import {Button} from "react-bootstrap";
import {connect} from 'react-redux';
import {addStep} from '../../Redux/actions/actions';
import store from '../../Redux/store/Store';
import {Field} from "redux-form";

const FirstStep = ({dispatch}) => {

    // const [ data, setData] = useState([])

    // const handleOptionChange = (name) => {
    //     switch (name) {
    //         case 'clothesGood':
    //             return setData([...data, name]);
    //         case 'clothesTrash':
    //             return setData([...data, name]);
    //         case 'zabawki':
    //             return setData([...data, name]);
    //         case 'ksiazki':
    //             return setData([...data, name]);
    //         case 'inne':
    //             return setData([...data, name]);
    //         default:
    //             return data;
    //     }
    // };

    // const clickSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(data)
    //     dispatch(addStep(data))
    //     console.log(store.getState())
    //     // setData([])
    // }


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
                                name='clothesGood'
                                value='clothesGood'
                                // onChange={e=>handleOptionChange(e.target.name)}
                            />
                                {''} Ubrania,które nadają się do ponownego użycia
                            </label>
                        </div>
                        <div>
                            <label htmlFor="clothesTrash">
                            <Field
                                component='input'
                                type='radio'
                                name='clothesTrash'
                                value='clothesTrash'
                                // onChange={e=>handleOptionChange(e.target.name)}
                            />
                                {''} Ubrania do wyrzucenia
                            </label>
                        </div>
                        <div>
                            <label htmlFor="zabawki">
                                <Field
                                    component='input'
                                    type='radio'
                                    name='zabawki'
                                    value='zabawki'
                                    // onChange={e=>handleOptionChange(e.target.name)}
                                />
                                {''} Zabawki
                            </label>
                        </div>
                        <div>
                            <label htmlFor="ksiazki">
                                <Field
                                    component='input'
                                    type='radio'
                                    name='ksiazki'
                                    value='ksiazki'
                                    // onChange={e=>handleOptionChange(e.target.name)}
                                />
                                {''} książki
                            </label>
                        </div>
                        <div>
                            <label htmlFor='inne'>
                                <Field
                                    component='input'
                                    type='radio'
                                    name='inne'
                                    value='inne'
                                    // onChange={e=>handleOptionChange(e.target.name)}
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

const mapState = state => ({
    form: state
})

const mapDispatch = dispatch => ({
    next: (data) => dispatch(addStep(data))

})

export default connect(mapState, mapDispatch)(FirstStep);