import React from 'react'
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {withFirebase} from "../../Firebase/context";
import {connect} from "react-redux";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const WizardFifthStep = ({handleSubmit, prevPage, values}) => {
    return (
        <div className='form-container'>
            <h3> Podsumowanie Twojej darowizny </h3>
            <div className='firstStepForm'>
                {/*className={classes.root}*/}
                <Paper style={{width: '500px'}} >
                    {/*className={classes.table}*/}
                    <Table >
                        <TableBody>
                            <TableRow >
                                <TableCell colSpan={1}>Oddajesz:</TableCell>
                                <TableCell colSpan={3}>Ikonka ubranka {values.howManyBags} worki, {values.what}, {values.undefined} </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan={1}>Dla lokalizacji:</TableCell>
                                <TableCell colSpan={3}>{values.cities}</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan={1}>Ulica odbioru:</TableCell>
                                <TableCell colSpan={3}>{values.street}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Miasto:</TableCell>
                                <TableCell>{values.city}</TableCell>
                                <TableCell>Kod pocztowy:</TableCell>
                                <TableCell>{values.cityCode}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Telefon:</TableCell>
                                <TableCell>{values.phone}</TableCell>
                                <TableCell>Data odbioru:</TableCell>
                                <TableCell>{values.date}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Godzina:</TableCell>
                                <TableCell>{values.time}</TableCell>
                                <TableCell>Uwagi dla kuriera:</TableCell>
                                <TableCell>{values.notes}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

                <form onSubmit={handleSubmit}>
                    <div className='form-btns'>
                        <button className='btn-form' type='button' onClick={prevPage}>
                            Powrót
                        </button>
                        <button className='btn-form' style={{width:'140px' }} type='submit'>
                            Potwierdzam
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapState = ({form}) => ({
        values: form.wizard.values
})

export default compose(
    withFirebase,
    reduxForm({
        form: 'wizard',
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
    }),
    connect(mapState))(WizardFifthStep)

// reduxForm({
//     form: 'wizard',
//     destroyOnUnmount: false,
//     forceUnregisterOnUnmount: true,
// })(WizardFifthStep);

