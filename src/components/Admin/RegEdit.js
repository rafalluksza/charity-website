import React, {useEffect, useState} from "react";
import {withFirebase} from "../Firebase";



const RegEdit = ({firebase, uid, isEdited}) => {

    const [fundName, setName] = useState('');
    const [fundGoal, setGoal] = useState('');
    const [fundItems, setItems] = useState('');

    const [send, setSend] = useState(false);

    const reset = () => {
        setItems('');
        setGoal('');
        setName('');
    };

    const isSend = () => {
        setSend(true)
        setTimeout(()=> {
            setSend(false)
            isEdited(false);
        },3000)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        firebase.fund(uid).update({
            goal: fundGoal,
            items: fundItems,
            name: fundName,
        })
        reset();
        isSend();
    }

    useEffect(()=> {
        firebase.fund(uid).once('value', snapshot => {
            const fund = snapshot.val();
            setItems(fund.items);
            setGoal(fund.goal);
            setName(fund.name);
        });
    },[]);

    return (
        <div>
            {send && <div className='alert alert-success'> Zaktualizowano </div>}
            {!send &&
            <form onSubmit={e => onSubmit(e)} className='flex-row-cs'>

                <div className='ml-2'>
                    <input name='name'  style={{maxWidth: '20rem' }}  className="form-control" type='text' value={fundName} onChange={e => setName(e.target.value)}/>
                </div>
                <div className='ml-5'>
                    <input name='goal' style={{maxWidth: '20rem' }} className="form-control" type='text' value={fundGoal} onChange={e => setGoal(e.target.value)}/>
                </div>
                <div className='ml-5'>
                    <input name='items' style={{maxWidth: '20rem' }}  className="form-control" type='text' value={fundItems} onChange={e => setItems(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-success ml-5'>
                    Zapisz
                </button>

            </form>
            }
        </div>
    )
}

export default withFirebase(RegEdit);