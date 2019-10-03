import {Button} from "react-bootstrap";
import React from "react";
import {reduxForm} from "redux-form";


let GiveBackForm =  props => {
   const {handleSubmit} = props;




    return (
        <form onSubmit={e => handleSubmit(e)}>

                <Button variant='primary' type='submit'> Dalej </Button>

        </form>
    )
}

GiveBackForm = reduxForm({
    form: 'giveBackForm'
})(GiveBackForm);

export default GiveBackForm;

