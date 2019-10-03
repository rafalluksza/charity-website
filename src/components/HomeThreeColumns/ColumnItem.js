import React from 'react'


const ColumnItem = (props) => {

    return (
        <div className='column-item'>
            <h1>{props.num}</h1>
            <h3>{props.title}</h3>
            <p>{props.p}</p>
        </div>
    )
}

export default ColumnItem;