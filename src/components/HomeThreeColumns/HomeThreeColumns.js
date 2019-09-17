import React from 'react'
import ColumnItem from "./ColumnItem";


const HomeThreeColumns = () => {

    return (
        <div className='threeColumns'>
            <ColumnItem num={'10'} title={'Oddanych worków'} p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum ex eros, a placerat risus.'}/>
            <ColumnItem num={'5'} title={'Wspartych organizacji'} p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum ex eros, a placerat risus.'}/>
            <ColumnItem num={'7'} title={'Zorganizowanych zbiórek'} p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum ex eros, a placerat risus.'}/>
        </div>
    )
}

export default HomeThreeColumns;