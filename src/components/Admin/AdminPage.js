import React, {useState, useEffect} from 'react';
import { withFirebase} from "../Firebase";
import UserList from "./UserList";

const AdminPage = (props) => {

    const [loading, setLoading ] = useState(false);
    const [messages, setMessages ] = useState([]);

    useEffect(()=> {
        setLoading(true);

        props.firebase.messages().on('value', snapshot => {
            const messagesObject = snapshot.val();
            const messagesList = Object.keys(messagesObject).map(key => ({
                ...messagesObject[key],
                uid: key,
            }));
            setMessages(messagesList);
            setLoading(false)
        });
    },[]);

    return (
        <div>
            <div className='admin-header'>
                <h2>Strona administratora</h2>
            </div>
            { loading && <div>Loading...</div>}
            <UserList messages={messages}/>
        </div>

    )
}

export default withFirebase(AdminPage);

