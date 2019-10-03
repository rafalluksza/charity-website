import React from 'react';
import Decoration from "../Elements/Decoration";
import Button2 from "../Buttons/Button2";
import Button1 from "../Buttons/Button1";


const Intro = () => {


    return (
        <div className='intro'>
            <h2>Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce</h2>
            <Decoration/>
            <div className='intro-btn'>
                <Button1 />
                <Button2 />
            </div>
        </div>
    )
}

export default Intro;