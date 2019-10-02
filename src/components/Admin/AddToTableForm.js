import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {compose} from "redux";
import {withFirebase} from "../Firebase";



const AddToTableForm = ({firebase}) => {

    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [items, setItems] = useState('');

    const [send, setSend] = useState(false);

    const reset = () => {
        setItems('');
        setGoal('');
        setName('');
    };

    const isSend = () => {
        setSend(true)
        setTimeout(()=> setSend(false),3000)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        firebase.fundations().push({
            goal: goal,
            items: items,
            name: name,
        })
        reset()
        isSend()
    }


    return (
        <div>
            {send && <div className='alert alert-success'> Dodano do listy </div>}
            {!send &&
            <form onSubmit={e => onSubmit(e)} className='flex-row-cs'>

                <div className='ml-2'>
                    <input name='name'  style={{maxWidth: '20rem' }} placeholder='Nazwa fundacji' className="form-control" type='text' value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className='ml-5'>
                    <input name='goal' style={{maxWidth: '20rem' }} placeholder='Cel fundacji' className="form-control" type='text' value={goal} onChange={e => setGoal(e.target.value)}/>
                </div>
                <div className='ml-5'>
                    <input name='items' style={{maxWidth: '20rem' }} placeholder='Przedmioty zainteresowania' className="form-control" type='text' value={items} onChange={e => setItems(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-success ml-5'>
                    Dodaj
                </button>

            </form>
            }
        </div>
    )
}

export default withFirebase(AddToTableForm);