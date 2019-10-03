import React from 'react';
import { withFirebase } from '../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const UserList = ({messages}) => {


    return (
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
                {messages.map(message=> (
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
                ) )}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default withFirebase(UserList);