import React, {useState, useEffect, AuthContext} from 'react';
import {getLogin} from "../Redux/actions/actions";
import {compose} from "redux";
import {withFirebase} from "../Firebase";
import {connect} from "react-redux";

const AuthProvider = (props, {children}) => {
    const [currentUser, setCurrentUser] = useState(null)


    useEffect(()=> {
        console.log(currentUser);
        props.firebase.auth.onAuthStateChanged(setCurrentUser);
    },[]);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

const mapState = state => {
    console.log(state)
    return ({user: state.user})
}

const mapDispatch = dispatch => ({authenticateUser: getUser => dispatch(getLogin(getUser))})

export default compose(
    withFirebase,
    connect(mapState, mapDispatch),)(AuthProvider);