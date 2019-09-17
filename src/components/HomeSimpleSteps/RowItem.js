import React from 'react'


const RowItem = (props) => {

    return (
        <div className='rowItem'>
            <img src={require(`./../../assets/${props.name}.svg`)} alt={props.name}/>
            <h3>{props.title}</h3>
            <div className='line' />
            <p>{props.p}</p>
        </div>
    )
}

export default RowItem;