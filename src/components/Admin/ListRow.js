import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import {Link, useRouteMatch} from "react-router-dom";
import React from "react";


export const ListRow = ({fundation, handleDelete, handleEdit, edit}) => {

    const {url} = useRouteMatch()

    return (
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
                <Button name={fundation.id} variant="outlined" onClick={e => handleDelete(e)} style={{backgroundColor: 'red', color: 'white'}}>
                    Usuń
                </Button>
                {!edit ?
                    <Button component={Link} onClick={event=>handleEdit(event)} to={`${url}/${fundation.uid}`} variant="outlined" >Edytuj</Button> :
                    ""}
            </TableCell>
        </TableRow>
    )
}

