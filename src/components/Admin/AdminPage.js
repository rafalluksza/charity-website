import React from 'react';
import { withFirebase} from "../Firebase";
import {AdminPageNav} from "./AdminPageNav";
import {Route} from "react-router-dom";
import MessagesList from "./MessagesList";
import WhoPage from "./WhoPage";
import UsersList from "./UsersList";
import NavigationOther from "../Navigation/NavigationOther";


const AdminPage = (props) => {


    return (
        <div>
            <NavigationOther/>
            <div className='admin-header'>
                <h2>Panel administratora</h2>
            </div>
            <div>
                <AdminPageNav match={props.match}/>
                {/*{ loading && <div>Loading...</div>}*/}
                <Route  path={`${props.match.path}/messages`} component={MessagesList}/>
                <Route  path={`${props.match.path}/users`} component={UsersList}/>
                <Route  path={`${props.match.path}/who`} component={WhoPage}/>
            </div>
        </div>

    )
}

export default withFirebase(AdminPage);


