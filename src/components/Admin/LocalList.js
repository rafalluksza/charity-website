import React, {useEffect, useState} from 'react';
import { withFirebase } from '../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const LocalsList = ({firebase}) => {

    const [loading, setLoading ] = useState(false);
    const [locals, setLocals ] = useState([]);

    useEffect(()=> {
        setLoading(true);

        firebase.locals().on('value', snapshot => {
            const localsObject = snapshot.val();
            const localsList = Object.keys(localsObject).map(key => ({
                ...localsObject[key],
                uid: key,
            }));
            setLocals(localsList);
            setLoading(false)
        });
    },[]);



    return (
        <Paper>
            { loading && <div> Loading </div>}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Cel</TableCell>
                        <TableCell>Przedmoty</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {locals.map(local=> (
                        <TableRow key={local.uid}>
                            <TableCell>
                                {local.name}
                            </TableCell>
                            <TableCell>
                                {local.goal}
                            </TableCell>
                            <TableCell>
                                {local.items}
                            </TableCell>
                        </TableRow>
                    ) )}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default withFirebase(LocalsList);