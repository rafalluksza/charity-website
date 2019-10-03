import React, {useEffect, useState} from 'react';
import { withFirebase } from '../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const MessagesList = ({firebase}) => {

    const [loading, setLoading ] = useState(false);
    const [users, setUsers ] = useState([]);

    useEffect(()=> {
        setLoading(true);

        firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            setUsers(usersList);
            setLoading(false)
        });
    },[]);



    return (
        <Paper>
            { loading && <div> Loading </div>}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name/Email</TableCell>
                        <TableCell>Formularz</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {users.map(user=> (
                    <TableRow key={user.uid}>
                        <TableCell>
                            {user.email}
                        </TableCell>
                        <TableCell>
                            Formularze
                        </TableCell>
                    </TableRow>
                ) )}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default withFirebase(MessagesList);