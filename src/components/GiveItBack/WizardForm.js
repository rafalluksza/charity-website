import React, { useState} from 'react'
import WizardFirstStep from "./Wizard/WizardFirstStep";
import WizardSecondStep from "./Wizard/WizardSecondStep";
import WizardThirdStep from "./Wizard/WizardThirdStep";
import WizardFourthStep from "./Wizard/WizardFourthStep";
import WizardFifthStep from "./Wizard/WizardFifthStep";
import Important from "./Important";
import {withFirebase} from "../Firebase/context";
import {connect} from "react-redux";
import {compose} from "redux";
import WizardSixthStep from "./Wizard/WizardSixthStep";


const WizardForm = ({firebase, uid}) => {

    // console.log(firebase, uid)
    const [page, setPage] = useState(1);

    const nextPage = ()=> {
        setPage(page+1)
    }

    const prevPage = () => {
        setPage(page-1)
    }


    const onSubmit = (values) => {
        // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        // console.log(values, uid);

        firebase.form(uid).push({
            ...values
        });
        nextPage()
    }

    return (
        <div>
            {page === 1 &&
            <>
                <Important page={page}/>
                <div className='bg-form'>
                <WizardFirstStep onSubmit={nextPage}/>
                </div>
            </>}
            {page === 2 && (
                <>
                    <Important page={page}/>
                    <div className='bg-form'>
                    <WizardSecondStep
                        prevPage={prevPage}
                        onSubmit={nextPage}
                    />
                    </div>
                </>
            )}
            {page === 3 && (
                <>
                    <Important page={page}/>
                    <div className='bg-form'>
                    <WizardThirdStep
                        prevPage={prevPage}
                        onSubmit={nextPage}
                    />
                    </div>
                </>
            )}
            {page === 4 && (
                <>
                    <Important page={page}/>
                    <div className='bg-form'>
                    <WizardFourthStep
                        prevPage={prevPage}
                        onSubmit={nextPage}
                    />
                    </div>
                </>
            )}
            {page === 5 && (
                <>
                    <Important page={page}/>
                    <div className='bg-form'>
                    <WizardFifthStep
                        prevPage={prevPage}
                        onSubmit={onSubmit}
                    />
                    </div>
                </>
            )}
            {page === 6 && (
                <>
                <div className='bg-form'>
                <WizardSixthStep/>
                </div>
                </>
            )}
        </div>
    )
};

const mapState = ({ firebase }) => ({
        uid: firebase.auth.uid,
    });
// const mapDispatch = dispatch => ({
//     next: (value) => dispatch(addForm(value))
// })


export default compose(
    withFirebase,
    connect(mapState))(WizardForm);