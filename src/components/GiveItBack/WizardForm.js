import React, {Component} from 'react'
import PropTypes from 'prop-types';
import WizardFirstStep from "./Wizard/WizardFirstStep";
import WizardSecondStep from "./Wizard/WizardSecondStep";
import WizardThirdStep from "./Wizard/WizardThirdStep";
import WizardFourthStep from "./Wizard/WizardFourthStep";
// import {connect} from "react-redux";


// const WizardForm = (props) => {
//     const {onSubmit} = props
//
//     const [page, setPage] = useState(1);
//     // const [nextPage, setNextPage] = useState(page);
//     // const [prevPage, setPrevPage] = useState(page);
//
//      console.log(page)
//     const nextPage = () => {
//         console.log(page)
//         setPage(page+1);
//         console.log(page)
//     }
//     const prevPage = ()=> {
//         setPage(page-1);
//         console.log(page)
//
//     }
//
//
//     useEffect(()=> {
//         console.log(page)
//
//     },[page])
//

class WizardForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    prevPage() {
        this.setState({ page: this.state.page - 1 })
    }



    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        return (
            <div>
                {page === 1 && <WizardFirstStep onSubmit={this.nextPage}/>}
                {page === 2 && (
                    <WizardSecondStep
                        prevPage={this.prevPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <WizardThirdStep
                        prevPage={this.prevPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 4 && (
                    <WizardFourthStep
                        prevPage={this.prevPage}
                        onSubmit={onSubmit}
                    />
                )}
            </div>
        )
    }
};

WizardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

// const mapState = state => ({
//     form: state
// })
//
// const mapDispatch = dispatch => ({
//     next: (value) => dispatch(addForm(value))
// })
//
// export default connect(mapState, mapDispatch)(WizardForm);
export default WizardForm;