import React, {useState, useEffect} from 'react';
import { withFirebase } from '../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Loading} from "../Elements/Loading";


const MessagesList = ({firebase}) => {

    const [loading, setLoading ] = useState(false);
    const [messages, setMessages ] = useState([]);

    useEffect(()=> {
        setLoading(true);
        firebase.db.ref('messages').on('value', snapshot => {
            const messagesObject = snapshot.val();
            const messagesList = Object.keys(messagesObject).map(key => ({
                ...messagesObject[key],
                uid: key,
            }));
            setMessages(messagesList);
            console.log(messages);
            setLoading(false)
        });
    },[]);

    return (
        <div>
        { loading && <div>Loading...</div>}
        { !loading &&
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Message</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {messages.map(message => (
                        <TableRow key={message.uid}>
                            <TableCell>
                                {message.name}
                            </TableCell>
                            <TableCell>
                                {message.email}
                            </TableCell>
                            <TableCell>
                                {message.message}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    }
        </div>
    )
};

export default withFirebase(MessagesList);