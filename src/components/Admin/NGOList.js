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
    const [ngos, setNgos ] = useState([]);

    useEffect(()=> {
        setLoading(true);

        firebase.ngos().on('value', snapshot => {
            const ngosObject = snapshot.val();
            const ngosList = Object.keys(ngosObject).map(key => ({
                ...ngosObject[key],
                uid: key,
            }));
            setNgos(ngosList);
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
                    {ngos.map(ngo=> (
                        <TableRow key={ngo.uid}>
                            <TableCell>
                                {ngo.name}
                            </TableCell>
                            <TableCell>
                                {ngo.goal}
                            </TableCell>
                            <TableCell>
                                {ngo.items}
                            </TableCell>
                        </TableRow>
                    ) )}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default withFirebase(MessagesList);