import React from 'react'
import Decoration from "../HomeHeader/Decoration";


const HomeAbout = () => {

    return (
        <div id='about'>
            <div className='content'>
                <div className='content-conteiner'>
                    <h2>O nas</h2>
                    <Decoration/>
                    <h3>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</h3>
                    <img src={require(`./../../assets/Signature.svg`)} alt='signature' />
                </div>
            </div>
            <div className='img'></div>
        </div>
    )
}

export default HomeAbout;