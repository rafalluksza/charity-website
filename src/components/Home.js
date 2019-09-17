import React from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps/HomeSimpleSteps";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeContact from "./HomeContact/HomeContact";
import HomeWho from "./HomeWho/HomeWho";


const Home = () => {

    return (
        <div>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAbout/>
            <HomeWho/>
            <HomeContact/>
        </div>
    )
}

export default Home;