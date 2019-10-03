import React, {useState, useEffect} from 'react';
import { withFirebase} from "../Firebase";
import UserList from "./UserList";

const AdminPage = (props) => {

    const [loading, setLoading ] = useState(false);
    const [users, setUsers ] = useState([]);

    useEffect(()=> {
        setLoading(true);

        props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            setUsers(usersList);
            setLoading(false)
        });
    },[]);

    return (
        <div>
            <h1>Admin</h1>
            { loading && <div>Loading...</div>}
            <UserList users={users}/>
        </div>

    )
}

export default withFirebase(AdminPage);

