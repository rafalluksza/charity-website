import React from 'react';
import { withFirebase } from '../Firebase';
import {Link, Route} from "react-router-dom";
import FundList from "./FundList";
import NGOList from "./NGOList";
import LocalList from "./LocalList";


const MessagesList = ({match}) => {

    return (
        <div>
            <div>
                <ul className='nav m-3'>
                    <li className='nav-item' ><Link className='nav-link' to={`${match.url}/fundation`}>Fundacje</Link></li>
                    <li className='nav-item' ><Link className='nav-link' to={`${match.url}/ngo`}>NGO</Link></li>
                    <li className='nav-item' ><Link className='nav-link' to={`${match.url}/local`}>Lokalne</Link></li>
                </ul>
            </div>

            <div>
                <Route  path={`${match.path}/fundation`} component={FundList}/>
                <Route  path={`${match.path}/ngo`} component={NGOList}/>
                <Route  path={`${match.path}/local`} component={LocalList}/>
            </div>

        </div>
    )
};

export default withFirebase(MessagesList);