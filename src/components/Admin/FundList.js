import React, {useEffect, useState} from 'react';
import { withFirebase } from '../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddToTableForm from "./AddToTableForm";




const FundList = ({firebase}) => {

    const [loading, setLoading ] = useState(false);
    const [fundations, setFundations ] = useState([]);

    useEffect(()=> {
        setLoading(true);

        firebase.fundations().on('value', snapshot => {
            const fundationsObject = snapshot.val();
            const fundationsList = Object.keys(fundationsObject).map(key => ({
                ...fundationsObject[key],
                uid: key,
            }));
            setFundations(fundationsList);
            setLoading(false)
        });
    },[]);

    const handleDelete = (e) => {
        firebase.fund(e.target.value).remove()
    }




    return (
        <Paper>
            { loading && <div> Loading </div>}
            <AddToTableForm/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Cel</TableCell>
                        <TableCell>Przedmoty</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fundations.map(fundation=> (
                        <TableRow key={fundation.uid}>
                            <TableCell>
                                {fundation.name}
                            </TableCell>
                            <TableCell>
                                {fundation.goal}
                            </TableCell>
                            <TableCell>
                                {fundation.items}
                            </TableCell>
                            <TableCell>
                                <Button value={fundation.uid} variant="outlined" onClick={e => handleDelete(e)} style={{backgroundColor: 'red', color: 'white'}}>
                                    Usuń
                                </Button>
                            </TableCell>
                        </TableRow>
                    ) )}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default withFirebase(FundList);