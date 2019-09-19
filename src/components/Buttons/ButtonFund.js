import React from 'react';

const ButtonFund = (props) => {

    const handleClick = () => {

        if (typeof props.setPageToRender ==='function') {
            props.setPageToRender(props.name)
        }
    }

    return (
        <button onClick={handleClick} className='btnWho' >{props.text}</button>
    )
}

export default ButtonFund;
