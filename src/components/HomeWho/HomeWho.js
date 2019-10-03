import React, {useEffect, useState} from 'react'
import Decoration from "../Elements/Decoration";
import ButtonFund from "../Buttons/ButtonFund";
import TableFund from "./TableFund";

const HomeWho = () => {
    const [path, setPath] = useState('fund')

    useEffect(()=>{
        setPath(path)
    },[path])

    const setPageToRender = (props) => {
        setPath(props)
    }

    return (
        <div id='who' name='who'>
            <div className='who-container'>
                <h2>Komu pomagamy?</h2>
                <Decoration/>
                <div className='buttons'>
                    <ButtonFund name={'fund'} text={'Fundacjom'} setPageToRender={setPageToRender}/>
                    <ButtonFund name={'ngo'} text={'Organizacjom pozarządowym'} setPageToRender={setPageToRender}/>
                    <ButtonFund name={'local'} text={'Lokalnym zbiórkom'} setPageToRender={setPageToRender}/>
                </div>
                 <TableFund path={path}/>
            </div>
        </div>
    )
}

export default HomeWho;

