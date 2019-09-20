import React, { Component } from 'react';
import { withFirebase } from '../Firebase';


const UserList = ({users}) => {


    return (
        <ul>
            {users.map(user=> (
                <li key={user.uid}>
                    <span>
                        <strong>ID: </strong> {user.uid}
                    </span>
                    <span>
                        <strong>NAME: </strong> {user.name}
                    </span>
                    <span>
                        <strong>EMAIL: </strong> {user.email}
                    </span>
                </li>
            ) )}
        </ul>
    )
};

export default withFirebase(UserList);