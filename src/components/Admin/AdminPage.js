import React from 'react';
import { withFirebase} from "../Firebase";
import {AdminPageNav} from "./AdminPageNav";
import {Route} from "react-router-dom";
import MessagesList from "./MessagesList";
import WhoPage from "./WhoPage";
import UsersList from "./UsersList";
import NavigationOther from "../Navigation/NavigationOther";


const AdminPage = (props) => {
    console.log(props)
    // const [loading, setLoading ] = useState(false);
    // const [messages, setMessages ] = useState([]);

    // useEffect(()=> {
    //     setLoading(true);
    //
    //     props.firebase.messages().on('value', snapshot => {
    //         const messagesObject = snapshot.val();
    //         const messagesList = Object.keys(messagesObject).map(key => ({
    //             ...messagesObject[key],
    //             uid: key,
    //         }));
    //         setMessages(messagesList);
    //         setLoading(false)
    //     });
    // },[]);

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


