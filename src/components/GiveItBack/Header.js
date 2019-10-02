import React from 'react'
import Decoration from "../Elements/Decoration";

const Header = () => {


    return (
        <div id='header-gib'>
            <div className='header-img'>
                <div className='intro-gib'>
                    <h2>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                    <Decoration/>
                    <h2 style={{fontWeight: 'lighter'}} >Wystarczą 4 proste kroki:</h2>
                    <div className='square-container'>
                        <div className='square'>
                            <h3>1</h3>
                            <span>Wybierz rzeczy</span>
                        </div>

                        <div className='square'>
                            <h3>2</h3>
                            <span>Spakuje je do worka</span>
                        </div>
                        <div className='square'>
                            <h3>3</h3>
                            <span>Wybierz fundację</span>
                        </div>
                        <div className='square'>
                            <h3>4</h3>
                            <span>Zamów kuriera</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;