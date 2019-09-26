import React from 'react';
import NavMenu from "./NavMenu";
import LoginMenu from "./LoginMenu";
// import { withFirebase } from "../Firebase";
// import { getLogin } from "../Redux/actions/actions";
// import {compose} from 'redux';
// import {connect} from 'react-redux'


const Navigation = (props, {dispatch}) => {

    // const [authUser, setAuthUser] = useState(null);
    //
    //
    //
    // useEffect(()=> {
    //     console.log(authUser)
    //     props.firebase.auth.onAuthStateChanged(authUser => {
    //         authUser
    //             ? props.authenticateUser(authUser)
    //             : props.authenticateUser(null)
    //     })
    //
    //
    // },[authUser]);

    return (
        <div className='topMenu'>
                <LoginMenu/>
                <NavMenu/>
        </div>
    )
}
//
// const mapState = state => {
//     console.log(state)
//     return ({user: state.user})
// }
//
// const mapDispatch = dispatch => ({authenticateUser: getUser => dispatch(getLogin(getUser))})
//
//
// export default compose(
//     withFirebase,
//     connect(mapState, mapDispatch),)(Navigation);

export default Navigation;