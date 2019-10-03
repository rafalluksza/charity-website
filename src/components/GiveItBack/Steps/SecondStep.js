import React, {useState} from 'react'
import {Button} from "react-bootstrap";
import {connect} from 'react-redux';
import {addStep} from '../../Redux/actions/actions';
import store from '../../Redux/store/Store'
import {Field} from "redux-form";


const SecondStep = ({dispatch}) => {

    // const [ data, setData] = useState([])

    // const handleOptionChange = (e) => {
    //     setData({value: e.target.value})
    // };

    // const clickSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(data)
    //     dispatch(addStep(data))
    //     console.log(store.getState())
    //     setData([])
    // }
    //
    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.next(data)
    // }

    return (
        <div className='firstStep'>
            <h3> Zaznacz co chcesz oddać: </h3>
                <div>
                    <Field>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </Field>
                </div>
        </div>
    )
}

// const mapState = state => ({
//     form: state
// })
//
// // const mapDispatch = dispatch => ({
// //     next: (data) => dispatch(updateForm(data))
// //
// // })

// export default connect(mapState, mapDispatch)(SecondStep);
export default SecondStep;