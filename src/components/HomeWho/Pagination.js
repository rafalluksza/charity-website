import React from 'react'
import {Link} from "react-scroll";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for ( let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }

    if (pageNumbers.length === 1) {
        return <nav/>
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'><Link className='page-link' onClick={()=> paginate(number)} to='#who'>{number}</Link></li>
                ))}
            </ul>
        </nav>

    )

}





export default Pagination