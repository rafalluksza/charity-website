import React, {useEffect, useState} from 'react';
import { withFirebase } from '../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AddToTableForm from "./AddToTableForm";
import RegEdit from "./RegEdit";




const FundList = ({firebase}) => {

    const [loading, setLoading ] = useState(false);
    const [fundations, setFundations ] = useState([]);
    const [edit, setEdit] = useState(false);
    const [uid, setUid] = useState("")

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

    const handleDelete = (uid) => {
        firebase.fund(uid).remove()
    }


    const handleEdit = (uid) => {
        setEdit(true);
        setUid(uid);
    }

    const isEdited = (props) => {
        setEdit(props);
    }


    return (
        <div>
            <div style={{height:"100px"}}>
                <AddToTableForm/>
                <div style={{marginTop: "10px"}}>
                { edit ? <RegEdit uid={uid} isEdited={isEdited}/> : ""}
                </div>
            </div>
            { loading && <div style={{width: "100%", height: "40px", fontSize: "20px", color: "white", backgroundColor: "green", textAlign: "center", display: "flex", alignItems:"center", justifyContent:"center"}}><div> Loading...</div></div> }
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
            <Table style={{width: "90vw"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Nazwa</TableCell>
                        <TableCell>Cel</TableCell>
                        <TableCell>Przedmoty</TableCell>
                        <TableCell align={"right"}>Akcje</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fundations.map(fundation=> {
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
                            <TableCell align={"right"} style={{width: "200px"}}>
                                <Button variant="outlined" onClick={() => handleDelete(fundation.uid)} style={{backgroundColor: 'red', color: 'white'}}>
                                    Usuń
                                </Button>
                                {!edit ?
                                    <Button style={{marginLeft: "10px"}} onClick={()=>handleEdit(fundation.uid)} variant="outlined" >Edytuj</Button> :
                                    ""}
                            </TableCell>
                        </TableRow>
                     ) })}
                </TableBody>
            </Table>
            </div>
        </div>
    )
};

export default withFirebase(FundList);